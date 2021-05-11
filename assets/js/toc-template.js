const updateToc = (function () {
  const tocItems = document.querySelectorAll('.toc [data-id]')
  const subItemsEls = document.querySelectorAll('.toc .subtitles')

  return (ativeId) => {
    tocItems.forEach(el => {
      const isActive = ativeId === el.dataset.id;
      const op = isActive ? 'add' : 'remove';
      el.classList[op]('is-active')

    });
    subItemsEls.forEach(el => {
      const hasActiveChild = el.querySelector('.subtitle.is-active');

      const op = hasActiveChild ? 'add' : 'remove';
      el.classList[op]('is-expand');
    })
  }
})()

observeHeaders(updateToc);

function observeHeaders(notify) {
  const headers = document.querySelectorAll('[is-observed-header]')
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
