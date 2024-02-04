const noButton = document.getElementById("no")
var yesButton = document.getElementById("yes")
const imgSrc = document.getElementById("gif")
var size= 40    


function changeGif() {
    imgSrc.setAttribute("src","assets/heart.gif")
}

noButton.addEventListener("click",() =>{
    imgSrc.setAttribute("src","assets/watch.gif");
    setTimeout(changeGif,2000)
    yesButton.style.fontSize = size +"px"
    size = size + 20
})


yesButton.addEventListener("click" ,() =>{
    document.getElementById("question").classList.add("none")
    document.getElementById("flower").classList.remove("none").then(
    document.getElementById("flower").classList.add("display"))
})