<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig'; 

const email = ref('');
const password = ref('');
const router = useRouter();

const loginUser = async (event: Event) => {
  event.preventDefault();
  try {
  await signInWithEmailAndPassword(auth, email.value, password.value);
  router.push('/loggedin'); // Redirect to LoggedIn component after login
} catch (error) {
  if (error instanceof Error) {
    console.error("Error logging in:", error.message);
  } else {
    console.error("Unknown error logging in:", error);
  }
}

};
</script>


<template>
  <div id="login-frame"> 
    <div id="login-display">
      <form @submit="loginUser">
        <div><h2>Log In With Your Email</h2></div>
        <div id='inputs'>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required placeholder="johnny@email.com" />
        </div>
        <div id='inputs'>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <p>Don't have an account? <RouterLink to="/signup"><b>Sign Up</b></RouterLink></p>
        <button id="for-btns" type="submit">Log In</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
#login-frame
{
    padding: 120px 40px;

    display: flex;
    align-items: center;
    justify-content: center;

}

#login-display
{
    width: 50%;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: whitesmoke;
    
}

form
{
    width: 70%;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#inputs
{
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 10px 0px;
    
}

form p
{
    font-size: 12px;

    margin-bottom: 10px;
}

form b
{
    font-weight: 700;
}

input
{
    padding: 10px;

    border-style: none;
    border: solid 1px;
    border-color: rgba(223, 95, 240, 0.493);
    border-radius: 10px;
    border-radius: 16px;
}

label
{
    margin: 4px 0px;
}


button#for-btns 
{
    background-color: rgb(162, 0, 255);

    width: 30%;
    display: flex;
    justify-content: center;
    
    padding: 8px;
    
    border-radius: 12px;
    
    color: white;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
}

button#for-btns:hover 
{
    background-color: rgb(120, 0, 190);
}



</style>