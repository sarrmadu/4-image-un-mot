const images = document.querySelectorAll(".image");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const word = document.getElementById("word");


 // Mots et images correspondantes
 const words = [ "Café", "Cerise","Raisin","Cacahuète"];
 const imagePaths = [
    "./image/Raisin.jpg",
    "./image/Café.jpg",
    "./image/Cerise.jpg",
    "./image/Cacahuète.jpg",
    
  
 ];
 let correctImageIndex = 0;// index de l'image correct
 let attempts = 0 ;//nombre de tentative
 // initialisation des images
 function initializeGame(){
    attempts= 0;
    correctImageIndex = Math.floor(Math.random()* words.length)
    word.textContent = words[correctImageIndex];

    images.forEach((img, index) => {
        img.src = imagePaths[(index + correctImageIndex) % words.length]
        img.alt = words[(index + correctImageIndex) % word.length];
        img.classList.add("hidden");//masquer les images au départ
    });
    message.textContent = "";
    message.classList.remove("correct", "incorrect"); // réinitialiser

 }
 initializeGame();

//  vérifivation du click sur une image
images.forEach((img, index) =>{
    img.addEventListener("click",() =>{
        //verifier si l'imge est encore
        if(!img.classList.contains("hidden")) return;
        if(index===correctImageIndex){
            revealImage();
            message.textContent="Correct! les images sont dévoilées.";
            message.classList.remove("incorrect");
            message.classList.add("correct");
        }else{
            attempts++;
            if(attempts>= 3){
                revealImage();
                message.textContent=
                "Vous avez échoué trois fois. Les images sont dévoilées.";
                message.classList.remove("correct");
                message.classList.add("incorrect");
            }else{
                message.textContent=`Incorrect, essayer encore! (${
                    3 - attempts
                }tentarives restantes)`;
                message.classList.remove("correct");
                message.classList.add("incorrect");
            }
        }
    })
})
//fonction pour dévoiler les imsges
function revealImage(){
    images.forEach((img) =>{
        img.classList.remove("hidden");
    })
}
// réinitialisation du jeu
resetButton.addEventListener("click",() => {
    initializeGame();
    message.textContent ="";
    message.classList.remove("correct", "incorect");
})