const carouselsGlides = document.querySelectorAll('.carouseles .glide');
carouselsGlides.forEach((el) => {
  const glide = new Glide(el, {
    type: 'carousel',
    autoplay: 3000,
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
});


const featureColumnsGlides = document.querySelectorAll('.features .glide');
featureColumnsGlides.forEach((el) => {
  const glide = new Glide(el, {
    type: 'carousel',
    autoplay: 3000,
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
});


const appsGlides = document.querySelectorAll('.groups .glide');
appsGlides.forEach((el) => {
  const glide = new Glide(el, {
    type: 'carousel',
    autoplay: 5000,
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
});
