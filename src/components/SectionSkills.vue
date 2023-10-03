 <script lang="ts" setup>
  interface Skill {
    title: string;
    level: number;
  }
  
  const skills: Skill[] = [
    {
      title: "Python & Django",
      level: 85,
    },
    {
      title: "Kotlin",
      level: 100,
    },
    {
      title : "Kotlin jetpack compose",
      level : 80,
    },
    {
      title : "Kotlin Ktor & Sping",
      level : 70,
    },

    {
      title: "Relational Databases",
      level: 100,
    },
    {
      title: "HTML5 & CSS",
      level: 100,
    },
    {
      title: "Express Js",
      level: 75,
    },
    {
      title: "Vue Js",
      level: 80,
    },
    {
      title : "React Js",
      level : 70,
    },
    {
      title: "Golang",
      level: 60,
    },
    {
      title: "Sketch & Adobe Express",
      level: 100,
    },
  ];
  
  </script>


<template>
    <section class="skills-section section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fa-solid fa-rocket"></i></span>
        Skills &amp; Proficiency
      </h2>
      <div class="skillset">
        <div class="item" v-for="skill in skills" :key="skill.title">
          <h3 class="level-title">{{ skill.title }}</h3>
          <div class="progress level-bar">
            <div
              class="progress-bar theme-progress-bar"
              role="progressbar"
              :style="{ width: skill.level + '%' }"
              :aria-valuenow="skill.level"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
 
  
  