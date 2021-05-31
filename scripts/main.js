var answers = [-1, -1, -1, -1, -1];
let results = [
    "You're doing an amazing job of using less plastic and that's fantastic!",
    "You are doing a great job, check for any opportunities for less plastic usage.",
    "You are doing a good job, check for any opportunities for less plastic usage.",
    "You are doing okay, but you can do better.",
    "You use a lot of plastic, try reducing it.",
    "The amount of plastic you use is very big, please try reducing it.",
    "The amount of plastic you use is very big, please try reducing it."
];
var weightOfPlastic = [150, 60, 100, 50, 50];
var monthlyPlasticUsage = 0;
var yearlyPlasticUsage = 0;
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

function checkQuestion() {
    result = "";
    monthlyPlasticUsage = 0;
    yearlyPlasticUsage = 0;
    $(function() {
        for(let i = 0; i < answers.length; i++) {
            answers[i] = $("#qinput" + (i + 1)).val();
        }
        for(let j = 0; j < answers.length; j++) {
            monthlyPlasticUsage += Number(answers[j]) * weightOfPlastic[j];
        }
        yearlyPlasticUsage += Number(((monthlyPlasticUsage / 1000) * 12).toFixed(2));
        if(yearlyPlasticUsage == 0) result = results[0];
        else if(yearlyPlasticUsage <= 5) result = results[1];
        else if(yearlyPlasticUsage <= 7.5) result = results[2];
        else if(yearlyPlasticUsage <= 10) result = results[3];
        else if(yearlyPlasticUsage <= 12.5) result = results[4];
        else if(yearlyPlasticUsage <= 15) result = results[5];
        else if(yearlyPlasticUsage > 15) result = results[6];
        localStorage.setItem("results", result);
        localStorage.setItem("yearlyPlasticUsage", Number(yearlyPlasticUsage));
        setTimeout(function() {
            window.location.assign("loading.html");
        }, 500);
        
    });
}