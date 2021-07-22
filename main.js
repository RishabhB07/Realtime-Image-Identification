function setup(){
    canvas=createCanvas(250, 250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2YYzN8w1n/model.json', modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
console.log('ml5 version', ml5.version);
function modelLoaded(){
    console.log('model loaded!');
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_result_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}