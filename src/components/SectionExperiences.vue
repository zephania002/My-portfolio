  
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
      jobTitle: "Mobile Developer",
      time: "2022 - Present",
      company: "Blinx Corporation",
      companyLink: "http://www.blinx.co.ke",
      details: [
        "Devised documentation for each app, detailing operation aspects, functions, capabilities, and features.",
        "Designed user interfaces that engaged multiple senses and produced immersive experiences.",
        "Supported team members with one-on-one and group trainings.",
        "Provided dedicated support and timely issue resolution to clients following successful app launch.",
        "Used specific code versioning tools to manage and implement changes to programs.",
        "Incorporated offline storage, performance tuning, and threading into apps for seamless use.",
      ],
    },
  ];
  
  const projects: Project[] = [
    {
      title: "No-shame",
      link: "https://github.com/stephenWanjala/No-shame",
      tagline: "An application to monitor and track women's menstrual cycle.",
    },
    {
      title: "msu-gdsc",
      link: "https://github.com/stephenWanjala/GdSc_msu",
      tagline: "An application for the Maseno Google Developer Student Club.",
    },
    {
      title: "Medihelp",
      link: "https://github.com/stephenWanjala/medi-help",
      tagline: "An application to link users/patients to healthcare doctors and provide medical support or advice.",
    },
    // Add more projects as needed
  ];
  
  const projectsIntro: string = "Currently ongoing projects";
  
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
  
      <section class="section projects-section">
        <h2 class="section-title">
          <span class="icon-holder"><i class="fa-solid fa-archive"></i></span>
          Projects
        </h2>
        <div class="intro">
          <p>{{ projectsIntro }}</p>
        </div><!--//intro-->
        <div class="item" v-for="project in projects" :key="project.title">
          <span class="project-title">
            <a :href="project.link" target="_blank">{{ project.title }}</a>
          </span>
          - <span class="project-tagline">{{ project.tagline }}</span>
        </div><!--//item-->
      </section>
    </div>
  </template>