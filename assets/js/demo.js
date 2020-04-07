/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import {
  toggleActive,
  getHubspotUtk,
  setupForm,
} from '{{ $src.RelPermalink }}';

const scheduleModal = document.getElementById('{{ .modalId }}');

setupForm(document.querySelector('.form.is-vibe-form'), {
  'click.before': (name, type, form) => {
    if (name !== 'request-demo') {
      return false;
    }

    scheduleModal.classList.toggle('is-active');

    const wrapper = document.getElementById('{{ .modalId }}-iframe');
    if (wrapper) {
      let iframe = wrapper.firstElementChild;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.scrolling = 'no';

        wrapper.appendChild(iframe);
      }

      const hutk = getHubspotUtk();
      const url = new URL(
        'https://meetings.hubspot.com/katie206/intro-call-with-vibe'
      );
      const params = new URLSearchParams();
      params.append('embed', true);
      params.append('parentHubspotUtk', hutk);
      params.append('parentPageUrl', window.location);

      for (const pair of new FormData(form).entries()) {
        params.append(pair[0], pair[1]);
      }

      url.search = params.toString();
      iframe.src = url.toString();
    }

    return true;
  },
});

toggleActive('.modal-background, .modal-close', false);
