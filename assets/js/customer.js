/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive } from '{{ $src.RelPermalink }}';

let story;

const toggleClass =
  '.card, .modal.is-story, .modal.is-story .modal-close, .modal.is-story .modal-background';

toggleActive(toggleClass, false, (isActive, el) => {
  let startAt = 0;
  if (el.dataset.startAt) {
    startAt = parseInt(el.dataset.startAt);
  }

  if (isActive) {
    story = new Glide('.modal.is-story .glide', {
      type: 'carousel',
      startAt,
    }).mount();

    document.querySelector('.modal-content').scrollTo(0, 0);
  } else {
    if (story) {
      story.destroy();
      story = null;
    }
  }
});

document.querySelectorAll('.modal.is-story .is-glide-nav').forEach((el) => {
  const go = el.dataset.go;
  el.addEventListener('click', () => {
    if (story) {
      story.go(go);
      document.querySelector('.modal-content').scrollTo(0, 0);
    }
  });
});
