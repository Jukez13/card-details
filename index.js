function namefunc() {
    let x = document.getElementById('cname');
    let y = document.getElementById('dname');
    y.innerText = x.value.toUpperCase();
}

function numfunc() {
    let x = document.getElementById('cnum');
    let y = document.getElementById('dnum');
    y.innerText = x.value.toUpperCase();
}

function monfunc() {
    let x = document.getElementById('cmon');
    let y = document.getElementById('dmon');
    y.innerText = x.value.toUpperCase() + ' / ';
}

function yearfunc() {
    let x = document.getElementById('cyear');
    let y = document.getElementById('dyear');
    y.innerText = '' + x.value.toUpperCase();
}

function cvvfunc() {
    let x = document.getElementById('ccvv');
    let y = document.getElementById('dcvv');
    y.innerText = x.value.toUpperCase();
}