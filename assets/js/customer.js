/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/

function setupGallery() {
  const el = document.querySelector('.product-gallery .glide');

  const glide = new Glide(el, {
    type: 'carousel',
    breakpoints: {
      900: {
        autoplay: 5000
      },
    },
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

// setup blogs carousel
import { toggleActive } from '{{ $src.RelPermalink }}';

const glides = document.querySelectorAll('.customer-cards .container .glide');

var mounted = false;
var glidesArr = [];

const mount = () => {
  glides.forEach((el) => {
    const glide = new Glide(el, {
      type: 'carousel',
      rewind: false,
      keyboard: false,
      dragThreshold: 80,
      perView: 3,
      breakpoints: {
        1000: {
          perView: 2
        },
        700: {
          perView: 1
        }
      },
    });

    const num = Array.from(el.querySelectorAll('.glide__slide')).length;

    const updateGlideNav = () => {
      el.parentElement.querySelectorAll('.glide-nav').forEach((nav) => {
        nav.classList.remove('is-disabled');
      });
      if (glide.index === 0) {
        el.parentElement
          .querySelectorAll('.glide-nav.is-left')
          .forEach((nav) => {
            nav.classList.add('is-disabled');
          });
      } else if (glide.index === num - 1) {
        el.parentElement
          .querySelectorAll('.glide-nav.is-right')
          .forEach((nav) => {
            nav.classList.add('is-disabled');
          });
      }
    };

    const updateProgress = () => {
      el.parentElement.parentElement
        .querySelectorAll('.progress-step')
        .forEach((progress) => {
          if (progress.matches('.progress-step-' + (glide.index + 1))) {
            progress.classList.add('is-active');
          } else {
            progress.classList.remove('is-active');
          }
        });
    };

    const update = () => {
      updateGlideNav();
      updateProgress();
    };

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

    el.parentElement.querySelectorAll('.glide-nav').forEach((nav) => {
      nav.addEventListener('click', () => {
        if (nav.classList.contains('is-left')) {
          glide.go('<');
        } else if (nav.classList.contains('is-right')) {
          glide.go('>');
        }
      });
    });

    glide.on('run.after', updateDots);
    glide.on('mount.after', updateDots);
    glide.mount();

    glidesArr.push(glide);
  });
};

const destroy = () => {
  while (glidesArr.length) {
    var glide = glidesArr.pop();
    glide.destroy();
  }
};

const throttle = (callback, delay) => {
  let throttleTimeout = null;
  let storedEvent = null;

  const throttledEventHandler = (event) => {
    storedEvent = event;
    const shouldHandleEvent = !throttleTimeout;

    if (shouldHandleEvent) {
      callback(storedEvent);
      storedEvent = null;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
        if (storedEvent) {
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };
  return throttledEventHandler;
};
mount();

// setup blogs modal

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