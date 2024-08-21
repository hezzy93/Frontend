<template>
  <div id="editor-frame">
    <div id="editor-display">
      <div id="image-for-post">
        <label htmlFor="imageInput">
          <p id="insert-image"><b>Insert post image</b></p>
        </label>
        <input type="file" id="imageInput" @change="handleImageUpload" />
        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreviewUrl" alt="Post Image Preview" />
        </div>
      </div>

      <input
        type="text"
        v-model="title"
        placeholder="Enter title here..."
        id="title-input"
      />
      <textarea
        v-model="postContent"
        placeholder="Write your post here..."
        id="post-input"
      ></textarea>
      <div style=" display:flex; align-items:center;">
        <RouterLink
          :to="{ path: '/previewpost', query: { title: title, content: postContent, image: imageQuery } }"
        >
          <button>Preview Post</button>
        </RouterLink>

        <button @click="publishPost">Publish Post</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig'; 

const title = ref('');
const postContent = ref('');
const imagePreview = ref<string | ArrayBuffer | null>(null);
const router = useRouter();

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

// Compute the image URL for the preview
const imagePreviewUrl = computed(() => {
  return typeof imagePreview.value === 'string' ? imagePreview.value : '';
});

// Compute the image query parameter
const imageQuery = computed(() => {
  return typeof imagePreview.value === 'string' ? imagePreview.value : '';
});

const publishPost = async () => {
  try {
    // Add the post to Firestore
    await addDoc(collection(db, 'posts'), {
      title: title.value,
      content: postContent.value,
      image: imagePreviewUrl.value,
      createdAt: new Date(),
    });
    // Redirect to MyPosts after publishing
    router.push('/myposts');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
</script>

<style scoped>
#editor-frame 
{
  display: flex;
  justify-content: center;
}

#editor-display 
{
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
}

#title-input 
{
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

#title-input:focus 
{
  outline: none;
}

#post-input 
{
  width: 80%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
}

#post-input:focus 
{
  outline: none;
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

#image-for-post 
{
  width: 80%;
}

#imageInput 
{
  display: none;
}

#insert-image 
{
  width: 22%;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: 20px;
}

.image-preview 
{
  margin: 10px 0px;
}

.image-preview img 
{
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
  object-fit: cover;
}
</style>
