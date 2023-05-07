function CreateMethodTable() {
    let methodtable = document.getElementById("table");
    let row = document.createElement("tr");
    if (isAdaptive == true) {
      if (isImplicit == true) {
        let adpimpmethod = ["Trapezoidal rule"]
        for (let i = 0; i < adpimpmethod.length; i++) {
          let cell = document.createElement("td")
          let button = document.createElement("button")
          button.id = "AdpImp"
          button.className = "defbutton"
          button.onclick = function() {TableauDef("AI" + i)}
          button.innerHTML = adpimpmethod[i]
          cell.appendChild(button)
          row.appendChild(cell)
        }
      } else {
        let adpmethod = ["Runge-Kutta-Fehlberg","Heun-Euler","Bogacki-Shampine","Cash-Karp","Dormand-Prince"]
        for (let i = 0; i < adpmethod.length; i++) {
          let cell = document.createElement("td")
          let button = document.createElement("button")
          button.id = "Adp"
          button.className = "defbutton"
          button.onclick = function() {TableauDef("A" + i)}
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
        button.onclick = function() {TableauDef("I" + i)}
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
        button.onclick = function() {TableauDef("E" + i)}
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
    case "A2":
        s = 4;
        defa = [0,["1/2"],[0,"3/4"],["2/9","1/3","4/9"]];
        defb = ["2/9","1/3","4/9",0];
        defc = [0,"1/2","3/4",1];
        defb2 = ["7/24","1/4","1/3","1/8"];
      break;
    case "A3": 
        s = 6;
        defa = [0,["1/5"],["3/40","9/40"],["3/10","-9/10","6/5"],["-11/54","5/2","-70/27","35/27"],["1631/55296","175/512","575/13824","44275/110592","253/4096"]];
        defb = ["37/278",0,"250/621","125/594",0,"512/1771"];
        defc = [0,"1/5","3/10","3/5",1,"7/8"];
        defb2 = ["2825/27648",0,"18575/48384","13525/55296","277/14336","1/4"];
      break;
    case "A4":
        s = 7;
        defa = [0,["1/5"],["3/40","9/40"],["44/45","-56/15","32/9"],["19372/6561","-25360/2187","64448/6561","-212/729"],["9017/3168","-355/33","46732/5247","49/176","-5103/18656"],["35/384",0,"500/1113","125/192","-2187/6784","11/84"]];
        defb = ["35/384",0,"500/1113","125/192","-2187/6784","11/84",0];
        defc = [0,"1/5","3/10","4/5","8/9",1,1];
        defb2 = ["5179/57600",0,"7571/16695","393/640","-92097/339200","187/2100","1/40"];
      break;
    case "AI0":
        s = 2;
        defa = [[0,0],["1/2","1/2"]];
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