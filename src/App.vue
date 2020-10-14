<template>
<div class="app">
<div class="player-container">
  <div class="img-container">
    <img :src="img" alt="Album Art">
  </div>
  <h2 id="title">{{songName}}</h2>

  <h3 id="artist">{{artist}}</h3>
  <audio ref="audio" :src="music"  @timeupdate="updateprogress"
        @canplay="updateprogress" ></audio>
  <div class="progress-container" id="progress-container" @click="setProgress($event)" ref="progressRange">
    <div class="progress"  id="progress" :style="{width: progressBarWidth}">
     
  </div>
   <div class="duration-wrapper">
        <span id="current-time">{{currentTime}}</span>
        <span id="duration">{{duration}}</span>
    </div>
  <div class="player-controls">
   <font-awesome-icon icon="backward" class="fas" title="backword" @click="backWard" />
    <font-awesome-icon :icon="playStatus" class="fas" title="play" id="play-btn" @click="play" />
    <font-awesome-icon icon="forward" class="fas" title="forword" @click="forWard" />
  </div>
</div>
</div>
</div>

</template>

<script>
export default {
  name: "App",
  components: {
 },
 data(){
   return{
playStatus: "play",
progressBarWidth:0,
currentTime:0,
duration:0,
img:'',
currentSong: 0,
songs:[{
  name:'jacinto-1',
  displayName:'Electric Chill Machine',
  artist:'Jacinto Design'
},
{
  name:'jacinto-2',
  displayName:'Seven Nation Army(Remix)',
  artist:'Jacinto Design'
},
{
  name:'jacinto-3',
  displayName:'Goodnight Disco Queen',
  artist:'Jacinto Design'
},
{
  name:'metric-1',
  displayName:'Front Row(Remix)',
  artist:'Metric/Jacinto Design'
},
],
songName:'',
artist:'',
music:'',
 }
 },
 mounted(){
this.loadSong(this.songs[this.currentSong])
 },
 methods:{
 play() {
      const audio = this.$refs["audio"];
      if (audio.paused) {
        audio.play();
        this.playStatus="pause"
      } else {
        audio.pause();
       this.showPlayBtn()
      }
    },

loadSong(song){
  console.log(song)
  this.songName =song.displayName
  this.artist = song.artist
this.music= require(`./assets/${song.name}.mp3`)
this.img =  require(`./assets/${song.name}.jpg`)
this.currentTime = 0

},

backWard(){
if(this.currentSong== 0){
  this.currentSong = 0
}else {
  this.currentSong = this.currentSong - 1
}

this.loadSong(this.songs[this.currentSong])
},
forWard(){
  if(this.currentSong== 3){
  this.currentSong = 3
}else {
  this.currentSong = this.currentSong + 1
}
this.loadSong(this.songs[this.currentSong])

},


    showPlayBtn(){
 this.playStatus = "play"
    },
    displayTime(time){
     const minutes= Math.floor(time / 60)
     let seconds=Math.floor(time % 60)
     seconds = seconds>9 ? seconds :`0${seconds}`;
     return`${minutes}:${seconds}`;
   },
    updateprogress(){
      const audio = this.$refs["audio"];
      this.progressBarWidth=`${(audio.currentTime*100)/audio.duration}%`
     this.currentTime =`${this.displayTime(audio.currentTime)}/`;
      this.duration = `${this.displayTime(audio.duration)}`;
    },
    setProgress(e){
      console.log('e.offsetX---->', e)
      const audio = this.$refs["audio"];
      const progressRange= this.$refs["progressRange"]
      const newTime = e.offsetX / progressRange.offsetWidth
      this.progressBarWidth = `${newTime*100}%`;
      audio.currentTime = newTime * audio.duration
    },
 },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap');
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #c9ced3;
  margin:0px;
  font-size: 12px;
}

.player-container{
  height: 500px;
  width: 400px;
  background: #e7e7e7;
  border-radius: 20px;
  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.3);
}
.img-container{
  height: 300px;
  width: 300px;
position: relative;
top: -50px;
left: 50px;
}
.img-container img{
  height: 100%;
  width: 100%;
  object-fit: cover;
    border-radius: 20px;
  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);
}
.duration-wrapper{
  display: flex;
  color: black;
  width: 100%;
  justify-content: space-between;
   position: relative;
  top: -25px;
}
.current-time{
  justify-content: flex-start;
}

h2{
  font-family: 'Sansita Swashed', cursive;
  color: black;
  font-size: 25px;
  text-align: center;
}
h3{
  font-family: 'Sansita Swashed', cursive;
  color: black;
}
.player-controls{
  position: relative;
  top: 10px;
  left: 106px;
  width: 200px;
}
.fas{
  font-size: 30px;
  color: rgb(129, 129, 129);
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
}
.fas:hover{
  filter:brightness(80%)
}
.progress-container{
background: #fff;
border-radius: 5px;
cursor: pointer;
margin: 40px 20px;
height: 4px;
width: 90%;
}
.progress{
  background: #242323;
  border-radius: 5px;
  height: 100%;
  width: 66%;
  transition: width 0.1s linear;
}

@media screen and (max-width: 376px){
  .img-container{
    left: 29px;
  }
  h2{
    font-size: 20px;
  }
  h3{
  font-size: 15px;
  }
  .player-container{
    width: 95vw;



  }
}
</style>
