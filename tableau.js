function CreateTableau() {
  s = Number(document.getElementById("stage").value)
  let table = document.getElementById("tableau");

    // Delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

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
    let bi = Fraction(document.getElementsByName("b" + i)[0].value)
    b.push(bi)
    k.push(0)
  }
}

function ChangeTableau(a,b,c) {
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
  }
}

function CreateMethodTable() {
  let expmethod = ["RK4","RK3","3/8","MP","HM","RM","HM3","RM3","SP","FE"]
  let fullexpmethod = ["RK4","RK3","3/8","Midpoint","Heun's","Ralston's","3rd order Heun","3rd order Ralston","Stability preserving","Forward Euler"]
  let methodtable = document.getElementById("table")
  let row = document.createElement("tr")
  let cell = document.createElement("td")
  let mainbutton = document.createElement("button")
  mainbutton.onclick = function() {ToggleMethods()}
  mainbutton.innerHTML = "Explicit"
  mainbutton.className = "maindefbutton"
  cell.appendChild(mainbutton)
  row.appendChild(cell)
  for (let i = 0; i < expmethod.length; i++) {
    let cell = document.createElement("td")
    let button = document.createElement("button")
    button.onclick = function() {TableauDef(expmethod[i])}
    button.className = "defbutton"
    button.id = "Exp"
    button.style.display = "block"
    button.innerHTML = fullexpmethod[i]
    cell.appendChild(button)
    row.appendChild(cell)
  }
  let impmethod = ["BE","IM","CN","KS","QZ"]
  let fullimpmethod = ["Backward Euler","Implicit Midpoint","Crank-Nicolson","Kraaijevanger-Spijker","Qin-Zhang"]
  for (let i = 0; i < impmethod.length; i++) {
    let cell = document.createElement("td")
    let button = document.createElement("button")
    button.onclick = function() {TableauDef(impmethod[i])}
    button.className = "defbutton"
    button.id = "Imp"
    button.innerHTML = fullimpmethod[i]
    cell.appendChild(button)
    row.appendChild(cell)
  }
  methodtable.appendChild(row)
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
  } else if (def == "RK3") {
    s = 3;
    defa = [0,["1/2"],[-1,2]];
    defb = ["1/6","2/3","1/6"];
    defc = [0,"1/2",1];
  } else if (def == "3/8") {
    s = 4;
    defa = [0,["1/3"],["-1/3",1],[1,-1,1]];
    defb = ["1/8","3/8","3/8","1/8"];
    defc = [0,"1/3","2/3",1];
  } else if (def == "MP") {
    s = 2;
    defa = [0,["1/2"]];
    defb = [0,1];
    defc = [0,"1/2"];
  } else if (def == "HM") {
    s = 2;
    defa = [0,[1]];
    defb = ["1/2","1/2"];
    defc = [0,1]
  } else if (def == "RM") {
    s = 2;
    defa = [0,["2/3"]];
    defb = ["1/4","3/4"];
    defc = [0,"2/3"]
  } else if (def == "HM3") {
    s = 3;
    defa = [0,["1/3"],[0,"2/3"]];
    defb = ["1/4",0,"3/4"];
    defc = [0,"1/3","2/3"];
  } else if (def == "RM3") {
    s = 3;
    defa = [0,["1/2"],[0,"3/4"]];
    defb = ["2/9","1/3","4/9"];
    defc = [0,"1/2","3/4"];
  } else if (def == "SP") {
    s = 3;
    defa = [0,[1],["1/4","1/4"]];
    defb = ["1/6","1/6","2/3"];
    defc = [0,1,"1/2"];
  } else if (def == "FE") {
    s = 1;
    defa = [0];
    defb = [1];
    defc = [0];
  } else if (def == "BE") {
    s = 1;
    defa = [[1]];
    defb = [1];
    defc = [1];
  } else if (def == "IM") {
    s = 1;
    defa = [["1/2"]];
    defb = [1];
    defc = ["1/2"];
  } else if (def == "CN") {
    s = 2;
    defa = [[0,0],["1/2","1/2"]];
    defb = ["1/2","1/2"];
    defc = [0,1];
  } else if (def == "KS") {
    s = 2;
    defa = [["1/2",0],["-1/2",2]];
    defb = ["-1/2","3/2"];
    defc = ["1/2","3/2"]
  } else if (def == "QZ") {
    s = 2;
    defa = [["1/4",0],["1/4","1/2"]];
    defb = ["1/2","1/2"];
    defc = ["1/4","3/4"];
  }
  document.getElementById("stage").value = s;
  CreateTableau();
  ChangeTableau(defa,defb,defc);
  UpdateTableau();
}