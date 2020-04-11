/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive, setupForm } from '{{ $src.RelPermalink }}';

const form = document.querySelector('.form.is-vibe-form');
setupForm(form);

toggleActive('.playbook-item,.icon.is-close-icon', false, (isActive, el) => {
  if (isActive) {
    const formId = el.dataset.form_id;
    const formUrl =
      'https://api.hsforms.com/submissions/v3/integration/submit/5698963/' +
      formId;
    form.action = formUrl;
  } else {
    const container = document.querySelector('.form-container');
    if (container) {
      container.classList.remove('is-submitted');
    }
  }
});
