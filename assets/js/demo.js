/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import {
  toggleActive,
  setupForm,
  openDemoScheduler,
} from '{{ $src.RelPermalink }}';

setupForm(document.querySelector('.form.is-vibe-form'), {
  'click.before': (name, type, form) => {
    if (name !== 'request-demo') {
      return false;
    }

    openDemoScheduler(
      form,
      '{{ .modalId }}',
      'https://meetings.hubspot.com/katie206/intro-call-with-vibe'
    );
    return true;
  },
});

toggleActive('.modal-background, .modal-close', false);
