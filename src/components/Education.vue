<script lang="ts" setup>
interface Education {
  degree: string;
  school: string;
  duration: string;
}

const educations: Education[] = [
  {
    degree: "Bsc. Information Technolgy",
    school: "Maseno University",
    duration: "2020 - present",
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    school: "St Peter's Sang'alo High School",
    duration: "2015 - 2019",
  },
];
</script>





<template>
    <div class="education-container container-block">
      <h2 class="container-block-title">Education</h2>
  
      <div class="item" v-for="education in educations" :key="education.degree">
        <h4 class="degree">{{ education.degree }}</h4>
        <h5 class="meta">{{ education.school }}</h5>
        <div class="time">{{ education.duration }}</div>
      </div><!--//item-->
    </div>
  </template>
  

  