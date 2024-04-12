// Alert Name

document.getElementById("alertName").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    alert("NAVEED SABAR KHOKHAR")
}
// Alert Number
document.getElementById("alertNum").onclick = function () {
    document.getElementById("statement").innerHTML = ''
    alert("03081464572")
}

// Variable Name
document.getElementById("varName").onclick = function () {
    let varName;
    document.getElementById("statement").innerText = "VarName"
    document.getElementById("output").innerText = `varName `
}
// CamelCase Example

document.getElementById("camelCase").onclick = function () {
    document.getElementById("statement").innerText = "This Is CamelCase"
    document.getElementById("output").innerText = "camelCase"
}


// Sum 2 Numbers
document.getElementById("sum").onclick = function () {
    let a = 20;
    let b = 30;
    let sum = a + b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}
// Subtract 2 Numbers
document.getElementById("sub").onclick = function () {
    let a = 50;
    let b = 20;
    let sub = a - b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a - b = ${sub}`
}
// Multiply 2 Numbers
document.getElementById("mul").onclick = function () {
    let a = 2;
    let b = 12;
    let mul = a * b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a * b = ${mul}`
}
// Divide 2 Numbers
document.getElementById("div").onclick = function () {
    let a = 30;
    let b = 6;
    let c = 4;
    let result = a / b * c;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} `
    document.getElementById("output").innerText = `a / b * c = ${result}`
}

// Calculate 2 Numbers
document.getElementById("cal").onclick = function () {
    let a = 20;
    let b = 5;
    let result = a / b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} `
    document.getElementById("output").innerText = `a / b = ${result}`
}

// clear Statement
document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerText = ""
}

// clear Statement
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerText = ""
}