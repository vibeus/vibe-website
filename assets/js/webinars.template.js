// {{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
import { bindScrollTo, toggleActive, setupForm } from '{{ $src.RelPermalink }}';

const navbar = document.querySelector('.navbar.is-fixed-top');
const navbarHeight = navbar ? navbar.clientHeight : 0;
bindScrollTo('.is-request-demo', -navbarHeight);

document.querySelectorAll('.form.is-vibe-form').forEach((el) => {
  setupForm(el, {
    'click.after': (name, type, form) => {
      console.log('click.after name: ', name);
      console.log('click.after form: ', form);

      if (name === 'request-webinars') {
        form.parentElement.classList.add('is-live-demo');
      }

      return false;
    },
    'submit.after': (name, type, form) => {
      console.log('submit.after name: ', name);
      console.log('submit.after form: ', form);

      // form.closest('.section.is-book-demo').classList.add('is-submitted');

      return false;
    },
  });
});
