function CreateTableau() {
    let table = document.getElementById("table");
  
    // Create headers row
    let headers = ["i", ...Array.from({length: s}, (_, i) => `Stage ${i+1}`), "b"];
    let headersRow = document.createElement("tr");
    for (let h of headers) {
      let header = document.createElement("th");
      header.textContent = h;
      headersRow.appendChild(header);
    }
    table.appendChild(headersRow);
  
    // Create input rows for coefficients
    for (let i = 1; i <= s; i++) {
      let row = document.createElement("tr");
      // Add row label (i)
      let labelCell = document.createElement("td");
      labelCell.textContent = i;
      row.appendChild(labelCell);
      // Add c values
      for (let j = 1; j <= s; j++) {
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "0.01";
        cell.appendChild(input);
        row.appendChild(cell);
      }
      // Add vertical line separator
      let separatorCell = document.createElement("td");
      separatorCell.textContent = "|";
      row.appendChild(separatorCell);
      // Add a values
      for (let j = 1; j <= s; j++) {
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "0.01";
        cell.appendChild(input);
        row.appendChild(cell);
      }
      // Add b value
      let bCell = document.createElement("td");
      let bInput = document.createElement("input");
      bInput.type = "number";
      bInput.min = "0";
      bInput.step = "0.01";
      bCell.appendChild(bInput);
      row.appendChild(bCell);
  
      table.appendChild(row);
    }
  
    // Create input row for c values
    let cRow = document.createElement("tr");
    let cLabelCell = document.createElement("td");
    cLabelCell.textContent = "c";
    cRow.appendChild(cLabelCell);
    for (let i = 1; i <= s; i++) {
      let cell = document.createElement("td");
      let input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.step = "0.01";
      cell.appendChild(input);
      cRow.appendChild(cell);
    }
    let cSeparatorCell = document.createElement("td");
    cSeparatorCell.textContent = "|";
    cRow.appendChild(cSeparatorCell);
    table.insertBefore(cRow, table.firstChild);
  
    // Create input row for b values
    let bRow = document.createElement("tr");
    let bLabelCell = document.createElement("td");
    bLabelCell.textContent = "b";
    bRow.appendChild(bLabelCell);
    for (let i = 1; i <= s; i++) {
      let cell = document.createElement("td");
      let input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.step= "0.01";
      cell.appendChild(input);
      bRow.appendChild(cell);
      }
      let bSeparatorCell = document.createElement("td");
      bSeparatorCell.textContent = "-";
      bRow.appendChild(bSeparatorCell);
      let bCell = document.createElement("td");
      let bInput = document.createElement("input");
      bInput.type = "number";
      bInput.min = "0";
      bInput.step = "0.01";
      bCell.appendChild(bInput);
      bRow.appendChild(bCell);
      table.appendChild(bRow);
}
      
      
  