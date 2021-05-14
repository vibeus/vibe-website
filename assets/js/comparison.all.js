const idStr = new URLSearchParams(location.search).get('id') || '';
const ids = idStr.split(',');

const cols = document.querySelectorAll('th[is-hidden-col], td[is-hidden-col]');
cols.forEach(col => {
  const id = col.dataset.id;
  if (ids.indexOf(id) > -1) {
    col.removeAttribute('is-hidden-col');
  }
})