<script setup lang="ts">
import SectionSkills from './SectionSkills.vue';
import  SideBarVue from './SideBar.vue';
import SectionSummary from './SectionSummary.vue';
import SectionExperiences from './SectionExperiences.vue';

</script>
<template>
    <div class="wrapper mt-lg-5">
        <SideBarVue />
        <div class="main-wrapper">
            <SectionSummary/>
    
            <SectionExperiences/>
            
            <SectionSkills />

        </div>


    </div>
</template>