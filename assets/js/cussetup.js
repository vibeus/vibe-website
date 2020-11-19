/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
const glides = document.querySelectorAll('.customer-card .container .glide');

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
      } else if (glide.index === num-1) {
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

