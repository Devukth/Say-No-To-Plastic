var per = 0;
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
$(function() {
    $("#report").hide();
    $("#logOut").click(function() {
        firebase.auth().signOut().then(() => {
            localStorage.removeItem("points");
            window.location.assign("index.html");
        }).catch((error) => {
            console.log(error.message);
        });
    });
    $("#result").text(localStorage.getItem("results"));
    for(let i = 0; i < 9; i++) {
        setTimeout(function() {
            per += 10;
            $("#percentage").text(per + "%")
        }, Math.random() * 5000);
    }
    setTimeout(function() {
        per += 10;
        $("#percentage").text(per + "%");
        $("#calc").hide(1250);
        $("#amount").html("You use <span style='font-size: 3rem;'>" + localStorage.getItem("yearlyPlasticUsage") + "</span> kgs of plastic per year");
        $("#report").show(1250);
    }, Math.random() * 5000);
});