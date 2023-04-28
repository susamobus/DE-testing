function CreateTableau() {
  s = Number(document.getElementById("stage").value)
  let table = document.getElementById("tableau");

  DeleteTable("tableau")

        // Create input rows for coefficients
        for (let i = 1; i <= s; i++) {
          let row = document.createElement("tr");
          let im = i
          if (isImplicit == true) {
            im = s+1
          }
          for (let j = 0; j < im; j++) {
            let cell = document.createElement("td");
            if (i == 1 && j == 0 && isImplicit == false) {
              let input = document.createElement("input");
              input.className = "TableInput";
              input.id = "TableInputC";
              input.disabled = "true";
              input.placeholder = "c1 (0)";
              cell.appendChild(input)
            } else if (i !== 1 || isImplicit == true) {
              let input = document.createElement("input");
              input.type = "text";
              input.className = "TableInput";
              if (j == 0) {
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
      
        let i2 = 1
        if (isAdaptive == true) {
          i2 = 2
        }
        for (let i = 1; i <= i2; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td")
        let input = document.createElement("input")
        input.className = "TableInput";
        input.disabled = "true";
        input.id = "TableInputC";
        if (i == 1) {
          input.style.borderTop = "1px solid black"
        }
        cell.appendChild(input)
        row.appendChild(cell)
          for (let j = 1; j <= s; j++) {
            let cell = document.createElement("td")
            let input = document.createElement("input");
            input.type = "text";
            input.className = "TableInput";
            if (i == 1) {
              input.id = "TableInputB"
              input.name = "b" + j;
              input.placeholder = "b" + j;
            } else {
              input.name = "b2" + j;
              input.placeholder = "B" + j;
            }
            cell.appendChild(input);
            row.appendChild(cell);
          }
          table.appendChild(row)
        }

}

function DeleteTable(id) {
  let table = document.getElementById(id);
  while (table.hasChildNodes()) {
      table.removeChild(table.firstChild);
  }
}


function UpdateTableau() {
  a = [0];
  b = [];
  b2 = [];
  c = [0];
  k = [];
  for (i = 1; i <= s; i++) {
    if (i > 1) {
      let ai = []
      let im = i
      if (isImplicit == true) {
        im = s+1
      }
      for (j = 1; j < im; j++) {
        let aij = Fraction(document.getElementsByName("a" + i + "," + j)[0].value)
        ai.push(aij)
      }
      let ci = Fraction(document.getElementsByName("c" + i)[0].value)
      c.push(ci)
      a.push(ai)
    }
    if (isAdaptive == true) {
      let b2i = Fraction(document.getElementsByName("b2" + i)[0].value)
      b2.push(b2i)
    }
    let bi = Fraction(document.getElementsByName("b" + i)[0].value)
    b.push(bi)
    k.push(0)
  }
}

function ChangeTableau(a,b,c,b2) {
  for (i = 1; i <= s; i++) {
    if (i > 1 || isImplicit == true) {
      let im = i
      if (isImplicit == true) {
        im = s+1
      }
      for (j = 1; j < im; j++) {
        document.getElementsByName("a" + i + "," + j)[0].value = a[i-1][j-1]
      }
      document.getElementsByName("c" + i)[0].value = c[i-1]
    }
    document.getElementsByName("b" + i)[0].value = b[i-1]
    if (isAdaptive == true) {
      document.getElementsByName("b2" + i)[0].value = b2[i-1]
    }
  }
}
