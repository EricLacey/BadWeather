//https://stackoverflow.com/questions/21648147/selecting-a-random-image
//https://www.w3schools.com/js/js_arrays.asp

//objects
const anubis = {
    'imageName': '1.png'
}
const horus = {
    'imageName': '2.png'
}
const isis = {
    'imageName': '3.png'
}
const whalehat = {
    'imageName': '4.png'
}
const moai = {
    'imageName': '5.png'
}

//array of objects
let randomArtifact = new Array();
randomArtifact[0] = anubis;
randomArtifact[1] = horus;
randomArtifact[2] = isis;
randomArtifact[3] = whalehat;
randomArtifact[4] = moai;

function randomizeArtifacts() {
    let num = Math.floor( Math.random() * 5);
    let chosenArtifact = randomArtifact[num];
    document.getElementById("artifactHint").innerHTML = ('<img src="' + 'assets/userInterface/' + chosenArtifact.imageName + '" width="600px">')
}