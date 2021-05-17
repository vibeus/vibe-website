/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { openDemoScheduler, toggleActive } from '{{ $src.RelPermalink }}';

toggleActive('.modal-background, .modal-close', false);
const btn = document.querySelector(
  'section.is-bottom-cta .cta .button.is-open-live-demo-scheduler'
);
if (btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    openDemoScheduler(
      null,
      '{{ .modalId }}',
      'https://meetings.hubspot.com/jian-zhao/vibe-follow-up'
    );
  });
}
