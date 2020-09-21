/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive, bindScrollTo } from '{{ $src.RelPermalink }}';

const navbar = document.querySelector('.navbar.is-fixed-top');
const navbarHeight = navbar ? navbar.clientHeight : 0;
bindScrollTo('.section.is-comparison .is-comparison-wrapper .toggle-comparison', - navbarHeight);

toggleActive('.section.is-vibe-ad .show-or-hide', true);
toggleActive('.section.is-comparison .toggle-comparison', false);


toggleActive('.faq-title', false);
