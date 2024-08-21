<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Interests',
    setup() {
        const techFields = [
            'Artificial Intelligence',
            'Machine Learning',
            'Web Development',
            'Mobile Development',
            'UI Design',
            'UX Design',
            'FrontEnd Engineering',
            'BackEnd Engineering',
            'Project Management',
            'Data Science',
            'Cybersecurity',
            'Blockchain',
            'Internet of Things (IoT)',
            'Cloud Computing',
            'Augmented Reality (AR)',
            'Virtual Reality (VR)',
            'DevOps',
            'Game Development',
            'Robotics',
            'Big Data',
            'Graphic Design',
            'Software Engineering',
            'Quantum Computing'
        ];

        const selectedInterests = ref<string[]>([]);
        const router = useRouter();

        const handleInterestClick = (interest: string) => {
            if (selectedInterests.value.includes(interest)) {
                selectedInterests.value = selectedInterests.value.filter(item => item !== interest);
            } else {
                selectedInterests.value.push(interest);
            }
        };

        const handleBackToFeed = () => {
            router.push({ path: '/loggedin', query: { selectedInterests: JSON.stringify(selectedInterests.value) } });
        };

        return {
            techFields,
            selectedInterests,
            handleInterestClick,
            handleBackToFeed
        };
    }
});
</script>

<template>
    <div id="interests-frame">
        <h3 style="margin-bottom: 16px;">Tell us more about you</h3>
        <div id="interests-list">
            <div 
                v-for="(field, index) in techFields" 
                :key="index" 
                id="interest-item" 
                :class="{ selected: selectedInterests.includes(field) }"
                @click="handleInterestClick(field)"
            >
                {{ field }}
            </div>
        </div>
        
        <div v-if="selectedInterests.length > 0" id="selected-interests-feedback" style="margin-top: 20px;">
            <h4>Your Interests:</h4>
            <ul style="display: flex; justify-content: center; gap: 20px; list-style: none; margin-top: 10px;">
                <li v-for="(interest, index) in selectedInterests" :key="index">{{ interest }}</li>
            </ul>
        </div>

        <div style="display: flex; justify-content: center;">
            <div 
                id="finish-post-btn"
                @click="handleBackToFeed"
                style="width: 120px; margin-top: 20px; padding: 10px 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); cursor: pointer;"
            >
                <p>Back to Feed</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#interests-frame 
{
    padding: 150px 40px;
    text-align: center;
}

#interests-list 
{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
}

#interest-item {
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#interest-item:hover {
    background-color: #dcdcdc;
}

#interest-item.selected {
    background-color: #d4edda;
    border-color: #c3e6cb;
}

#selected-interests-feedback {
    margin-top: 20px;
}

#selected-interests-feedback h4 {
    margin-bottom: 10px;
}

#selected-interest-item {
    padding: 5px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5px;
}
</style>
