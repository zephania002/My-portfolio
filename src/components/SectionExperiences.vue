  
<script lang="ts" setup>
interface Experience {
  jobTitle: string;
  time: string;
  company: string;
  companyLink: string;
  details: string[];
}

interface Project {
  title: string;
  link: string;
  tagline: string;
}

const experiences: Experience[] = [
  {
    jobTitle: "Information Technology Attachee",
    time: "May 2023 - July 2023",
    company: "Kibabii University",
    companyLink: "http://www.kibu.ac.ke",
    details: [
      "Configuring managed switches, implementing VLANs, and securing network communications through SSH and Telnet protocols.",
      "Performing general computer maintenance tasks, including hardware upgrades, memory enhancement, and installation of operating systems and software applications.",
      "Installing and configuring ABUNO ERP software, ensuring seamless operation and maintaining compliance with updates and patches.",
      "Designing and executing scripts for database automation, data normalization, and denormalization, streamlining data management processes.",
      "Managing and configuring IP cameras, editing captured videos for presentations, and maintaining the security and integrity of video evidence.",
      "Providing technical support to students and staff, troubleshooting software-related issues, and offering guidance on using software applications effectively.",
      "Collaborating with cross-functional teams to enhance IT infrastructure, including transitioning from unmanaged to managed switches and optimizing access points and point-to-point radios.",
      "Assisting in the training of staff to effectively use the ERP software and troubleshoot any issues they encountered.",
      "Developing software solutions for clients, addressing their specific needs and contributing to the department's services."
    ],
  },
];



const projectsIntro: string = "Work in progress";

</script>
  
 
  
<template>
  <div>
    <section class="section experiences-section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fa-solid fa-briefcase"></i></span>
        Experiences
      </h2>
      <div class="item" v-for="experience in experiences" :key="experience.jobTitle">
        <div class="meta">
          <div class="upper-row">
            <h3 class="job-title">{{ experience.jobTitle }}</h3>
            <div class="time">{{ experience.time }}</div>
          </div><!--//upper-row-->
          <div class="company">
            <a :href="experience.companyLink" target="_blank" rel="noopener noreferrer">{{ experience.company }}</a>
          </div>
        </div><!--//meta-->
        <div class="details">
          <p v-for="detail in experience.details" :key="detail">{{ detail }}</p>
        </div><!--//details-->
      </div><!--//item-->
    </section><!--//section-->

    <!-- <section class="section projects-section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fa-solid fa-archive"></i></span>
        Projects
      </h2>
      <div class="intro">
        <p>{{ projectsIntro }}</p>
      </div>//intro
     // <div class="item" v-for="project in projects" :key="project.title">
        <span class="project-title">
          <a :href="project.link" target="_blank">{{ project.title }}</a>
        </span>
        - <span class="project-tagline">{{ project.tagline }}</span>
      </div>//item
    </section> 
    //section-->
  </div>
</template>