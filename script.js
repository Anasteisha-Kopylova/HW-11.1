const container = document.getElementById('table-container');
    const heading = document.createElement('h1');
    heading.textContent = 'Pythagoras table';
    container.appendChild(heading);

    const table = document.createElement('table');

    for (let i = 0; i <= 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j <= 10; j++) {
        const cell = document.createElement(i === 0 || j === 0 ? 'th' : 'td');
        if (i === 0 && j === 0) {
          cell.textContent = '×';
        } else if (i === 0) {
          cell.textContent = j;
        } else if (j === 0) {
          cell.textContent = i;
        } else {
          cell.textContent = i * j;
        }

        if (i === j && i !== 0 && j !== 0) {
        cell.classList.add('diagonal');
      }

        row.appendChild(cell);
      }

      table.appendChild(row);
    }

    container.appendChild(table);