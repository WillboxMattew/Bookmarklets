// WORK IN PROGRESS, DO NOT USE
// Open to contributing

function block(code, list){
  while (true) {
  var codeTry = prompt("Enter code:");
  if (codeTry == code) 
    alert("Correct.");
  else {
    alert("Incorrect.");
    continue;
  };
  break;
  };
  var allow = prompt("Allow once or allow always? (o/A)");
  if (allow.toLowerCase() == "o") {
    let orloc = window.location;
    while (window.location == orloc) null;
  } else {
    if (wl)
      wl.push(window.location)
    else
      delete wl[wl.indexOf(window.location)];
  };
};

function isIn(list, loc) {
  var i;
  for (i = 0; i < list.length || (list+[null])[i].slice(0, (Array(list[i])
    .length) == loc); i++) null;
  return i < list.length;
};

function parcon() {
  var ty = prompt("Whitelist or blacklist? (w/B)");
  if (ty.toLowerCase() == "w")
    var wl = true
  else
    var wl = false;
  var list = [];
  while (true) {
    let sl = prompt("website or nothing to stop");
    if (sl != "")
      list.push(sl)
    else break;
    };
  var code = prompt("Parental Control Code:")
  while (true) {
    if (!(wl) && isIn(list, window.location)) {
      block(code, list);
    } else if (wl && !(isIn(list, window.location))) {
      block(code, list);
    } else if (window.location == "bookmarklets://parcon/resetCode") {
      window.location = "https://www.google.com";
      while (true) {
        codeTry = prompt("Old Code");
        if (codeTry != code) {
          alert("Incorrect.");
          continue;
        };
        break;
      };
      code = prompt("New Code");
    } else if (window.location == "bookmarklets://parcon/disable") {
      window.location = "https://www.google.com";
      while (true) {
        codeTry = prompt("Old Code");
        if (codeTry != code) {
          alert("Incorrect.");
          continue;
        };
        break;
      };
      break;
    } else if (window.location = "bookmarklets://parcon/reset") {
      window.location = "https://www.google.com";
      while (true) {
        codeTry = prompt("Old Code");
        if (codeTry != code) {
          alert("Incorrect.");
          continue;
        };
        break;
      };
      parcon();
    };
  };
};
parcon()
