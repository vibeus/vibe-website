/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { bindEventWithTarget } from '{{ $src.RelPermalink }}';

const updateToc = (function () {
  const tocItems = document.querySelectorAll('.toc [data-id]')
  const subItemsEls = document.querySelectorAll('.toc .subitems')

  return (activeId) => {
    tocItems.forEach(tocItem => {
      const isActive = activeId === tocItem.dataset.id;
      const op = isActive ? 'add' : 'remove';
      tocItem.classList[op]('is-active');      
    });
    subItemsEls.forEach(el => {
      const hasActiveChild = el.querySelector('.subitem.is-active');

      const op = hasActiveChild ? 'add' : 'remove';
      el.classList[op]('is-expand');
      el.parentNode.classList[op]('is-expand');
    })
  }
})()

observeHeaders(updateToc);

function observeHeaders(notify) {
  const headers = document.querySelectorAll('h2, h3')
  const options = {
    rootMargin: `0% 0% -80% 0%`
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        notify(entry.target.id);
      }
    })
  }, options)
  headers.forEach(item => observer.observe(item));
}

const navbar = document.querySelector('.navbar');
const tocDropdown = document.querySelector('.toc-dropdown');
const tocDropdownMenu = document.getElementById('dropdown-menu');

bindEventWithTarget('.dropdown-trigger', 'click', () => {
  tocDropdown.classList.toggle('is-active');
  const isActive = tocDropdown.classList.contains('is-active');
  if (isActive) {
    document.documentElement.classList.add('is-clipped');
    setTocHeight();
  } else {
    document.documentElement.classList.remove('is-clipped');
    clearTocHeight();
  }

});

function setTocHeight() {
  const navbarTop = navbar.getBoundingClientRect().top;
  tocDropdownMenu.style.maxHeight = `calc(${window.innerHeight - navbarTop}px - 4.125rem - 48px)`;
}

function clearTocHeight() {
  tocDropdownMenu.style.maxHeight = '';
}

window.addEventListener('resize', () => {
  if (tocDropdown.classList.contains('is-active')) {
    setTocHeight();
  }
});