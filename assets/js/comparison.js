!function () {
  const selection = (function (onChanged) {
    const MAX_NUM = 4;
    let selected = [];

    function insert(id) {
      if (selected.length === MAX_NUM) return false;
      selected.push(id);
      onChanged();
      return true;
    }

    function remove(id) {
      const index = selected.findIndex(n => n === id);
      if (index > -1) {
        selected.splice(index, 1);
      }
      onChanged();
      return index;
    }

    function clearAll() {
      selected = [];
      onChanged();
    }

    function size() {
      return selected.length;
    }

    function empty() {
      return selected.length === 0;
    }

    function contains(id) {
      return selected.indexOf(id) > -1;
    }

    function get() {
      return selected;
    }

    return {
      get,
      size,
      empty,
      insert,
      remove,
      clearAll,
      contains,
    }

  }(() => {
    updateSelectionListView();
    updateCheckboxStatus();
  }));

  // listen on "change" event on all checkbox
  const allCheckbox = document.querySelectorAll('.checkbox-card .checkbox');
  allCheckbox.forEach(listenOnCheckboxChange);

  // bind to "Clear all" button
  const clearAllBtn = document.querySelector('#clearAll');
  clearAllBtn.addEventListener('click', () => selection.clearAll());

  // brand selection view
  const selectionContainer = document.querySelector('.is-selection');
  const selectedText = selectionContainer.querySelector('#selectedText');
  const selectionList = selectionContainer.querySelector('.selection-list');
  const compareLink = selectionContainer.querySelector('#compareLink');

  // react to "x"(remove) icon button
  // remove item from selection and uncheck the corresponding checkbox
  selectionList.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      selection.remove(id);
    }
  })

  // *************************************************************

  function listenOnCheckboxChange(el) {
    el.addEventListener('change', onCheckboxChange);
  }

  function onCheckboxChange(e) {
    const brandId = e.target.dataset.id;
    const checked = e.target.checked;

    if (checked) {
      const inserted = selection.insert(brandId);
      if (!inserted) e.target.checked = false;
    } else {
      selection.remove(brandId);
    }
  }

  function updateCheckboxStatus() {
    allCheckbox.forEach(o => {
      const id = o.dataset.id;
      o.checked = selection.contains(id);
    });

  };

  function updateSelectionListView() {
    if (selection.empty()) {
      selectionContainer.classList.add('is-hidden');
    } else {
      selectionContainer.classList.remove('is-hidden');
    }

    const seletedNum = selection.size();
    selectedText.innerHTML = `${seletedNum} product${seletedNum > 1 ? 's' : ''}`;
    compareLink.href = `/comparison/all/?id=vibe,${selection.get().join(',')}`;

    selectionList.innerHTML = selection.get().map(getSelectionCardView).join('');

  }

  function getSelectionCardView(id) {
    const checkboxCard = document.querySelector(`.checkbox-card[data-id="${id}"]`);
    const image = checkboxCard.querySelector('img');
    const data = checkboxCard.dataset;

    return `
    <div class="selection-card is-${data.id}">
      ${data.name}
      <button data-id="${data.id}">remove</button>
      <figure>
        <img srcset="${image.srcset}" src="${image.src}" alt="" />
      </figure>
    </div>
    `;
  }

}()