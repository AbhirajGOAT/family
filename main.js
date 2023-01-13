Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id= "selfie" src= "'+data_uri+'">';
    });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ze5dNs-n0/model.json', modelLoaded)
function modelLoaded() {
    console.log("modelLoaded")
}

function check() {
    img = document.getElementById("selfie");
    classifier.classify(img, getResult);
}

function getResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document .getElementById("result_member").innerHTML = results[0].label;
        document .getElementById("accuracy_member").innerHTML = results[0].confidence.toFixed(3);
    }
}