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

function GetTableDataFromDB(callback) {
    firebase.database().ref("/").on("value", (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            for(var childChildSnapshot in childSnapshot) {
                if(childChildSnapshot.key == "leastKgs") {
                    console.log(childChildSnapshot.val());
                }
            }
        });
    });
}