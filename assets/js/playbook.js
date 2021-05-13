/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import {
  toggleActive,
  setupForm,
  openDemoScheduler,
  isInBlacklist,
} from '{{ $src.RelPermalink }}';

const BLACKLIST = JSON.parse('{{ .blacklist | jsonify }}');

setupForm(document.querySelector('.form.is-vibe-form'), {
  'click.before': (name, type, form) => {
    if (name !== 'request-demo') {
      return false;
    }

    if (!isInBlacklist(form, BLACKLIST)) {
      openDemoScheduler(
        form,
        '{{ .modalId }}',
        'https://meetings.hubspot.com/jian-zhao/vibe-follow-up'
      );
    }

    return true;
  },
});

toggleActive('.modal-background, .modal-close', false);
