let like = 0;
let  abonne = 0;
let nb_like_per_click =1;
let multiplicateur = 0;
let bonus = 0;
let niveau = 0;

let niveau_cost = 20;
let multiplicateur_cost = 10;
let abonne_cost = 200;
let bonus_cost = 1000;
let index_message = 0

document.querySelector(".multiplicateur_cost").innerHTML= multiplicateur_cost
document.querySelector(".abonne_cost").innerHTML= abonne_cost
document.querySelector(".bonus_cost").innerHTML= bonus_cost


// MESSAGES AUTOMATiQUES
let messages = [
    'Vous êtes </br> au niveau 1',
    'Félicitation </br>vous êtes </br>au niveau 2',
    'Félicitation </br>vous êtes </br>au niveau 3',
    'Félicitation </br>vous êtes </br>au niveau 4'
];

function afficher_messages(){
    // ...
    if (like>= niveau_cost){
        if (index_message > 4){
    return "vous êtes au dernier niveau"
        } else {
    index_message =  index_message + 1
    niveau_cost = niveau_cost * niveau_cost;
        }
    } 
    document.querySelector(".messages").innerHTML = messages[index_message]
}

function recuperer_img_like(){
    let images = [
        { url: "images/like-4.jpg", min: 200},
        { url: "images/like-3.jpg", min: 100},
        { url: "images/like-2.jpg", min: 20},
        { url: "images/like-1.jpg", min: 0},
    ];
    
    result = images.find(element => element.min <= like)
   return result.url
}

document.querySelector("#like").addEventListener("click",mettreAJourMonResult)
function mettreAJourMonResult(){
    like = like + nb_like_per_click;
    document.querySelector(".result").innerHTML = like
    document.getElementById('like').src =recuperer_img_like();
    afficher_messages()
}

// Multiplicateur

document.querySelector("#multiplier").addEventListener("click",augmenterMultiplicateur)
function augmenterMultiplicateur(){
    if(like>=multiplicateur_cost){
        nb_like_per_click = nb_like_per_click*2;
        like = like - multiplicateur_cost;
        multiplicateur_cost = multiplicateur_cost * 2;
        multiplicateur = multiplicateur + 1;
        document.querySelector(".multiplicateur").innerHTML = multiplicateur
        document.querySelector(".multiplicateur_cost").innerHTML = multiplicateur_cost
        document.querySelector(".result").innerHTML = like
    } else{
        alert("Vous n'avez pas assez de like");
    }
}

// Auto-clicker
let click = function() {
    like = like + abonne;
    document.querySelector(".abonne").innerHTML = abonne
    document.querySelector(".abonne_cost").innerHTML = abonne_cost
    document.querySelector(".result").innerHTML = like
}

document.querySelector("#abonne").addEventListener("click", mettreAJourMonAbonne)
function mettreAJourMonAbonne(){
    if(like>=abonne_cost){
        like = like - abonne_cost;
        abonne_cost = abonne_cost * 2;
        abonne = abonne + 1;
        setInterval(click, 1000);
    }else{
        alert("Vous n'avez pas assez de like");
    }
}

// BONUS
document.querySelector("#bonus").addEventListener("click",augmenterBonus)
function augmenterBonus(){
    if(like>=bonus_cost){
        nb_like_per_click = nb_like_per_click*(1+200/100);
        like = like - bonus_cost;
        bonus = bonus + 1;
        document.querySelector(".result").innerHTML = like
    }else{
        alert("Vous n'avez pas assez de like");
    }
}

// COOKIES BONUS

const NB_LIKE = 10;
for (let index = 0; index < NB_LIKE; index++) {
    const element = document.createElement('img');
    element.src = './images/coeurs(1).png'
    element.className = 'image'
    x = Math.round(Math.random() * 100)
    y = Math.round(Math.random() * 10)
    element.style.left = x + 'vw';
    element.style.top = y + 'vh';
    document.querySelector('body').appendChild(element)
}

// Pluie de like

