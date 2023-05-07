function alertOnClick() {
    alert("Order placed successfully and can't be canceled")
}

function alertOnMobile(phone) {
    alert("Clicked Successfully on " + phone)
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function toggleImg(mouse) {
    var car = document.getElementById('car')
    if (mouse === 'over') {
        car.src = './back.jpg'
    } else {
        car.src = './front.jpg'
    }
}

function count(task) {
    var counterScreen = document.getElementById('counterScreen')
    var count = +counterScreen.innerHTML
    if (task === 'inc') {
        count += 1
    } else {
        count -= 1
    }
    counterScreen.innerHTML = count
}