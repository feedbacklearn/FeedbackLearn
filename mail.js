const firebaseConfig = {
    apiKey: "AIzaSyCyGgzDbd-gnqmg6xUF86X9fZFYZ3B0Mv0",
    authDomain: "fbdl-78f1b.firebaseapp.com",
    databaseURL: "https://fbdl-78f1b-default-rtdb.firebaseio.com",
    projectId: "fbdl-78f1b",
    storageBucket: "fbdl-78f1b.appspot.com",
    messagingSenderId: "801727565763",
    appId: "1:801727565763:web:2774bdefdd6a30bb4a7776",
    measurementId: "G-FDJGVKVW8S"
};

firebase.initializeApp(firebaseConfig);

var feedbackFormDB = firebase.database().ref("feedbackForm");

document.getElementById("feedbackForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var state = getElementVal("state");
    var city = getElementVal("city");
    var country = getElementVal("country");
    var phone = getElementVal("phone");
    var mobilebrand = getElementVal("mobilebrand");
    var modelname = getElementVal("modelname");
    var influencer = getElementVal("influencer");

    var gender = getSelectedGender();
    var q1 = getq1();
    var q2 = getq2();
    var q3 = getq3();
    var q4 = getq4();
    var q5 = getq5();
    var q6 = getq6();
    var q7 = getq7();
    var q8 = getq8();
    var q9 = getq9();
    var w1 = getw1();
    

    saveMessages(name, email, state,  city, country, phone, mobilebrand, modelname, influencer)

    //enable alert messages
    document.querySelector('.alert').style.display = "block";

    //remove the alert message
    setTimeout(() =>{
        document.querySelector('.alert').style.display = "none";

    },10000);

    //reset the form
    document.getElementById("feedbackForm").reset()
}

const saveMessages = (name, email, state,  city, country, phone, mobilebrand, modelname,influencer) => {
    var newFeedbackForm = feedbackFormDB.push();

    newFeedbackForm.set({
        name : name,
        email : email,
        state : state,
        city : city,
        country : country,
        phone : phone,
        mobilebrand : mobilebrand,
        modelname : modelname,
        influencer : influencer,
        gender : getSelectedGender(),
        q1 : getq1(),
        q2 : getq2(),
        q3 : getq3(),
        q4 : getq4(),
        q5 : getq5(),
        q6 : getq6(),
        q7 : getq7(),
        q8 : getq8(),
        q9 : getq9(),
        w1 : getw1(),
        
    })
};

function getSelectedGender() {
    var genderRadios = document.getElementsByName("gender");
    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            return genderRadios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}

function getq1() {
    var q1Radios = document.getElementsByName("q1");
    for (var i = 0; i < q1Radios.length; i++) {
        if (q1Radios[i].checked) {
            return q1Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}

function getq2() {
    var q2Radios = document.getElementsByName("q2");
    for (var i = 0; i < q2Radios.length; i++) {
        if (q2Radios[i].checked) {
            return q2Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}


function getq3() {
    var q3Radios = document.getElementsByName("q3");
    for (var i = 0; i < q3Radios.length; i++) {
        if (q3Radios[i].checked) {
            return q3Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}


function getq4() {
    var q4Radios = document.getElementsByName("q4");
    for (var i = 0; i < q4Radios.length; i++) {
        if (q4Radios[i].checked) {
            return q4Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}


function getq5() {
    var q5Radios = document.getElementsByName("q5");
    for (var i = 0; i < q5Radios.length; i++) {
        if (q5Radios[i].checked) {
            return q5Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}

function getq6() {
    var q6Radios = document.getElementsByName("q6");
    for (var i = 0; i < q6Radios.length; i++) {
        if (q6Radios[i].checked) {
            return q6Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}
function getq7() {
    var q7Radios = document.getElementsByName("q7");
    for (var i = 0; i < q7Radios.length; i++) {
        if (q7Radios[i].checked) {
            return q7Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}

function getq8() {
    var q8Radios = document.getElementsByName("q8");
    for (var i = 0; i < q8Radios.length; i++) {
        if (q8Radios[i].checked) {
            return q8Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}

function getq9() {
    var q9Radios = document.getElementsByName("q9");
    for (var i = 0; i < q9Radios.length; i++) {
        if (q9Radios[i].checked) {
            return q9Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}
function getw1() {
    var w1Radios = document.getElementsByName("w1");
    for (var i = 0; i < w1Radios.length; i++) {
        if (w1Radios[i].checked) {
            return w1Radios[i].value;
        }
    }
    return ""; // Default value if no gender is selected
}







const getElementVal = (id) => {
    return document.getElementById(id).value;
};
