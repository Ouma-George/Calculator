
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}

function Back(val) {
    var res = document.getElementById('res');
    res.value = res.value.slice(0, -1);
}
function show(val) {
    var res = document.getElementById('res');
    res.value = parseFloat(val).toFixed(2);
}
window.onload = function() {
    var res = document.getElementById('res');
    res.value = '0';
}