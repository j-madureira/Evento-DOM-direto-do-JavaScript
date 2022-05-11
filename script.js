var t = document.getElementById("titulo");
t.onmouseover = mudarText;

function mudarText(){
    this.innerHTML = "Mudado";
}