<script setup lang="ts">
import SectionSkills from './SectionSkills.vue';
import  SideBarVue from './SideBar.vue';
import SectionSummary from './SectionSummary.vue';
import SectionExperiences from './SectionExperiences.vue';
import Projects from './Projects.vue';

</script>
<template>
    <div class="wrapper mt-lg-5">
        <SideBarVue />
        <div class="main-wrapper">
            <SectionSummary/>
    
            <SectionExperiences/>
            <Projects/>
            
            <SectionSkills />

        </div>


    </div>
</template>