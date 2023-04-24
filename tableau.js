function CreateTableau() {
    let table = document.getElementById("tableau");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

        // Create input rows for coefficients
        for (let i = 1; i <= s; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j < i; j++) {
            let cell = document.createElement("td");
            if (i == 1 && j == 0) {
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
  k = [];
  for (i = 1; i <= s; i++) {
    if (i > 1) {
      let ai = []
      for (j = 1; j < i; j++) {
        let aij = Fraction(document.getElementsByName("a" + i + "," + j)[0].value)
        ai.push(aij)
      }
      let ci = Fraction(document.getElementsByName("c" + i)[0].value)
      c.push(ci)
      a.push(ai)
    }
    let bi = Fraction(document.getElementsByName("b" + i)[0].value)
    b.push(bi)
    k.push(0)
  }
}

function ChangeTableau(a,b,c) {
  for (i = 1; i <= s; i++) {
    if (i > 1) {
      for (j = 1; j < i; j++) {
        document.getElementsByName("a" + i + "," + j)[0].value = a[i-1][j-1]
      }
      document.getElementsByName("c" + i)[0].value = c[i-1]
    }
    document.getElementsByName("b" + i)[0].value = b[i-1]
  }
}

function TableauDef(def) {
  var defa;
  var defb;
  var defc;
  if (def == "RK4") {
    s = 4;
    defa = [0,["1/2"],[0,"1/2"],[0,0,1]];
    defb = ["1/6","1/3","1/3","1/6"];
    defc = [0,"1/2","1/2",1];
  } else if (def == "MP") {
    s = 2;
    defa = [0,["1/2"]];
    defb = [0,1];
    defc = [0,"1/2"];
  } else if (def == "HRM") {
    s = 2;
    defa = [0,["2/3"]];
    defb = ["1/4","3/4"];
    defc = [0,"2/3"]
  } else if (def == "EM") {
    s = 1;
    defa = [0];
    defb = [1];
    defc = [0];
  }
  document.getElementById("stage").value = s;
  CreateTableau();
  ChangeTableau(defa,defb,defc);
  UpdateTableau();
}