<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar1 from './components/Navbar1.vue'
import Navbar2 from './components/Navbar2.vue'

import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseConfig'; 

const isLoggedIn = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});


</script>

<template>

  <Navbar2 v-if="isLoggedIn" />
    <Navbar1 v-else />

  
  

    <RouterView />
</template>

<style scoped>
 
   
  
</style>
