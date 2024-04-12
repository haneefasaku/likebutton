const likeButton = document.getElementById("likeButton")
const number = document.getElementById("number")
likeButton.addEventListener("click", likes)

let like = 0
function likes(){
    like = like+1
    number.innerHTML=like + " likes"
}