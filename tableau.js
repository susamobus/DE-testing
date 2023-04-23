function CreateTableau() {
    let table = document.getElementById("table");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

        // Create input rows for coefficients
        for (let i = 1; i <= s; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j <= i; j++) {
            let cell = document.createElement("td");
            if (i == 0 && j == 0) {
              let input = document.createElement("input");
              input.className = "TableInput";
              input.id = "TableInputC"
              input.disabled = "true"
              input.placeholder = "c1 (0)";
              cell.appendChild(input)
            } else {
              let input = document.createElement("input");
              input.type = "text";
              input.className = "TableInput";
              if (j == 0) {
                input.id = "TableInputC";
                input.placeholder = "c" + i;
              } else {
                input.id = "TableInputA";
                input.placeholder = "a" + i + "," + j;
              }
              cell.appendChild(input)
            }
            row.appendChild(cell);
          }
          table.appendChild(row);
        }
      
        // Create input row 
        let tfoot = document.createElement("tfoot")
        let row = document.createElement("tr");
        let cell = document.createElement("td")
        let input = document.createElement("input")
        input.className = "TableInput"
        input.disbaled = "true"
        input.id = "TableEmpty"
        cell.appendChild(input)
        row.appendChild(cell)
        
        for (let i = 0; i < s; i++) {
          let cell = document.createElement("td")
          let input = document.createElement("input");
          input.type = "text";
          input.className = "TableInput";
          input.id = "TableInputB"
          input.placeholder = "b" + (i + 1);
          cell.appendChild(input);
          row.appendChild(cell);
        }
        tfoot.appendChild(row)
        table.appendChild(tfoot)

}