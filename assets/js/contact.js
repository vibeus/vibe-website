/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive, setupForm } from '{{ $src.RelPermalink }}';

const scheduleModal = document.getElementById('{{ .modalId }}');

setupForm(document.querySelector('.form.is-vibe-form'));

toggleActive('.modal-background, .modal-close', false);
