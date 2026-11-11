# Discord bot setup guide

This is the operator guide for Krishna's Discord bot: creating the application,
keeping the token out of git, choosing intents and permissions, and filling in
the Terms of Service and Privacy Policy fields in the Discord Developer Portal.

The legal pages are part of this site:

- **Terms of Service:** <https://portfolio.khong.dev/discord/tos>
- **Privacy Policy:** <https://portfolio.khong.dev/discord/privacy>

If the site moves to another hostname, update both URLs in the Developer Portal
and in the pages themselves (`src/legal.mjs` and `src/data.mjs`).

The token is a password. It is never committed, never pasted into chat, and
never put in a GitOps manifest. If a session needs it, enter it through the
secret prompt; the value goes into the process environment, not the transcript.

## 1. Create the application

1. Open <https://discord.com/developers/applications> and sign in.
2. **New Application** → name it (for example `relay-desk`) → accept the
   Developer Terms → **Create**.
3. On **General Information**, copy the **Application ID** and **Public Key**.
   The application ID is public; it goes in the invite URL. The public key is
   only needed if you use HTTP interactions rather than a gateway bot.
4. Set:
   - **Terms of Service URL:** `https://portfolio.khong.dev/discord/tos`
   - **Privacy Policy URL:** `https://portfolio.khong.dev/discord/privacy`
   - a short description and tags that match what the bot actually does.
5. Save changes. The URLs must be publicly reachable without a login; check them
   in a private browser window before saving.

## 2. Create the bot user and token

1. Open the **Bot** tab → **Add Bot** → confirm.
2. Under **Token**, choose **Reset Token** → copy it once. Discord shows it only
   once. Put it in a local file that git ignores:

   ```bash
   install -m 600 /dev/null .env
   printf 'DISCORD_TOKEN=%s\n' 'paste-token-here' > .env
   ```

   Or, for an agent session, use the secret prompt so the value never appears in
   the transcript.
3. Confirm `.env` is ignored:

   ```bash
   grep -n '^\.env$' .gitignore || echo '.env' >> .gitignore
   git status --short   # .env must not appear
   ```

4. Set the bot's **username** and **icon** on the Bot tab. These are public.

### Rotating a token

Developer Portal → your application → **Bot** → **Reset Token**. The old token
stops working immediately. Update the local `.env` (or the deployment secret),
restart the bot, and check the logs for a successful login. Rotate immediately
if a token appears in a screenshot, shell history, a commit, or a chat message.
Deleting the message is not enough; reset the token.

## 3. Privileged intents

Enable only what the code uses. Every privileged intent is a privacy decision,
and the Privacy Policy must describe the data that follows from it.

| Intent | When to enable it | Default |
| --- | --- | --- |
| **Message Content** | The bot must read message text outside slash commands and mentions. | Off |
| **Server Members** | The bot needs member join/leave events or a complete member list. | Off |
| **Presence** | The bot needs online/idle/dnd status. Almost never needed. | Off |

For a slash-command bot that only replies to interactions, leave all three off.
If Message Content is enabled, the bot must say so in its Privacy Policy and
must not log message bodies beyond the documented retention period. The current
policy says message content is processed only where a feature needs it, and
command/error logs are kept for up to 30 days. Keep the code and the policy in
step.

Privileged intents are requested in code as well as enabled in the portal. A bot
that requests an intent that is not enabled will fail to start; a bot that
enables an intent it never uses is collecting more than it needs.

## 4. OAuth2 scopes and permissions

Use the **OAuth2 → URL Generator** page, or build the URL directly:

```
https://discord.com/oauth2/authorize?client_id=YOUR_APPLICATION_ID&permissions=2147568640&scope=bot%20applications.commands
```

- `bot` — installs the bot user in the guild.
- `applications.commands` — lets the bot register slash commands.
- `permissions=2147568640` — the minimum for a text bot that replies in channels:
  View Channels, Send Messages, Embed Links, Read Message History and Use
  Application Commands.

Add only what a feature needs:

| Permission | Bit | Add when |
| --- | ---: | --- |
| Add Reactions | 64 | The bot reacts to messages. |
| Attach Files | 32768 | The bot uploads files or images. |
| Manage Messages | 8192 | The bot deletes or pins messages. |
| Use External Emojis | 262144 | The bot sends custom emoji. |
| Moderate Members | 1099511627776 | The bot times out or kicks members. |

Do **not** grant Administrator. If a feature appears to need it, split the
feature or use a narrower permission.

For development, register commands in a single test guild so changes appear
immediately. Global commands can take up to an hour to propagate.

## 5. Invite the bot to a test guild

1. Create a private Discord server for testing. Do not test in a community
   server with real members until the basics work.
2. Open the generated invite URL, choose the test server, review the permissions
   shown, and authorise.
3. Confirm the bot appears offline until it is running, then comes online after
   it starts.
4. Run the smallest command (for example `/ping`) and check the reply.
5. Test the deletion path too: remove the bot from the server and confirm it
   leaves; re-invite it and confirm settings are handled as documented.

Optional: add `&guild_id=YOUR_TEST_GUILD_ID&disable_guild_select=true` to the
invite URL to lock the install to that guild.

## 6. Terms of Service and Privacy Policy fields

The Developer Portal asks for these in **General Information**. They are public
links and are checked during verification.

- **Terms of Service URL:** `https://portfolio.khong.dev/discord/tos`
- **Privacy Policy URL:** `https://portfolio.khong.dev/discord/privacy`

The pages cover the required ground for a small bot:

- acceptable use and prohibited behaviour;
- what is stored (Discord user/server/channel IDs, command inputs, timestamps,
  message content only when a feature processes it);
- why it is stored, who it is shared with, and retention/deletion;
- termination and availability;
- contact at `krishna@khong.dev`;
- a clear statement that the bot is **not affiliated with Discord**.

If the bot's behaviour changes, update `src/legal.mjs`, rebuild, redeploy, and
update the "last updated" date before enabling the new behaviour.

## 7. Verification

Discord's verification requirements apply as the bot grows. As a rule of thumb,
verification is required once a bot is in **75 or more guilds** or reaches
**10,000 or more users**; check the current threshold in the Developer Portal
because Discord can change it. Verification is not needed for a personal bot in
a test guild.

Before applying, have:

- a verified email address on the Discord account;
- two-factor authentication enabled on the account;
- a complete application description and working commands;
- the Terms of Service and Privacy Policy URLs live and reachable;
- a reason the bot needs any privileged intent it requests.

The application is reviewed in the Developer Portal under **Bot → Verification**.
Do not enable privileged intents in public servers while the application is
unverified; Discord may remove the bot.

## 8. Minimal runbook

### Run locally

```bash
# Node 24+, in the bot repository
npm ci
set -a; . ./.env; set +a
npm start
```

- The process reads `DISCORD_TOKEN` from the environment. Never pass the token
  as a command-line argument; it would appear in `ps` and shell history.
- Watch the first ten lines of logs for a successful login and command
  registration. Do not log message bodies or tokens.
- Stop with Ctrl-C and confirm the process exits; a bot that reconnects forever
  after shutdown usually has a signal handler that swallows SIGINT.

### Add or remove a test guild

- Add: open the invite URL with the test guild selected.
- Remove: Server Settings → Integrations → the bot → **Kick** (or right-click the
  bot member → **Kick**). Confirm the bot is gone from the member list.

### Token leaked

1. Reset the token in the Developer Portal immediately.
2. Update the secret store / `.env`.
3. Restart the bot and confirm the old token is rejected.
4. Review recent audit logs and command logs for unexpected activity.
5. If the token was committed, remove it from the working tree and rewrite
   history only after rotating; rotation is the part that stops the abuse.

### Deploying on Kubernetes later

The bot is not part of the current bee deployment. When it is:

- create the token as a Kubernetes Secret out of band, never in GitOps;
- reference it with `envFrom.secretRef` or a mounted file;
- keep the bot's retention and logging behaviour aligned with the Privacy Policy;
- do not expose a public admin endpoint.

## 9. Checklist

- [ ] Application created; Application ID recorded.
- [ ] Bot user added; token stored only in `.env` or a secret store.
- [ ] `.env` ignored by git; `git status` clean of secrets.
- [ ] Privileged intents off unless a feature needs them.
- [ ] OAuth2 scopes `bot` + `applications.commands`; no Administrator.
- [ ] Invite tested in a private guild; `/ping`-style command replies.
- [ ] TOS and Privacy URLs saved in General Information and reachable publicly.
- [ ] Policy pages describe the data the code actually handles.
- [ ] Verification plan understood (75 guilds / 10k users; check current rules).
- [ ] Rotation and leak runbook understood.
