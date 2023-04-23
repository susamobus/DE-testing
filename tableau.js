function CreateTableau() {
    let table = document.getElementById("table");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

        // Create input rows for coefficients
        for (let i = 1; i <= s; i++) {
          let row = document.createElement("tr");
          for (let j = 1; j <= i; j++) {
            let cell = document.createElement("td");
            if (i == 1 && j == 1) {
              let input = document.createElement("input");
              input.className = "TableInput";
              input.id = "TableInputC";
              input.disabled = "true";
              input.placeholder = "c1 (0)";
              cell.appendChild(input)
            } else {
              let input = document.createElement("input");
              input.type = "text";
              input.className = "TableInput";
              if (j == 1) {
                input.id = "TableInputC";
                input.name = "c" + i;
                input.placeholder = "c" + i;
              } else {
                input.id = "TableInputA";
                input.name = "a" + i + "," + j;
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
        input.className = "TableInput";
        input.disabled = "true";
        input.id = "TableInputC";
        cell.appendChild(input)
        row.appendChild(cell)

        for (let i = 1; i <= s; i++) {
          let cell = document.createElement("td")
          let input = document.createElement("input");
          input.type = "text";
          input.className = "TableInput";
          input.id = "TableInputB";
          input.name = "b" + i;
          input.placeholder = "b" + i;
          cell.appendChild(input);
          row.appendChild(cell);
        }
        tfoot.appendChild(row)
        table.appendChild(tfoot)

}

function UpdateTableau() {
  a = [0,0];
  b = [0];
  c = [0,0];
  for (i = 1; i <= s; i++) {
    b.push(0)
    if (i > 1) {
      a.push([])
      c.push(0)
      for (j = 1; j < s; j++) {
        a[i].push(0)
        a[i][j] = document.getElementsByName("a" + i + "," + j)[0].value
      }
      c[i] = document.getElementsByName("c" + i)[0].value
    }
    b[i] = document.getElementsByName("b" + i)[0].value
  }
}