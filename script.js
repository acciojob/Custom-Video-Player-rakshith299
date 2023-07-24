/* Edit this file */
const player = document.querySelector('.player');
const video = document.getElementById('viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = document.getElementById('toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let volume = document.getElementById("volume");
let playbackrate = document.getElementById("playbackRate");

let skip10 = document.getElementById("skip10");
let skip25 = document.getElementById("skip25");

let completedBar = document.getElementById("progress-bar");
let fullBar = document.getElementById("progress");

let flag = {
    current: 'play'
}

toggle.addEventListener("click", function(){
    console.log(toggle.innerHTML);
    if(flag.current === 'play'){
        console.log("he");
        video.play();
        toggle.innerHTML = `<i class="fa-solid fa-pause" style="color: #f0f2f5;"></i>`;
        flag.current = 'pause'
    }else if(flag.current === 'pause'){
        video.pause();
        toggle.innerHTML = `<i class="fa-solid fa-play" style="color: #f5f5f5;"></i>`;
        flag.current = 'play';
    }
})

volume.addEventListener("input", function(){
    video.volume = this.value;
})

playbackrate.addEventListener("input", function(){
    video.playbackRate = this.value; 
})

skip10.addEventListener("click", function(){
    video.currentTime = video.currentTime - 10;
})

skip25.addEventListener("click", function(){
    video.currentTime = video.currentTime + 25;
})

video.addEventListener("timeupdate", function(){
    let current = (video.currentTime / video.duration) * 100;

    completedBar.style.flexBasis = `${current}%`;
})

fullBar.addEventListener("click",function(event){
    let newTime = (event.offsetX / fullBar.offsetWidth) * video.duration;
    video.currentTime = newTime;
})
