<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Recommended',
    setup() {
        const techFields = [
            'Mobile Development',
            'UI Design',
            'UX Design',
            'Project Management',
            'Cybersecurity',
            'Game Development',
        ];

        const selectedInterests = ref<string[]>([]);
        const router = useRouter();

        const handleInterestClick = (interest: string) => {
            selectedInterests.value = selectedInterests.value.includes(interest)
                ? selectedInterests.value.filter(item => item !== interest)
                : [...selectedInterests.value, interest];
        };

        const handleSeeMoreTopics = () => {
            router.push({ path: '/loggedin/interests', query: { selectedInterests: JSON.stringify(selectedInterests.value) } });
        };

        return {
            techFields,
            selectedInterests,
            handleInterestClick,
            handleSeeMoreTopics,
        };
    },
});
</script>

<template>
    <div id="interests-frame">
        <h4 style="margin-bottom: 16px;">Recommended Topics</h4>
        <div id="interests-list">
            <div 
                v-for="(field, index) in techFields"
                :key="index"
                id="interest-item"
                :style="{
                    backgroundColor: selectedInterests.includes(field) ? '#d3f8d3' : '',
                    cursor: 'pointer',
                    padding: '10px',
                    borderRadius: '5px',
                    margin: '5px'
                }"
                @click="handleInterestClick(field)"
            >
                {{ field }}
            </div>
        </div>
        
        <div v-if="selectedInterests.length > 0" id="selected-interests" style="margin-top: 20px;">
            <h4>Your Interests:</h4>
            <ul style="display: flex; justify-content: center; gap: 20px; align-self: center; list-style: none; margin-top: 10px;">
                <li v-for="(interest, index) in selectedInterests" :key="index">{{ interest }}</li>
            </ul>
        </div>

        <div style="display: flex; justify-content: center;">
            <div 
                @click="handleSeeMoreTopics"
                style="color: green; margin-top: 20px; padding: 10px 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.055); cursor: pointer;">
                <p>See more topics</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#interests-frame {
    padding: 20px;
}

#interests-list {
    display: flex;
    flex-wrap: wrap;
}

#interest-item {
    background-color: #f0f0f0;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
}
</style>
