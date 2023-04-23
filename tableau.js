function CreateTableau() {
    let table = document.getElementById("table");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

        // Create input rows for coefficients
        for (let i = 0; i < s; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j < s; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "number";
            input.step = "0.01";
            input.className = "Input";
            cell.appendChild(input);
            row.appendChild(cell);
          }
          let cell = document.createElement("td");
          let input = document.createElement("input");
          input.type = "number";
          input.step = "0.01";
          input.className = "Input";
          cell.appendChild(input);
          row.appendChild(cell);
          table.appendChild(row);
        }
      

        // Create input row 
        let tfoot = document.createElement("tfoot")
        let row = document.createElement("tr");
        for (let i = 0; i < s; i++) {
          let cell = document.createElement("td");
          let input = document.createElement("input");
          input.type = "number";
          input.step = "0.01";
          input.className = "Input";
          cell.appendChild(input);
          row.appendChild(cell);
        }
        tfoot.appendChild(row)
        table.appendChild(tfoot)

}