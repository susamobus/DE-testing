function CreateTableau() {
    let table = document.getElementById("table");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

        // Create input rows for coefficients
        for (let i = 0; i <= s; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j < i; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "number";
            input.className = "TableInput";
            if (j == 0) {
              input.placeholder = "c" + i;
              cell.appendChild(input)
              let th = document.createElement("th")
              th.className = "Thread"
              th.appendChild(cell)
            } else {
              input.placeholder = "a" + j + i
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
        row.append(cell)
        for (let i = 0; i < s; i++) {
          let cell = document.createElement("td")
          let input = document.createElement("input");
          input.type = "number";
          input.className = "TableInput";
          input.placeholder = "b" + (i + 1);
          cell.appendChild(input);
          row.appendChild(cell);
        }
        tfoot.appendChild(row)
        table.appendChild(tfoot)

}