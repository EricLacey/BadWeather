//https://stackoverflow.com/questions/21648147/selecting-a-random-image

let randomArtifact = new Array();
randomArtifact[0] = 'paper01.png';
randomArtifact[1] = 'paper02.png';
randomArtifact[2] = 'paper03.png';
randomArtifact[3] = 'paper04.png';
randomArtifact[4] = 'paper05.png';
randomArtifact[5] = 'paper06.png';

function randomizeArtifacts() {
    var num = Math.floor( Math.random() * 6);
    var img = randomArtifact[num];
    document.getElementById("artifactHint").innerHTML = ('<img src="' + 'assets/userInterface/' + img + '" width="600px">')
}