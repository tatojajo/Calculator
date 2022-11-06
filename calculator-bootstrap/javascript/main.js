let btn;
btn = value => {
    return document.getElementById("display").value += value;
};

let equal;
equal= () => {
    let x
    x = document.getElementById("display").value;
    let y
    y = eval(x);
    document.getElementById("display").value = y
};

let AC;
AC = () => {
document.getElementById("display").value = ""
};



