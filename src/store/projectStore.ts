import { defineStore } from 'pinia';
import {  getProjectWithStars } from '@/projects/viewmodel';
import type { Project } from '@/projects/viewmodel';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [] as Project[],
  }),
  actions: {
    async fetchProjects() {
      try {
        const projects = await new Promise<Project[]>((resolve) => {
          getProjectWithStars((result: Project[]) => {
            resolve(result);
          });
        });
        this.projects = projects;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
