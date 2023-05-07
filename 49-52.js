function getFormData() {
    var nameF = document.getElementById('fname').value
    var nameL = document.getElementById('lname').value
    var mail = document.getElementById('mail').value
    var pass = document.getElementById('pass').value
    var data = document.getElementById('data')
    data.innerHTML = `Your first name is ${nameF}<br>Your Last name is ${nameL}<br>Your email is ${mail}<br>Your password is ${pass}<br>`
}
function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var btn = document.getElementById('btn');
    if (description.classList.contains('hide')) {
        description.classList.remove('hide');
        btn.innerHTML = 'Show less'
    } else {
        description.classList.add('hide');
        btn.innerHTML = 'Show more'
    }
}
