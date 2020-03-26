/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const tableWrap = document.getElementsByClassName('table-wrapper')[0];
const container = document.createElement('table');

function buildingDom() {
  tableWrap.appendChild(container);
  container.innerHTML = '<th>id</th><th>title</th><th>imdb</th><th>year</th>';
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    container.appendChild(row);
    const tabelElement = document.getElementsByTagName('tr')[i + 1];
    const rowData = data[i];
    const values = [];
    for (const prop in rowData) {
      const val = rowData[prop];
      values.push(val);
    }
    for (let j = 0; j < values.length; j++) {
      const cell = document.createElement('td');
      tabelElement.appendChild(cell);
      const newRowEl = tabelElement.getElementsByTagName('td')[j];
      newRowEl.textContent = values[j];
    }
    const newRowElColl = tabelElement.getElementsByTagName('td');
    const newValue = values[2].toLocaleString('en-EN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    newRowElColl[2].textContent = `imdb: ${newValue}`;
    newRowElColl[3].textContent = `(${values[3]})`;
  }
}

buildingDom();

const iteration = [];
const thElement = document.getElementsByTagName('th');
const strElement = document.createElement('img');
strElement.src = '../image/arrow.png';
strElement.width = 10;

function nextSort() {
  if (iteration.length === 0 || iteration.length === 8) {
    iteration.length === 0;
    data.sort((a, b) => a.id - b.id);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[0].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 1) {
    data.sort((a, b) => b.id - a.id);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[0].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 2) {
    data.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
    tableWrap.removeChild(container);
    buildingDom();
    thElement[1].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 3) {
    data.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    tableWrap.removeChild(container);
    buildingDom();
    thElement[1].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 4) {
    data.sort((a, b) => a.imdb - b.imdb);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[2].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 5) {
    data.sort((a, b) => b.imdb - a.imdb);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[2].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 6) {
    data.sort((a, b) => a.year - b.year);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[3].appendChild(strElement);
    iteration.push(1);
  } else if (iteration.length === 7) {
    data.sort((a, b) => b.year - a.year);
    tableWrap.removeChild(container);
    buildingDom();
    thElement[3].appendChild(strElement);
    iteration.push(1);
    thElement[3].removeChild(strElement);
  }
}


setInterval(nextSort, 2000);
