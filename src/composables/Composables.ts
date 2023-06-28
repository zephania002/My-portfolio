 export  interface Project {
    title: string;
    tagline: string;
    link: string;
  }

  
export  interface Skill {
    levelTitle: string;
    progress: number; // Range: 0-100
  }


  export  interface Experience {
    jobTitle: string;
    company: string;
    time: string;
    details: string[];
  }



  export const experiences: Experience[] = [
    {
      jobTitle: "Mobile Developer",
      company: "Blinx Corporation",
      time: "2022 - Present",
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
  



  const skills: Skill[] = [
    {
      levelTitle: "Python & Django",
      progress: 60,
    },
    {
      levelTitle: "Kotlin",
      progress: 100,
    },
    {
      levelTitle: "Relational Databases",
      progress: 100,
    },
    {
      levelTitle: "HTML5 & CSS",
      progress: 100,
    },
    {
      levelTitle: "Express Js",
      progress: 70,
    },
    {
      levelTitle: "Sketch & Adobe Express",
      progress: 100,
    },
  ];



  const projects: Project[] = [
    {
      title: "No-shame",
      tagline: "An application to monitor and track women's menstrual cycle.",
      link: "https://github.com/stephenWanjala/No-shame",
    },
    {
      title: "msu-gdsc",
      tagline: "An application for the Maseno Google Developer Student Club.",
      link: "https://github.com/stephenWanjala/GdSc_msu",
    },
    {
      title: "Medihelp",
      tagline: "An application to link users/patients to healthcare professionals.",
      link: "https://github.com/stephenWanjala/medi-help",
    },
  ];