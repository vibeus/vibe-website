/*
{{ $src := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/
import { toggleActive } from '{{ $src.RelPermalink }}';

let gallery;

toggleActive(
  '.is-photo-gallery, .modal.is-gallery .modal-close, .modal.is-gallery .modal-background',
  false,
  (isActive) => {
    if (isActive) {
      gallery = new Glide('.modal.is-gallery .glide', {
        type: 'carousel',
        autoplay: 3000,
      }).mount();
    } else {
      if (gallery) {
        gallery.destroy();
        gallery = null;
      }
    }
  }
);

document.querySelectorAll('#gallery .glide-control').forEach(($it) =>
  $it.addEventListener('click', () => {
    if (gallery) {
      gallery.go($it.dataset.direction);
    }
  })
);

toggleActive('.faq-title', false);
toggleActive('.toggle-specs', true);
