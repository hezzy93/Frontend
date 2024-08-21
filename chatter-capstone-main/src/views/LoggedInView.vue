<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MyPosts from './MyPosts.vue';
import ForYouFeed from './ForYouFeed.vue';

export default defineComponent({
    name: 'LoggedIn',
    components: {
        MyPosts,
        ForYouFeed,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const activeFeed = ref('forYou');
        const selectedInterests = ref<string[]>([]);

        const handleNavigationClick = (feedType: string) => {
            activeFeed.value = feedType;
        };

        // Watch for route changes to update selected interests
        watch(() => route.query.selectedInterests, (newValue) => {
            if (newValue) {
                selectedInterests.value = JSON.parse(newValue as string);
                activeFeed.value = 'interests';  // Show the interests feed by default
            }
        }, { immediate: true });

        return {
            activeFeed,
            selectedInterests,
            handleNavigationClick,
        };
    }
});
</script>


<template>
    <div id="loggedin-frame">
        <div id="loggedin-display">
            <div id="userfeed">
                <div id="userfeed-nav">
                    <RouterLink to="/interests">
                        <div 
                            id="feed" 
                            @click="handleNavigationClick('interests')" 
                            :class="{ active: activeFeed === 'interests' }"
                        >
                            <i class="fas fa-plus"></i>
                        </div>
                    </RouterLink>
                    <div 
                        id="feed" 
                        @click="handleNavigationClick('forYou')" 
                        :class="{ active: activeFeed === 'forYou' }"
                    >
                        For You
                    </div>
                    <div 
                        id="feed" 
                        @click="handleNavigationClick('myPosts')" 
                        :class="{ active: activeFeed === 'myPosts' }"
                    >
                        My Posts
                    </div>

                    <!-- Dynamically add selected interests as part of the nav -->
                    <div 
                        v-for="(interest, index) in selectedInterests" 
                        :key="index" 
                        id="feed" 
                        @click="handleNavigationClick(interest)"
                        :class="{ active: activeFeed === interest }"
                    >
                        {{ interest }}
                    </div>
                </div>
                <div id="article-feed">
                    <MyPosts v-if="activeFeed === 'myPosts'" />
                    <ForYouFeed v-if="activeFeed === 'forYou'" />
                    <!-- Add content or components based on selected interest -->
                </div>
            </div>
            <hr style="margin:50px">
            <div id="sidebar" style="width:30%;">
                <div id="footer" style="display:flex; width:100%; justify-content:center; align-items:center; gap:50px; font-size:12px;"> 
                    <RouterLink to="/about"> <p>About </p> </RouterLink>
                    <RouterLink to="/contact"> <p>Contact </p> </RouterLink>
                    <RouterLink to="/terms"> <p>Terms </p> </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
#loggedin-frame 
{
    padding: 120px 40px;
    width: 100%;
}

#loggedin-display 
{
    width: 100%;
    display: flex;
}

#userfeed 
{
    width: 60%;
}

#userfeed-nav 
{
    display: flex;
    flex-wrap: wrap;
}

#feed 
{
    background-color: whitesmoke;
    padding: 8px;
    margin: 8px;

    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}

#feed.active 
{
    background-color: #d4edda; 
    color: #371557;            
    
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.055); 
}

#feed i {
    margin-right: 2px;    
}
</style>
