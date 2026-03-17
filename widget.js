// widget.js
(function() {
  const icons = {
    zap: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
  };

  function render() {
    const root = document.getElementById('scholz-widget-root');
    if (!root) return;
    
    // Inject just the FAB
    root.innerHTML = `
      <a href="#enquiry-section" id="w-fab" class="scholz-fab">
        <span class="fab-text-desktop">Get an Upfront Quote</span>
        <span class="fab-text-mobile">Get Quote</span>
        ${icons.zap}
      </a>
    `;

    attachScrollListener();
  }

  function attachScrollListener() {
    const fab = document.getElementById('w-fab');
    if (!fab) return;

    // Smooth scrolling to section
    fab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('enquiry-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
      // Show FAB after scrolling down 500px (past hero)
      if (window.scrollY > 500) {
        fab.classList.add('is-visible');
      } else {
        fab.classList.remove('is-visible');
      }
    }, { passive: true });
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    render();
  });

})();
