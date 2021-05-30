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
    $("#passwordRegister").blur(function() {
        let length = $("#passwordRegister").val().length;
        if(length < 8) {
            $("#passLength").text("Password needs to be at least 8 characters long");
        } else {
            $("#passLength").text("");
        }
    });
});

function registerDetails() {
    $(function() {
        var newEmail = $("#emailRegister").val();
        var newPassword = $("#passwordRegister").val();
        for(let i = 0; i < $("#emailRegister").val().length; i++) {
            newEmail = newEmail.replace(".", " ");
        }
        for(let j = 0; j < $("#passwordRegister").val().length; j++) {
            newPassword = newPassword.replace(".", " ");
        }
        firebase.database().ref("/").child(newEmail).set ({
            password: newPassword
        });
        $("#passLength").text("Successfully registered");
        setTimeout(function() {
            window.location.assign("index.html");
        }, 1000);   
    });
}