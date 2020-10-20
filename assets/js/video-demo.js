/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { openDemoScheduler, toggleActive } from '{{ $src.RelPermalink }}';

toggleActive('.modal-background, .modal-close', false);
const btn = document.querySelector('section.is-bottom-cta .cta .button');
if (btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    openDemoScheduler(
      null,
      '{{ .modalId }}',
      'https://meetings.hubspot.com/katie206/intro-call-with-vibe'
    );
  });
}
