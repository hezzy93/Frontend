<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Terms',
});
</script>

<template>
    <div id="terms-frame">
        <div id="terms-display" >
            <h2 style="font-size:70px; margin-bottom:10px;">Chatter's Terms of Use</h2>
            <p>
                We are currently working with our lawyers to draft something that represents us, as well as you (our beloved user). <br>
                You can be certain that at the end of the day, our Terms of Use will be reasonable and fair to all parties involved. <br>
                In the meantime, we urge you to use our services in such a way that makes the web a better place. <br>
                Thanks
            </p>
        </div>
    </div>
</template>

<style scoped>
#terms-frame 
{
    padding: 120px 40px;
    width: 100%;
    display: flex;
    justify-content: center;

    font-size: 18px;
}

#terms-display 
{
    width: 50%;
}
</style>
