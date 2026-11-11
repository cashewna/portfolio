export const tos = {
  slug: 'discord/tos',
  title: 'Terms of Service',
  description:
    'Terms of Service for Krishna Khong’s Discord bot: acceptable use, availability, termination and contact.',
  updated: '12 November 2026',
  intro:
    'These terms cover your use of the Discord bot operated by Krishna Khong (“the Bot”, “I”, “me”). By using the Bot, or by staying in a server where it is active, you agree to these terms. If you do not agree, remove the Bot or stop using it.',
  sections: [
    {
      heading: '1. Who operates the Bot',
      blocks: [
        {
          type: 'p',
          text: 'The Bot is a personal project operated by Krishna Khong, an individual based in Sydney, Australia. It is not operated by, endorsed by, or affiliated with Discord Inc. Discord’s own Terms of Service and Community Guidelines apply alongside these terms.',
        },
        {
          type: 'p',
          text: 'You can contact me about these terms at krishna@khong.dev.',
        },
      ],
    },
    {
      heading: '2. Using the Bot',
      blocks: [
        {
          type: 'p',
          text: 'You may use the Bot through Discord while you comply with these terms, Discord’s terms, and the rules of the server you are in. You need a Discord account that meets Discord’s minimum age requirement.',
        },
        {
          type: 'p',
          text: 'The Bot is provided as-is for personal and community use. Features may be added, changed or removed at any time. I do not promise that any feature will remain available, that the Bot will be online continuously, or that output will be accurate.',
        },
      ],
    },
    {
      heading: '3. Acceptable use',
      blocks: [
        { type: 'p', text: 'You must not use the Bot to:' },
        {
          type: 'ul',
          items: [
            'break the law, Discord’s Terms of Service, or Discord’s Community Guidelines;',
            'harass, threaten, defame, or discriminate against anyone;',
            'send spam, run automated bulk commands, or deliberately overload the Bot or its host;',
            'attempt to access data, accounts, systems or features you are not authorised to access;',
            'upload or distribute malware, or content that infringes someone else’s rights;',
            'collect other users’ information through the Bot without a lawful basis and their consent;',
            'impersonate the Bot’s operator or another person; or',
            'probe, scan or test the Bot’s security without written permission.',
          ],
        },
        {
          type: 'p',
          text: 'Server owners and moderators are responsible for how the Bot is configured and used in their server, and for telling their members what data the Bot processes.',
        },
      ],
    },
    {
      heading: '4. Your content',
      blocks: [
        {
          type: 'p',
          text: 'You keep ownership of the content you send. You give me permission to process that content only as needed to run the Bot, keep it secure, and fix faults. This permission ends when the content is deleted under the retention rules in the Privacy Policy, except where the law requires me to keep it longer.',
        },
        {
          type: 'p',
          text: 'You are responsible for making sure you have the right to send the content you send through the Bot.',
        },
      ],
    },
    {
      heading: '5. Availability and changes',
      blocks: [
        {
          type: 'p',
          text: 'The Bot is a hobby project. It may be offline for maintenance, hosting changes, or reasons outside my control. I may change or discontinue it at any time. Where practical, I will give notice in the server or on this site before a significant change.',
        },
      ],
    },
    {
      heading: '6. Suspension and termination',
      blocks: [
        {
          type: 'p',
          text: 'I may block a user, remove the Bot from a server, or stop providing the Bot entirely if I reasonably believe these terms or Discord’s rules have been broken, if the Bot is being abused, or if keeping it running creates a legal or security risk. I may do this without notice where there is an immediate risk.',
        },
        {
          type: 'p',
          text: 'You can stop using the Bot at any time. A server owner can remove it from their server. To ask for deletion of data the Bot holds about you, see the Privacy Policy.',
        },
      ],
    },
    {
      heading: '7. Disclaimers and liability',
      blocks: [
        {
          type: 'p',
          text: 'The Bot is provided without warranties of any kind, to the extent the law allows. It may produce incorrect output, and you should not rely on it for legal, medical, financial or safety-critical decisions.',
        },
        {
          type: 'p',
          text: 'To the extent permitted by law, I am not liable for indirect or consequential loss, loss of data, or loss caused by relying on the Bot. Nothing in these terms excludes, restricts or modifies any right or guarantee you have under the Australian Consumer Law or other law that cannot lawfully be excluded.',
        },
      ],
    },
    {
      heading: '8. Changes to these terms',
      blocks: [
        {
          type: 'p',
          text: 'I may update these terms when the Bot or the law changes. The updated version will be posted at this URL with a new “last updated” date. Continuing to use the Bot after a change means you accept the updated terms.',
        },
      ],
    },
    {
      heading: '9. Contact',
      blocks: [
        {
          type: 'p',
          text: 'Questions, complaints or security reports: krishna@khong.dev. I will try to respond within a reasonable time.',
        },
        {
          type: 'p',
          text: 'Discord Inc. is not responsible for the Bot. Please do not send support requests about the Bot to Discord.',
        },
      ],
    },
  ],
};

export const privacy = {
  slug: 'discord/privacy',
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Krishna Khong’s Discord bot: what it stores, why, how long, and how to have it deleted.',
  updated: '12 November 2026',
  intro:
    'This policy explains what the Discord bot operated by Krishna Khong (“the Bot”) collects, why it collects it, how long it keeps it, and how you can have it deleted. It applies to the Bot, not to Discord itself. Discord’s own Privacy Policy covers the platform.',
  sections: [
    {
      heading: '1. Who is responsible',
      blocks: [
        {
          type: 'p',
          text: 'Krishna Khong, an individual based in Sydney, Australia, is responsible for the Bot’s handling of personal information. Contact: krishna@khong.dev.',
        },
      ],
    },
    {
      heading: '2. What the Bot collects',
      blocks: [
        {
          type: 'p',
          text: 'The Bot collects only what it needs to run and to keep the service secure. Depending on which features are enabled, that can include:',
        },
        {
          type: 'ul',
          items: [
            'Discord user IDs, usernames and display names;',
            'Discord server (guild) IDs, channel IDs and role IDs needed to route commands and apply permissions;',
            'the command you used, its options, and the time it was used;',
            'server configuration for the Bot, such as enabled features and moderator settings;',
            'error and diagnostic logs, including the technical details of a failed request; and',
            'message content only where a feature must read it to work — for example, when the Bot is invoked in a channel or is configured to respond to messages there.',
          ],
        },
        {
          type: 'p',
          text: 'The Bot does not collect your email address, phone number, payment details, precise location, or the contents of your direct messages unless you send a command to the Bot in a direct message and a feature needs that input. The Bot does not sell personal information and does not use it for advertising.',
        },
        {
          type: 'p',
          text: 'If a feature changes what is collected, this page will be updated to name the feature and the new data before the feature is enabled.',
        },
      ],
    },
    {
      heading: '3. Message content',
      blocks: [
        {
          type: 'p',
          text: 'The Bot reads message content only where it needs to for a feature you or a server moderator has enabled, or where you invoke it. It does not store entire channel histories. Command inputs may be kept for a short period so a command can be completed, faults can be investigated, and abuse can be handled.',
        },
        {
          type: 'p',
          text: 'If you do not want a message processed by the Bot, do not invoke it and do not enable message-reading features in your server.',
        },
      ],
    },
    {
      heading: '4. Why the Bot uses it',
      blocks: [
        {
          type: 'ul',
          items: [
            'to run the commands and features you ask for;',
            'to remember server settings and preferences;',
            'to keep the Bot secure, prevent abuse, and enforce these terms;',
            'to diagnose errors and improve reliability; and',
            'to comply with legal obligations.',
          ],
        },
      ],
    },
    {
      heading: '5. Legal bases',
      blocks: [
        {
          type: 'p',
          text: 'Where Australian privacy law applies, I rely on your consent (when you use a command or enable a feature), my legitimate interests in running and securing a small community service, and compliance with legal obligations. Where the GDPR or UK GDPR applies, the corresponding bases are consent, legitimate interests, and legal obligation. You can withdraw consent by stopping use of the Bot and asking for deletion.',
        },
      ],
    },
    {
      heading: '6. Who it is shared with',
      blocks: [
        {
          type: 'p',
          text: 'The Bot runs on Discord and on hosting infrastructure used to operate it. Discord processes messages and account data under its own privacy policy. Hosting providers may process technical logs as part of running the service. I do not sell personal information, and I do not share it for advertising.',
        },
        {
          type: 'p',
          text: 'I may disclose information if required by law, or if necessary to protect the rights, safety or security of the Bot, its users, or the public.',
        },
      ],
    },
    {
      heading: '7. Retention',
      blocks: [
        {
          type: 'ul',
          items: [
            'Command and error logs: up to 30 days, unless needed to investigate an ongoing security or abuse issue.',
            'Server configuration and preferences: while the Bot remains in the server, or until the owner asks for deletion.',
            'Data tied to a user who asks for deletion: removed within 30 days, except where the law requires retention.',
            'Backups: any backup that contains the data is cycled within 30 days.',
          ],
        },
        {
          type: 'p',
          text: 'Some technical logs kept by Discord or a hosting provider are outside my control and follow their retention policies.',
        },
      ],
    },
    {
      heading: '8. Security',
      blocks: [
        {
          type: 'p',
          text: 'Access to the Bot’s systems is limited, tokens are kept out of source code, and the Bot requests only the Discord permissions it needs. No service is perfectly secure. If you find a vulnerability, please report it to krishna@khong.dev rather than testing it against other users.',
        },
      ],
    },
    {
      heading: '9. Your rights',
      blocks: [
        {
          type: 'p',
          text: 'You can ask what personal information the Bot holds about you, ask for a correction, or ask for deletion. Email krishna@khong.dev from the address you use for the request, and include your Discord user ID so I can find the right records. I may need to verify that the request is yours.',
        },
        {
          type: 'p',
          text: 'You can also complain to the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au, or to your local data protection authority if you are outside Australia.',
        },
      ],
    },
    {
      heading: '10. Children',
      blocks: [
        {
          type: 'p',
          text: 'The Bot is not directed at children. Discord requires users to meet its minimum age in their country. If you are below that age, do not use the Bot. If I learn that the Bot holds personal information from a child below the applicable age, I will delete it.',
        },
      ],
    },
    {
      heading: '11. International transfers',
      blocks: [
        {
          type: 'p',
          text: 'The Bot and its hosting may process data in Australia and in other countries where Discord or the hosting provider operates. Where required, I take reasonable steps to ensure transfers are protected by appropriate safeguards.',
        },
      ],
    },
    {
      heading: '12. Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'I may update this policy when the Bot or the law changes. The current version is always at this URL, with the “last updated” date above.',
        },
      ],
    },
    {
      heading: '13. Contact',
      blocks: [
        {
          type: 'p',
          text: 'Privacy questions and deletion requests: krishna@khong.dev.',
        },
        {
          type: 'p',
          text: 'This Bot is not affiliated with, endorsed by, or operated by Discord Inc. Discord’s own privacy practices are described in Discord’s Privacy Policy.',
        },
      ],
    },
  ],
};
