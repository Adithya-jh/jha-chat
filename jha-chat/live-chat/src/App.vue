<template>
  <router-view/>
  <div id="container"></div>
</template>


<script>
import {World} from './World/world'
export default {
    methods:{
           world(){
           //get reference to the container
             const container = document.querySelector('#container');
                //create an instance of the world app
            const  world = new World(container);
                //render the scene
             world.start()
            }
  },
  mounted(){
    this.world()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
