var newEmail;
var newPassword;
var password;
var email;
var firebaseConfig = {
    apiKey: "AIzaSyDIRpeYQ7eGUA10A-hAFE3JHIm_LjS_8kM",
    authDomain: "plasticsurvey-3d3d8.firebaseapp.com",
    databaseURL: "https://plasticsurvey-3d3d8-default-rtdb.firebaseio.com",
    projectId: "plasticsurvey-3d3d8",
    storageBucket: "plasticsurvey-3d3d8.appspot.com",
    messagingSenderId: "281241272724",
    appId: "1:281241272724:web:1daa2fe0a94364f554cf81"
};
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    $("#description").hide();
    $("#reasons").hide();
    $("#description").slideDown(1250);
    $("#showReasons").click(function() {
        $("#reasons").slideToggle();
    });
});

function OtherLogin() {
    $(function() {
        newEmail = $("#email").val();
        newPassword = $("#password").val();
        for(let i = 0; i < newEmail.length; i++) {
            newEmail = newEmail.replace(".", " ");
        }
        for(let j = 0; j < newPassword.length; j++) {
            newPassword = newPassword.replace(".", " ");
        }
        getEmail();
        getPassword();
    });
}
OtherLogin();

function login() {
    $(function() {
        newEmail = $("#email").val();
        newPassword = $("#password").val();
        for(let i = 0; i < newEmail.length; i++) {
            newEmail = newEmail.replace(".", " ");
        }
        for(let j = 0; j < newPassword.length; j++) {
            newPassword = newPassword.replace(".", " ");
        }
        getEmail();
        getPassword();
        if(newPassword == password && newEmail == email) {
            $("#passLength").text("Successfully logged in");
            localStorage.setItem("email", newEmail);
            setTimeout(function() {
                window.location.assign("main.html");
            }, 1000);
        } else {
            $("#passLength").text("Password or email is wrong");
        }
    });
}
function getPassword() {
    firebase.database().ref(email + "/password").on("value", (snapshot) => {
        data = snapshot.val();
        password = data;
    });
}
function getEmail() {
    firebase.database().ref("/").on("value", (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            data = childSnapshot.key;
            email = data;
        });
    });
}