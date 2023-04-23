function CreateTableau() {
    let table = document.getElementById("table");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
      
    // Create rows for coefficients
    for (let i = 0; i < s; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < s; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.step = "0.01";
            cell.appendChild(input);
            row.appendChild(cell);
        }
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "0.01";
        cell.appendChild(input);
        row.appendChild(cell);
        table.appendChild(row);
    }
      
        // Create row for additional b value
        let row = document.createElement("tr");
        for (let i = 0; i < s; i++) {
          let cell = document.createElement("td");
          let input = document.createElement("input");
          input.type = "number";
          input.min = "0";
          input.step = "0.01";
          cell.appendChild(input);
          row.appendChild(cell);
        }
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.step = "0.01";
        cell.appendChild(input);
        row.appendChild(cell);
        table.appendChild(row);
      
        // Create row for additional c values
        row = document.createElement("tr");
        for (let i = 0; i < s; i++) {
          let cell = document.createElement("td");
          let input = document.createElement("input");
          input.type = "number";
          input.min = "0";
          input.step = "0.01";
          cell.appendChild(input);
          row.appendChild(cell);
        }
        let cell = document.createElement("td");
        table.appendChild(row);
}