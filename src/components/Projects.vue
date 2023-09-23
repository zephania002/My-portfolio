<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type {Project} from "@/projects/viewmodel"
import { getImageUrl, openLink } from '@/projects/viewmodel';
import { useProjectStore } from '@/store/projectStore';
const projectStore = useProjectStore(); // Initialize the Pinia store

// Define a computed property to access the projects
const projects = ref<Project[]>([]);
const startString = (project: Project) => {
  return parseInt(project.stars )=== 1 ? '1 star' : `${project.stars} stars`;
}
onMounted(async () => {
  // Dispatch an action to fetch the projects
  await projectStore.fetchProjects();
  projects.value = projectStore.projects;
});

</script>

<template>
  <div class="container mt-4">
    <h2 class="section-title">
        <span class="icon-holder"><i class="fa-solid fa-archive"></i></span>
        Projects
      </h2>
      
    <div class="row">
      <div class="card-container">
        <div v-for="project in projects" :key="project.name" class="card">
          <!-- Card content -->
          <img
            :src="getImageUrl(project.image)"
            class="card-img-top img-fluid"
            alt="Project Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text mt-3 text-start "><strong>Tags:</strong> [{{ project.tags.join(', ') }}]</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div class="d-flex justify-content-center "> <!-- Center alignment wrapper -->
                <p class=" m-2 font-lg"> {{ startString(project) }} </p>
                <p class=" m-2 font-lg"> {{ project.forks }} forks</p>
              </div>
             
              <button class="btn btn-outline-secondary" @click="openLink(project.url)">
                Source <i class="bi bi-github ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default to single column on small screens */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on screens wider than 768px */
  }

  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Define a fixed size for images */
.card-img-top {
  width: 100%; /* Adjust the width as needed */
  height: 200px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain image aspect ratio and cover container */
}
</style>

