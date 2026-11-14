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

  const copyText = async (value) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        // Fallback below for non-secure or restricted contexts
      }
    }
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } finally {
      document.body.removeChild(ta);
    }
    return ok;
  };

  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-switch');
    syncButton(btn, root.dataset.theme);
    if (btn) {
      btn.addEventListener('click', () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        localStorage.setItem(key, next);
        syncButton(btn, next);
      });
    }

    const status = document.getElementById('copy-status');
    for (const copyBtn of document.querySelectorAll('[data-copy-email]')) {
      const original = copyBtn.textContent.trim();
      let timer;
      copyBtn.addEventListener('click', async () => {
        const email = copyBtn.getAttribute('data-copy-email') || '';
        const copied = await copyText(email);
        if (!copied) return;
        clearTimeout(timer);
        copyBtn.textContent = 'Copied';
        copyBtn.classList.add('is-copied');
        if (status) status.textContent = `Copied ${email} to clipboard`;
        timer = setTimeout(() => {
          copyBtn.textContent = original;
          copyBtn.classList.remove('is-copied');
          if (status) status.textContent = '';
        }, 1800);
      });
    }

    const modal = document.getElementById('diagram-modal');
    const stage = modal?.querySelector('[data-diagram-stage]');
    const readout = modal?.querySelector('[data-zoom-readout]');
    if (modal && stage) {
      const DEFAULT_ZOOM = 1.5;
      const MIN_ZOOM = 1;
      const MAX_ZOOM = 3;
      let zoom = DEFAULT_ZOOM;

      const applyZoom = (next) => {
        zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(next * 100) / 100));
        stage.style.setProperty('--diagram-zoom', String(zoom));
        if (readout) readout.textContent = `${Math.round(zoom * 100)}%`;
      };

      const openModal = () => {
        applyZoom(DEFAULT_ZOOM);
        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
        stage.scrollLeft = 0;
        stage.scrollTop = 0;
      };

      const closeModal = () => {
        if (typeof modal.close === 'function') {
          modal.close();
        } else {
          modal.removeAttribute('open');
        }
      };

      for (const trigger of document.querySelectorAll('[data-diagram-open]')) {
        trigger.addEventListener('click', openModal);
      }

      for (const closer of modal.querySelectorAll('[data-diagram-close]')) {
        closer.addEventListener('click', closeModal);
      }

      modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
      });

      for (const zoomBtn of modal.querySelectorAll('[data-zoom-delta]')) {
        zoomBtn.addEventListener('click', () => {
          const delta = Number(zoomBtn.getAttribute('data-zoom-delta') || '0');
          applyZoom(zoom + delta);
        });
      }

      modal.querySelector('[data-zoom-reset]')?.addEventListener('click', () => {
        applyZoom(DEFAULT_ZOOM);
        stage.scrollLeft = 0;
        stage.scrollTop = 0;
      });

      // Drag-to-pan inside the modal stage
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startScrollLeft = 0;
      let startScrollTop = 0;

      stage.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        dragging = true;
        stage.classList.add('is-dragging');
        startX = event.clientX;
        startY = event.clientY;
        startScrollLeft = stage.scrollLeft;
        startScrollTop = stage.scrollTop;
      });

      window.addEventListener('mousemove', (event) => {
        if (!dragging) return;
        stage.scrollLeft = startScrollLeft - (event.clientX - startX);
        stage.scrollTop = startScrollTop - (event.clientY - startY);
      });

      window.addEventListener('mouseup', () => {
        if (!dragging) return;
        dragging = false;
        stage.classList.remove('is-dragging');
      });
    }
  });
})();
