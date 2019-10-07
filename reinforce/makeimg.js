let field = document.getElementById('field');

let left = document.createElement("div");
left.style.background = "url('./img/돈없는짤.jpg') no-repeat center";
left.style.backgroundSize = 'contain';
left.style.paddingTop='20%';
left.style.animation = "left 3.5s infinite";
left.style.cssFloat='left';
left.style.width = '50%';


let right = document.createElement("div");
right.style.marginLeft="60%";
right.style.background = "url('./img/돈없는짤.jpg') no-repeat center";
right.style.backgroundSize = 'contain';
right.style.paddingTop='20%';
right.style.animation = "right 3.5s infinite";

field.appendChild(left);
field.appendChild(right);

function onClick() {
    right.style.animation = "endR 3s 1";
    left.style.animation = "endL 3s 1";
    setTimeout(()=>{
        right.remove();
        left.remove();
        let newCard = document.createElement("div");
        newCard.style.position = 'fixed';
        newCard.style.marginLeft = '34%';
        newCard.style.borderRadius = '50%';
        newCard.style.background = "url('./img/브베.png') no-repeat center top";
        newCard.style.backgroundSize = 'cover';
        newCard.style.width = '34%';
        newCard.style.paddingTop= '34%';
        newCard.style.animation = 'new 3s infinite';
        document.getElementById('btn').remove();
        field.appendChild(newCard);
    },3000);
}