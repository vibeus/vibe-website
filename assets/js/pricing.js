/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive } from '{{ $src.RelPermalink }}';

toggleActive('.section.is-vibe-ad .show-or-hide', true);
toggleActive('.faq-title', false);
