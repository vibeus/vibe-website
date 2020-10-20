/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { activateOneOf, toggleActive } from '{{ $src.RelPermalink }}';

activateOneOf('.is-tab-panel .is-tab-title', true);

toggleActive('.is-mobile-playlist-header', true);

document.querySelector('.is-playlist-item').click();

document.querySelector('.is-mobile-playlist-header').addEventListener('click', () => {
  document.getElementById('mobile-info-panel').classList.toggle('is-active');
});