<template>
<div class="whole">

  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login to the Chatroom</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up for an Account</h2>
      <SignupForm @signup="enterChat" />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
  <div class="title"> ENTER AND CHAT </div>
</div>
</template>

<script>
import {gsap,Elastic} from 'gsap'
//import TweenMax from 'gsap'
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  },
  mounted(){
    gsap.from('.title',5,{
      ease: Elastic.easeOut.config(1,0.3),y: -200
    });
    gsap.from('.whole',3.5,{
      ease: Elastic.easeOut.config(1,0.3),y: 400
    });
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
  .whole{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
  .title{
    color: black;
    font-size: 30px;
    font-family: 'Yellowtail', cursive;
    z-index: -2;
  }
</style>
