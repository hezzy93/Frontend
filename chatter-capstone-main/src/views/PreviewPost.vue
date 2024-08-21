<template>
  <div id="preview-frame">
    <div id="preview-display">
      <RouterLink to="/writepost">
        <button>Back to draft</button>
      </RouterLink>
      
      <div v-if="postImageUrl" id="postImage-preview">
        <img :src="postImageUrl" alt="Post Image Preview" />
      </div>
      <div id="title-preview">
        <h2>{{ postTitle }}</h2>
      </div>
      <div id="body-preview">
        <div v-html="postContent"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const postTitle = computed(() => route.query.title as string || '');
const postContent = computed(() => route.query.content as string || '');
const postImage = computed(() => {
  const image = route.query.image;
  return typeof image === 'string' ? image : ''; 
});

const postImageUrl = computed(() => postImage.value); 
</script>

<style scoped>
#preview-frame {
  padding: 120px 40px;
  display: flex;
  justify-content: center;
}

#preview-display {
  width: 80%;
  padding: 20px;
}

#postImage-preview img 
{
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
  object-fit: cover;
}

button 
{
  margin-bottom: 20px;
  padding: 8px 16px;
  border: none;
  background-color: #6200ee;
  color: white;
  cursor: pointer;
  border-radius: 16px;
}

button:hover 
{
  background-color: #3700b3;
}
</style>
