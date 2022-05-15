const resultX = document.getElementById('resultX');
const resultY = document.getElementById('resultY');

var calculateBtn = document.getElementById('calculate');

function calculate() {
    const x1 = document.getElementById('first-input').value
    const y1 = document.getElementById('second-input').value
    const m1 = document.getElementById('third-input').value
    const x2 = document.getElementById('fourth-input').value
    const y2 = document.getElementById('fifth-input').value
    const m2 = document.getElementById('sixth-input').value

    const y12 = x2*y1;
    const m12 = x2*m1;
    const y22 = x1*y2;
    const m22 = x1*m2;

    const y = (m12 - m22)/(y12 - y22);
    const x = (m1 - (y*y1))/x1;

    resultX.textContent = x;
    resultY.textContent = y;
    
}

calculateBtn.addEventListener("click", calculate);
