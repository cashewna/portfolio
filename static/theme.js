(() => {
  const root = document.documentElement;
  const key = 'portfolio-theme';
  const saved = localStorage.getItem(key);
  const initial = saved === 'dark' || saved === 'light' ? saved : 'light';
  root.dataset.theme = initial;

  const syncButton = (btn, theme) => {
    if (!btn) return;
    const isDark = theme === 'dark';
    btn.setAttribute('aria-checked', String(isDark));
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-switch');
    syncButton(btn, root.dataset.theme);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem(key, next);
      syncButton(btn, next);
    });
  });
})();
