let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
    //hide button
    play.style = "display: none";
    playing.style = "";
});