<template>
    <div class="notfound">
        <h2 class="err">#404</h2>
        <p class="page">Page not found</p>
    </div>
    <div id="container"></div>
</template>

<script>
import {gsap,Bounce,Elastic} from 'gsap'
export default{
    mounted(){
            gsap.from('.err',2,{
      ease: Bounce.easeOut,y: -202
    });
            gsap.from('.page',4,{
      ease: Elastic.easeOut,y: 202
    });
    }
}
</script>

<style>
.notfound{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.err{
    font-family: 'Yellowtail', cursive ;
    font-size: 50px;
    color: black;
}
.page{
    font-family: 'Amatic SC', cursive;
    font-size: 70px;
    color: black;
}
</style>