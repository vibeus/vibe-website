/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { setupForm } from '{{ $src.RelPermalink }}';

setupForm(document.querySelector('.form.is-vibe-form'));