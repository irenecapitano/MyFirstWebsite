function runProgram() {
    console.log("Program is running");

    makeDiv();
}

function makeDiv(){
    //to create my big div
    const myCardDiv = document.createElement("div");
    myCardDiv.classList.add("myCard");

    //to create my div that goes inside myCardDiv
    const bodyCardDiv = document.createElement("div");
    bodyCardDiv.classList.add("body");

    //create my imag
    const img = document.createElement("img");
    img.classList.add("miscellaneous-card-img");
    img.setAttribute('src', "https://i.pinimg.com/736x/81/3d/12/813d12bfe91c42843a21acaf8a746ab4.jpg");
    img.setAttribute('alt', "Go to Your Miscellaneous Checklist!");

    //create my title
    const title = document.createElement("h5");
    title.classList.add("miscellaneous-card-title");
    title.textContent = "Miscellaneous";

    //create the bio under my title
    const bio = document.createElement("p");
    bio.classList.add("miscellaneous-card-text");
    bio.textContent = "Have items that do not fit one of these categories? Put them into here!";

    //create the text on the button + the button
    const button = document.createElement("a");
    button.classList.add("btn");
    button.classList.add("btn-info");
    button.textContent = "Go to Your Miscellaneous Checklist!";

    //appending items so they show up on my webpage
    myCardDiv.appendChild(img);
    myCardDiv.appendChild(bodyCardDiv);

    //inputting the stuff into the bodycarddiv
    bodyCardDiv.appendChild(title);
    bodyCardDiv.appendChild(bio);
    bodyCardDiv.appendChild(button);

    //here i am creating all of my containers to put everything into
    let myCardContainer = document.querySelector(".flex-flow");
    myCardContainer.appendChild(myCardDiv);
}

document.addEventListener('DOMContentLoaded', runProgram);
