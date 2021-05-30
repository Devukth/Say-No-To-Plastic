var answers = [-1, -1, -1, -1, -1];
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
        localStorage.setItem("yearlyPlasticUsage", Number(yearlyPlasticUsage));
        firebase.database().ref(localStorage.getItem("email") + "/leastKgs").on("value", (snapshot) => {
            data = snapshot.val();
            console.log(data + ", " + yearlyPlasticUsage);
            setKgs(yearlyPlasticUsage);
        });
        setTimeout(function() {
            window.location.assign("loading.html");
        }, 1000);
        
    });
}

function setKgs(data) {
    for(let i = 0; i < data.length; i++) {
        data = data.replace(".", " ");
    }
    firebase.database().ref(localStorage.getItem("email") + "/").update ({
        leastKgs: data
    });
    firebase.database().ref(localStorage.getItem("email") + "/").update ({
        leastKgs: data
    });
}