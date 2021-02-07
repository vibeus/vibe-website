/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive, setupForm } from '{{ $src.RelPermalink }}';

// {{/* form related */}}

const clickAfter = 'click.after';
const submitAfter = 'submit.after';
const submitFinal = 'submit.final';
const callbacks = {
  [clickAfter]: function () {
    const label = document.getElementById('label-for-submit-button');
    label.classList.add('is-loading');
  },
  [submitAfter]: function () {
    const submitButtonColumn = document.querySelector('.submit-button-column');
    submitButtonColumn.classList.add('is-submitted');
  },
  [submitFinal]: function () {
    const label = document.getElementById('label-for-submit-button');
    label.classList.remove('is-loading');
  },
};

setupForm(document.querySelector('.form.is-vibe-form'), callbacks);

// {{/* contactWidget related */}}

const contactWidget = document.querySelector('.is-help .contact-widget');
const contactWidgetTitle = contactWidget.querySelector('.title');
const contactWidgetCollapse = contactWidget.querySelector('.collapse-icon');

contactWidgetTitle.addEventListener('click', () => {
  contactWidget.classList.toggle('is-active');
});
contactWidgetCollapse.addEventListener('click', () => {
  contactWidget.classList.toggle('is-active');
});

// {{/* link related */}}

const navbar = document.querySelector('.navbar.is-fixed-top');
const navbarHeight = navbar ? navbar.clientHeight : 0;

document.querySelectorAll('.scroll-down-link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(
      0,
      document.getElementById(el.dataset.scrollToId).offsetTop - navbarHeight
    );
  });
});
