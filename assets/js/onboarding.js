/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive, setupForm } from '{{ $src.RelPermalink }}';

const clickAfter = "click.after";
const submitAfter = "submit.after"
const submitFinal = "submit.final";
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
  }
};

setupForm(document.querySelector('.form.is-vibe-form'), callbacks);


const contactWidget = document.querySelector('.is-help .contact-widget');
const contactWidgetTitle = contactWidget.querySelector('.title');
const contactWidgetCollapse = contactWidget.querySelector('.collapse-icon');
contactWidget.onblur = (e) => {
  if (!e.relatedTarget || !e.relatedTarget.matches('.contact-widget a.link')) {
    contactWidget.classList.remove('is-active');
  }
};
contactWidgetTitle.addEventListener('click', () => {
  contactWidget.classList.toggle('is-active');
});
contactWidgetCollapse.addEventListener('click', () => {
  contactWidget.classList.toggle('is-active');
});
