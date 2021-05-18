/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { bindScrollTo, setupForm } from '{{ $src.RelPermalink }}';

const navbar = document.querySelector('.navbar');
const navbarHeight = navbar ? navbar.clientHeight : 0;
bindScrollTo('.is-download-report', -navbarHeight);

console.log('shit')
setupForm(document.querySelector('.form.is-vibe-form'));