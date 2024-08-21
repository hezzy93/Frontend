<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
    name: 'ForYouFeed',
    setup() {
        const articles = ref<Array<{ title: string, link: string, description: string, image: string }>>([]);

        const fetchArticles = async () => {
            try {
                const response = await fetch('https://rss.app/feeds/VGqfI9muYR8aJub8.xml');
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'application/xml');
                
                const items = xml.querySelectorAll('item');
                const fetchedArticles = Array.from(items).map(item => {
                    const imageElement = item.querySelector('image');
                    const image = imageElement ? imageElement.textContent || '' : '';

                    return {
                        title: item.querySelector('title')?.textContent || 'No Title',
                        link: item.querySelector('link')?.textContent || '#',
                        description: item.querySelector('description')?.textContent || 'No Description',
                        image: image, // Extract the image URL
                    };
                });
                
                articles.value = fetchedArticles;
            } catch (error) {
                console.error('Error fetching RSS feed:', error);
            }
        };

        onMounted(() => {
            fetchArticles();
        });

        return {
            articles,
        };
    },
});
</script>

<template>
    <div>
        <div v-for="(article, index) in articles" :key="index" class="article">
            <h2>{{ article.title }}</h2>
            
            <img v-if="article.image" :src="article.image" alt="Article Image" class="article-image" />
            
            <p v-html="article.description"></p>
            <a :href="article.link" target="_blank" rel="noopener noreferrer"><b>Read more</b></a>
        </div>
    </div>
</template>

<style scoped>
.article {
    margin-bottom: 20px;
}

.article h2 {
    margin-bottom: 10px;
}

.article-image {
    width: 150px;
    height: auto;
    margin-bottom: 10px;
}
</style>
