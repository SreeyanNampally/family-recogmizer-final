Webcam.attach('#camera1');
camera = document.getElementById("camera1");

Webcam.set({
    width:500,
    height:350,
    image_format: 'png',
    png_quality:90
})

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="selfie_img"src="'+data_uri+'">'; 

    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/98LMPnI5i/model.json", modelloaded)

function modelloaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById("selfie_img")
    classifier.classify(img,gotresults)
}

function gotresults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        document.getElementById("object_accruracy").innerHTML=(results[0].confidence.toFixed(3))*100 +"%";
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}









