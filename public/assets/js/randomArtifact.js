//https://stackoverflow.com/questions/21648147/selecting-a-random-image
//https://www.w3schools.com/js/js_arrays.asp

//objects
const anubis = {
    'imageName': '1.png',
    'artifactName': 'anubis',
    'fact': 'This Canopic Jar represents Anubis - the Egyptian god of mummification and the afterlife. It is made using limestone/pottery and placed in a chest, being buried in the corpse’s tomb. Inside, this jar contains stomach, intestinesm lungs and liver. The Heart was left with the corpse because the Egyptians believed it was the soul. Many jars survived from the old Kingdom and are displayed in today’s museums.',
    'group' : 'egypt'
}
const horus = {
    'imageName': '2.png',
    'artifactName': 'horus',
    'fact': 'This Canopic Jar represents Horus - the important and ancient deity of Egyptian gods. It is made using limestone/pottery and placed in a chest, being buried in the corpse’s tomb. Inside this jar contains stomach, intestinesm lungs and liver. The Heart was left with the corpse because the Egyptians believed it was the soul. Many jars survived from the old Kingdom and are displayed in today’s museums.',
    'group' : 'egypt'
}
const isis = {
    'imageName': '3.png',
    'artifactName': 'isis',
    'fact': 'This Canopic Jar represents Isis - a goddess of life and magic in Egyptian mythology. It is made using limestone/pottery and placed in a chest, being buried in the corpse’s tomb. Inside this jar contains stomach, intestinesm lungs and liver. The Heart was left with the corpse because the Egyptians believed it was the soul. Many jars survived from the old Kingdom and are displayed in today’s museums.',
    'group' : 'egypt'
}
const whalehat = {
    'imageName': '4.png',
    'artifactName': 'whalehat',
    'fact': 'This is a Whale Hat that represents a war helmet. Such hats came from the Tlingit Indians and were worn by clans. The Killer whale hat embodies clan ancestors and allows tribe members to feel their presence.',
    'group' : 'aboriginal'
}
const moai = {
    'imageName': '5.png',
    'artifactName': 'moai',
    'fact': 'This is a Moai statue that came from Polynesia. It is made from volcanic rock and is 13 ft in average height! Such statues represent large oversized human head and symbolize religion, political power, leadership.',
    'group' : 'moai'
}

//array of objects
let randomArtifact = new Array();
randomArtifact[0] = anubis;
randomArtifact[1] = horus;
randomArtifact[2] = isis;
randomArtifact[3] = whalehat;
randomArtifact[4] = moai;

//randomized target object
let num = Math.floor( Math.random() * 5);
let chosenArtifact = randomArtifact[num];

function randomizeArtifacts() {
    //display target object image as a hint for drawing
    document.getElementById("artifactHint").innerHTML = ('<img src="' + 'assets/userInterface/' + chosenArtifact.imageName + '" width="600px">')

    let event = new Event("chosenArtifact")
    document.dispatchEvent(event)
}