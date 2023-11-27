import './App.css';
import Upload from './components/Upload';

function fileInput(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const data = event.target.result;
      loadFile(data);
    };
    reader.readAsText(file);
  }
}

function loadFile(data) {
  const container = document.querySelector('.table-container');

  const dataRows = data.split('\r\n');
  const finalArray = dataRows.map((row) => row.split(',').map((col) => col.trim()));

  const table = document.createElement('table');

  finalArray.forEach((rowData) => {
    const row = document.createElement('tr');
    rowData.forEach((cellData) => {
      if (cellData !== '') {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      }
    });

    if (row.children.length > 0) {
      table.appendChild(row);
    }
  });

  container.innerHTML = '';
  container.appendChild(table);

  localStorage.setItem('tableData', JSON.stringify(finalArray));
}

function App() {
  return (
    <div className="App">
      <Upload fileInput={fileInput} loadFile={loadFile} />

    </div>
  );
}

export default App;
