/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive } from '{{ $src.RelPermalink }}';

let story;

const toggleClass =
  '.card, .modal.customer-card, .modal.customer-card .modal-close, .modal.customer-card .modal-background';

toggleActive(toggleClass, false, (isActive, el) => {
  let startAt = 0;
  if (el.dataset.startAt) {
    startAt = parseInt(el.dataset.startAt);
  }

  if (isActive) {
    story = new Glide('.modal.customer-card .glide', {
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

document.querySelectorAll('.modal.customer-card .is-glide-nav').forEach((el) => {
  const go = el.dataset.go;
  el.addEventListener('click', () => {
    if (story) {
      story.go(go);
      document.querySelector('.modal-content').scrollTo(0, 0);
    }
  });
});

function setupGallery() {
  const el = document.querySelector('.product-gallery .glide');

  const glide = new Glide(el, {
    type: 'carousel',
    //autoplay: none,
  });

  const dots = Array.from(
    el.parentElement.querySelectorAll('.glide-dots .icon')
  );
  dots.forEach((d, idx) => {
    d.addEventListener('click', () => {
      glide.go('=' + idx);
    });
  });

  const updateDots = () => {
    dots.forEach((x) => x.classList.remove('is-active'));
    dots[glide.index].classList.add('is-active');
  };

  const thumbs = Array.from(
    document.querySelectorAll('.column.is-gallery .thumbnails .cardbox')
  );

  thumbs.forEach((d, idx) => {
    d.addEventListener('click', () => {
      glide.go('=' + idx);
    });
  });

  const updateThumbs = () => {
    thumbs.forEach((x) => x.classList.remove('is-active'));
    thumbs[glide.index].classList.add('is-active');
  };

  glide.on('run.after', updateThumbs);
  glide.on('mount.after', updateThumbs);
  glide.on('run.after', updateDots);
  glide.on('mount.after', updateDots);
  glide.mount();
}

setupGallery();