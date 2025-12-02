/**
 * @file
 * Mobile menu toggle functionality.
 */

(function (Drupal) {
  'use strict';

  Drupal.behaviors.nothingMobileMenu = {
    attach: function (context, settings) {
      // Find all collapse toggles
      const toggleButtons = context.querySelectorAll('[data-hs-collapse]');

      toggleButtons.forEach(function(button) {
        // Skip if already initialized
        if (button.dataset.initialized) {
          return;
        }
        button.dataset.initialized = 'true';

        // Get target element
        const targetSelector = button.getAttribute('data-hs-collapse');
        const targetElement = document.querySelector(targetSelector);

        if (!targetElement) {
          return;
        }

        // Toggle function
        button.addEventListener('click', function(e) {
          e.preventDefault();

          // Toggle hidden class
          targetElement.classList.toggle('hidden');

          // Toggle aria-expanded
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', !isExpanded);

          // Toggle hs-collapse-open class on button
          button.classList.toggle('hs-collapse-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
          if (!button.contains(e.target) && !targetElement.contains(e.target)) {
            if (!targetElement.classList.contains('hidden')) {
              targetElement.classList.add('hidden');
              button.setAttribute('aria-expanded', 'false');
              button.classList.remove('hs-collapse-open');
            }
          }
        });

        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 1024) { // lg breakpoint
            if (!targetElement.classList.contains('hidden')) {
              targetElement.classList.add('hidden');
              button.setAttribute('aria-expanded', 'false');
              button.classList.remove('hs-collapse-open');
            }
          }
        });
      });
    }
  };

})(Drupal);
