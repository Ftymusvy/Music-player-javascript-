let musics = [
    {
        name : "Set fire to the rain",
        cover : "imgs/set-fire.jpg",
        audio: new Audio("./musics/set-fire-to-rain.mp3")
    },
    {
        name : "Girl like you",
        cover : "imgs/girl-like-you.jpg",
        audio: new Audio("./musics/girl.mp3")
    },
    {
        name : "Dusk till down",
        cover : "imgs/dusk.jpg",
        audio: new Audio("./musics/dusk-till-down.mp3")
    }
]

let range = document.querySelector("#music-time")
let playBtn = document.querySelector("#play-btn")
let nextBtn = document.querySelector("#next-btn")
let preBtn = document.querySelector("#pre-btn")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")


let currentMusic = 0;
let audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText =musics[currentMusic].name



//چک لود شدن موزیک
audio.addEventListener("canplay" , ()=>{
    range.max = audio.duration
    
})
//حرکت دایره پلی با گذر ثانیه
audio.addEventListener("timeupdate" , ()=>{
    range.value = audio.currentTime
   
})
//شروع موسیقی از جلیی که کلیک شده
range.addEventListener("input" , ()=>{
     audio.currentTime = range.value 
})

//پخش یا پاز بودن موزیک
playBtn.addEventListener("click" , ()=>{
    if (audio.paused) {
        audio.play();
        musicCover.style.animationPlayState = "running"
        playBtn.classList.replace("fa-play" , "fa-pause")
    }else{
        audio.pause();
        musicCover.style.animationPlayState = "paused"
        playBtn.classList.replace("fa-pause" , "fa-play")
    }
})



 //رفتن به موزیک بعدی و قبلی
 nextBtn.addEventListener("click" , ()=>{
    changeMusic("next")
 })
 preBtn.addEventListener("click" , ()=>{
    changeMusic("pre")
 })
// //وقتی موزیک به پایان  میرسه
// audio.addEventListener("ended", () => {
//     playBtn.classList.replace("fa-pause", "fa-play");
//     musicCover.style.animationPlayState = "paused";
//     range.value = 0;
// });
function changeMusic(state){
    audio.pause()
    range.value = 0;
    musicCover.style.animationPlayState = "paused"
    playBtn.classList.replace("fa-pause" , "fa-play")
    audio.currentMusic = 0

    if (state == "next"){
        if (currentMusic == musics.length -1)
            currentMusic = 0
        else
            currentMusic +=1
        }else{
           if (currentMusic == 0)
            currentMusic == musics.length -1
           else
            currentMusic -=1
        }
        audio = musics[currentMusic].audio
        musicCover.src = musics[currentMusic].cover
        musicName.innerText =musics[currentMusic].name
       
       audio.addEventListener("canplay" , ()=>{
    range.max = audio.duration
    
})
        audio.addEventListener("timeupdate" , ()=>{
        range.value = audio.currentTime
   
})
}    





