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

function CreateMethodTable() {
  let methodtable = document.getElementById("table");
  let row = document.createElement("tr");
  if (isAdaptive == true) {
    if (isImplicit == true) {
      let adpimpmethod = []
      for (let i = 0; i < adpimpmethod.length; i++) {
        let cell = document.createElement("td")
        let button = document.createElement("button")
        button.id = "AdpImp"
        button.className = "defbutton"
        button.onclick = function() {TableauDef(adpimpmethod["AI" + i])}
        button.innerHTML = adpimpmethod[i]
        cell.appendChild(button)
        row.appendChild(cell)
      }
    } else {
      let fulladpmethod = ["Runge-Kutta-Fehlberg","Heun-Euler"]
      for (let i = 0; i < adpmethod.length; i++) {
        let cell = document.createElement("td")
        let button = document.createElement("button")
        button.id = "Adp"
        button.className = "defbutton"
        button.onclick = function() {TableauDef(adpmethod["A" + i])}
        button.innerHTML = adpmethod[i]
        cell.appendChild(button)
        row.appendChild(cell)
      }
    }
  } else if (isImplicit == true) {
    let impmethod = ["Backward Euler","Implicit Midpoint","Crank-Nicolson","Kraaijevanger-Spijker","Qin-Zhang"]
    for (let i = 0; i < impmethod.length; i++) {
      let cell = document.createElement("td")
      let button = document.createElement("button")
      button.id = "Imp"
      button.className = "defbutton"
      button.onclick = function() {TableauDef(impmethod["I" + i])}
      button.innerHTML = impmethod[i]
      cell.appendChild(button)
      row.appendChild(cell)
    }
  } else {
    let expmethod = ["RK4","RK3","3/8","Midpoint","Heun's","Ralston's","3rd order Heun","3rd order Ralston","Stability preserving","Forward Euler"]
    for (let i = 0; i < expmethod.length; i++) {
      let cell = document.createElement("td")
      let button = document.createElement("button")
      button.id = "Exp"
      button.className = "defbutton"
      button.onclick = function() {TableauDef(expmethod["E" + i])}
      button.innerHTML = expmethod[i]
      cell.appendChild(button)
      row.appendChild(cell)
    }
  }
  methodtable.appendChild(row)
}

function TableauDef(def) {
  var defa;
  var defb;
  var defc;
  var defb2;
  switch (def) {
  case "E0":
    s = 4;
    defa = [0,["1/2"],[0,"1/2"],[0,0,1]];
    defb = ["1/6","1/3","1/3","1/6"];
    defc = [0,"1/2","1/2",1];
    break;
  case "E1":
    s = 3;
    defa = [0,["1/2"],[-1,2]];
    defb = ["1/6","2/3","1/6"];
    defc = [0,"1/2",1];
  break;
  case "E2":
    s = 4;
    defa = [0,["1/3"],["-1/3",1],[1,-1,1]];
    defb = ["1/8","3/8","3/8","1/8"];
    defc = [0,"1/3","2/3",1];
    break;
  case "E3":
    s = 2;
    defa = [0,["1/2"]];
    defb = [0,1];
    defc = [0,"1/2"];
    break;
  case "E4":
    s = 2;
    defa = [0,[1]];
    defb = ["1/2","1/2"];
    defc = [0,1];
    break;
  case "E5":
    s = 2;
    defa = [0,["2/3"]];
    defb = ["1/4","3/4"];
    defc = [0,"2/3"];
    break;
  case "E6":
    s = 3;
    defa = [0,["1/3"],[0,"2/3"]];
    defb = ["1/4",0,"3/4"];
    defc = [0,"1/3","2/3"];
    break;
  case "E7":
    s = 3;
    defa = [0,["1/2"],[0,"3/4"]];
    defb = ["2/9","1/3","4/9"];
    defc = [0,"1/2","3/4"];
    break;
  case "E8":
    s = 3;
    defa = [0,[1],["1/4","1/4"]];
    defb = ["1/6","1/6","2/3"];
    defc = [0,1,"1/2"];
    break;
  case "E9":
    s = 1;
    defa = [0];
    defb = [1];
    defc = [0];
    break;
  case "I0":
    s = 1;
    defa = [[1]];
    defb = [1];
    defc = [1];
    break;
  case "I1":
    s = 1;
    defa = [["1/2"]];
    defb = [1];
    defc = ["1/2"];
    break;
  case "I2":
    s = 2;
    defa = [[0,0],["1/2","1/2"]];
    defb = ["1/2","1/2"];
    defc = [0,1];
    break;
  case "I3":
    s = 2;
    defa = [["1/2",0],["-1/2",2]];
    defb = ["-1/2","3/2"];
    defc = ["1/2","3/2"];
    break;
  case "I4":
    s = 2;
    defa = [["1/4",0],["1/4","1/2"]];
    defb = ["1/2","1/2"];
    defc = ["1/4","3/4"];
    break;
  case "A0":
    s = 6;
    defa = [0,["1/4"],["3/32","9/32"],["1932/2197","-7200/2197","7296/2197"],["439/216",-8,"3680/513","-845/4104"],["-8/27",2,"-3544/2565","1859/4104","-11/40"]]
    defb = ["16/135",0,"6656/12825","28561/56430","-9/50","2/55"];
    defc = [0,"1/4","3/8","12/13",1,"1/2"];
    defb2 = ["25/216",0,"1408/2565","2197/4104",'-1/5',0];
    break;
  case "A1":
    s = 2;
    defa = [0,[1]];
    defb = ["1/2","1/2"];
    defc = [0,1];
    defb2 = [1,0];
    break;
  default:
  break;
}
  document.getElementById("stage").value = s;
  CreateTableau();
  if (isAdaptive == true) {
    ChangeTableau(defa,defb,defc,defb2)
  } else {
    ChangeTableau(defa,defb,defc,0)
  }
}