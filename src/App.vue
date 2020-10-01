<template>
<div class="app">
<div class="player-container">
  <div class="img-container">
    <img src="./assets/jacinto-1.jpg" alt="Album Art">
  </div>
  <h2 id="title">Electric Chill Machiine</h2>

  <h3 id="artiist">Jacinto</h3>
  <audio ref="audio" src="./assets/jacinto-1.mp3" ></audio>
  <div class="progress-container" id="progress-container">
    <div class="progress" id="progress">
      <div class="duration-wrapper">
        <span id="current-time">0:00</span>
        <span id="duration">2:06</span>
    </div>
  </div>
  <div class="player-controls">
   <font-awesome-icon icon="backward" class="fas" title="backword" />
    <font-awesome-icon :icon="playStatus" class="fas" title="play" id="play-btn" @click="play" />
    <font-awesome-icon icon="forward" class="fas" title="forword"  />
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
playStatus: "pause"
 }
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
    showPlayBtn(){
 this.playStatus = "play"
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
  width: 49vw;
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
  top: 17px;
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
