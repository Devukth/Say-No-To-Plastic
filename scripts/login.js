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
function login(email, password) {
    $(function() {
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user;
            setTimeout(function() {
                window.location.assign("main.html");
            }, 500);
        }).catch((error) => {
            var errorMessage = error.message;
            $("#passLength").text(errorMessage);
        });
    });
}