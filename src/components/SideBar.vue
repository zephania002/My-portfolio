<script setup lang="ts">
import Education from './Education.vue';
import Hobbies from './Hobbies.vue'
import Languages from './Languages.vue';
import  Socials from './Socials.vue';
</script>
<template>
<div class="sidebar-wrapper">
            <div class="profile-container">
                <img class="profile" src="../assets/images/profile.png" alt="profile image" />
                <h1 class="name">Wanjala Stephen</h1>
                <h3 class="tagline">Junior Android Developer</h3>
            </div><!--//profile-container-->
            
            <Socials />

            <Education />
            
            <Languages />
            
          
        <Hobbies />            
       
</div>

</template>

<style scoped></style>
