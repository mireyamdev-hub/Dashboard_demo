/*Errors customized*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


const form = document.getElementById("form");
const form2= document.getElementById("form2");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const mail = document.getElementById("usermail");
const psw = document.getElementById("pssw");
const mail2 = document.getElementById("usermail2");
const psw2 = document.getElementById("pssw2");
//
const textfn = document.getElementById("fn");

form.addEventListener('submit', e => {
    e.preventDefault();

    validate();
});

function validate() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const mailValue = mail.value.trim();
    const pswValue = psw.value.trim();

    if ((firstnameValue === '' || firstnameValue == null) ||
        (lastnameValue === '' || lastnameValue == null) ||
        (mailValue === '' || mailValue == null) ||
        (pswValue === '' || pswValue == null) ||
        (!isEmail(mailValue)) ||
        (!savePassword(pswValue))) {
        //   console.log('empty fields');
    } else {

        location.href = "./dashboard/dashboard.html";
    }
}

function isEmail(mail) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
    //Pattern dot something allowing only
    ///^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
}

function savePassword(psw) {
    return /^[A-Za-z]\w{5,9}$/.test(psw);
}


$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
});

/*Logout*/
function logout() {
    location.href = "../index.html";
};

/*Sidebar*/
$(document).ready(function () {
    $(".mr-auto .nav-item").bind("click", function (event) {
        event.preventDefault();
        var clickedItem = $(this);
        $(".mr-auto .nav-item").each(function () {
            $(this).removeClass("activemenu");
        });
        clickedItem.addClass("activemenu");
    });
});

/*Add/update/remove Player - Table*/
function AddData() {
    const pos = document.getElementById("pos").value;
    const num = document.getElementById("num").value;
    const name = document.getElementById("name").value;
    const pts = document.getElementById("pts").value;
    const ass = document.getElementById("ass").value;
    const reb = document.getElementById("reb").value;
    const val = document.getElementById("val").value;

    let rows = "";

    rows += "<td>" + pos + "</td><th>" + num + "</th><td>" + name + "</td><td>" +
        pts + "</td><td>" + ass + "</td><td>" + reb + "</td><td>" + val + "</td><td>" + 
        "" +"</td>";
        

    const tbody = document.querySelector("#list tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr)
    console.log(rows);

    document.getElementById("form_add").reset();
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("list").deleteRow(i);
}

