export default function rendering(arr) {
  const table = document.getElementsByClassName('table')[0];
  const tableSort = document.createElement('tbody');
  tableSort.className = 'table-sort';
  for (const el of arr) {
    // создание элементов
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTitle = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdImdb = document.createElement('td');
    // заполнение элементов
    tdId.textContent = el.id;
    tdTitle.textContent = el.title;
    tdYear.textContent = el.year;
    tdImdb.textContent = el.imdb.toFixed(2);
    // добавление в таблицу
    tr.insertAdjacentElement('beforeend', tdId);
    tr.insertAdjacentElement('beforeend', tdTitle);
    tr.insertAdjacentElement('beforeend', tdYear);
    tr.insertAdjacentElement('beforeend', tdImdb);
    // добавить созданную строку в таблицу
    tableSort.insertAdjacentElement('beforeend', tr);
  }
  table.insertAdjacentElement('beforeend', tableSort);
}
