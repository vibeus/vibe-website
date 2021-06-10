/*
{{ $js := resources.Get "js/common/common.js" | resources.Minify | resources.Fingerprint }}
*/

import { toggleActive } from '{{ $js.RelPermalink }}';

toggleActive('.faq-title', false);
