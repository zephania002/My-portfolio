
  <script lang="ts" setup>
  const interests: string[] = ['movies', 'Tech talks', 'Basketball'];
  </script>


<template>
    <div class="interests-container container-block">
      <h2 class="container-block-title">Interests</h2>
      <ul class="list-unstyled interests-list">
        <li v-for="interest in interests" :key="interest">{{ interest }}</li>
      </ul>
    </div>
  </template>
  
  