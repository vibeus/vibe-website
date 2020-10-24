/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { activateOneOf, bindEventWithTarget } from '{{ $src.RelPermalink }}';

activateOneOf('.is-tab-panel .is-tab-title', true);

let offsetY = 0;

bindEventWithTarget('.is-mobile-playlist-header', 'click', (el, target) => {
  if (el.classList.contains('is-active')) {
    offsetY = window.scrollY;
  }

  el.classList.toggle('is-active');

  if (target) {
    target.classList.toggle('is-active');
  }

  if (el.classList.contains('is-active')) {
    window.scrollTo(0, offsetY);
  }
});

document.querySelector('.is-playlist-item').click();

document
  .querySelector('.is-mobile-playlist-header')
  .addEventListener('click', () => {
    document.getElementById('mobile-info-panel').classList.toggle('is-active');
  });

document.body.addEventListener('click', (e) => {
  const playlistItem = e.target.closest('.is-playlist-item');
  if (playlistItem) {
    const resourcesTab = document.querySelector('.is-resources-tab');
    const overviewTab = document.querySelector('.is-overview-tab');
    const resourcesInfo = document.querySelector('.is-resources-info');
    if (
      !document.querySelector(
        `.is-playlist-item-${playlistItem.dataset.idx}-tab-content.is-resources`
      )
    ) {
      resourcesTab.classList.remove('is-active');
      resourcesTab.classList.add('is-hidden');
      overviewTab.click();
      resourcesInfo.classList.add('is-hidden');
    } else {
      resourcesTab.classList.remove('is-hidden');
      resourcesInfo.classList.remove('is-hidden');
    }
  }
});

const touchDevice = 'ontouchstart' in document.documentElement;
if (touchDevice) {
  document.body.classList.add('is-touch-device');
}
