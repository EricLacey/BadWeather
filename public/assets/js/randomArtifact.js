//https://stackoverflow.com/questions/21648147/selecting-a-random-image
//https://www.w3schools.com/js/js_arrays.asp

//objects
const anubis = {
    'imageName': '1.png',
    'artifactName': 'anubis',
    'fact': 'Represented by the jackal-headed god Duamutef, this canopic jar was an ancient Egyptian funerary urn used to contain the stomach of a mummified body to protect it during its journey into the afterlife. Typically made from limestone or calcite, canopic jars like this are a common staple in Egyptology and can be seen in museums the world over.',
    'group' : 'egypt'
}
const horus = {
    'imageName': '2.png',
    'artifactName': 'horus',
    'fact': 'Represented by the falcon-headed god Qebehsenuef, this canopic jar was an ancient Egyptian funerary urn used to contain the intestines of a mummified body to protect it during its journey into the afterlife. Typically made from limestone or calcite, canopic jars like this are a common staple in Egyptology and can be seen in museums the world over.',
    'group' : 'egypt'
}
const isis = {
    'imageName': '3.png',
    'artifactName': 'isis',
    'fact': 'Represented by the human-headed god Imsety, this canopic jar was an ancient Egyptian funerary urn used to contain the liver of a mummified body to protect it during its journey into the afterlife. Typically made from limestone or calcite, canopic jars like this are a common staple in Egyptology and can be seen in museums the world over.',
    'group' : 'egypt'
}
const whalehat = {
    'imageName': '4.png',
    'artifactName': 'whalehat',
    'fact': 'This wooden hat belongs to the Tlingit Daklaweidi (Killer Whale) clan of southeast Alaska. It is a sacred object representing their clan crest of a whale rising from the ocean. Repatriated to the clan in 2005, the hat is also an important symbol of cultural patrimony.',
    'group' : 'aboriginal'
}
const moai = {
    'imageName': '5.png',
    'artifactName': 'moai',
    'fact': 'Monolithic stone sculptures standing up to 10 meters in height, Moai statues were carved by the Rapa Nui people of Easter Island in Polynesia to deify their ancestors. The mystery of how the statues, weighing approximately 13 tons each, were moved around the island has been a topic of debate for centuries, and remains truly unsolved to this day.',
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