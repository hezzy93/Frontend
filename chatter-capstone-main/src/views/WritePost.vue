<template>
  <div id="writepost-frame">
    <div id="writepost-title"><h1>Create a New Post</h1> </div>
    
    <WritePostView />
  </div>
</template>

<script setup lang="ts">
  import WritePostView from '../views/WritePostView.vue';
</script>

<style scoped>
#writepost-frame
{
  padding: 120px 40px;
  
}

#writepost-title
{
  width: 100%;

  display: flex;
  justify-content: center;

  margin: 10px 0px;

}
</style>