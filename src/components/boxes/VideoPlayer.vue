<template>
    <div class="video-container"> 
        <video autoplay loop muted>
            <source src="@/assets/machineworking.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div> 
</template>

<script> 
    export default {
        name: 'VideoPlayer'
    }
</script> 

<style scoped>
.video-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
}
/* @media screen and (min-aspect-ratio: 16/9) {
  .video-container {
    padding-top: 56.25%;

  }
}

@media screen and (max-aspect-ratio: 16/9) {
  .video-container {
    padding-top: 75%;
  }
} */

</style>