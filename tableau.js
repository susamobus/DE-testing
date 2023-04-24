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
                input.name = "a" + i + "," + j-1;
                input.placeholder = "a" + i + "," + j-1;
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
  a = [0];
  b = [];
  c = [0];
  for (i = 1; i <= s; i++) {
    if (i > 1) {
      let ai = []
      for (j = 1; j < s; j++) {
        let aij = document.getElementsByName("a" + i + "," + j)[0].value
        ai.push(aij)
      }
      let ci = document.getElementsByName("c" + i)[0].value
      c.push(ci)
      a.push(ai)
    }
    let bi = document.getElementsByName("b" + i)[0].value
    b.push(bi)
  }
}