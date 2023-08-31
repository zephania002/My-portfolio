<script lang="ts" setup>
interface Contact {
  email: string;
  phone: string;
  linkedin: Social;
  github: Social;
  twitter: Social;
}

interface Social{
    userName: string;
    link: string;
}

const contact: Contact = {
  email: "stephenwanjala145@gmail.com",
  phone: "+254723441923",
  linkedin: {
    userName: "Stephen Wanjala",
    link: "https://www.linkedin.com/in/wanjalastephen5/",
  },
  github: {
    userName: "stephenWanjala",
    link: "https://github.com/stephenWanjala",
  },
  twitter: {
    userName: "@Wanjalastephen5",
    link: "https://twitter.com/wanjalastephen5",
  },
};



const phoneLink = `tel:${contact.phone}`;
</script>




<template>
    <div class="contact-container container-block">
      <ul class="list-unstyled contact-list">
        <li class="email">
          <i class="fa-solid fa-envelope"></i
          ><a :href="'mailto:' + contact.email" target="_blank">{{contact.email}}</a>
        </li>
        <li class="phone">
          <i class="fa-solid fa-phone"></i
          ><a :href="phoneLink">{{ contact.phone }}</a>
        </li>
        <li class="linkedin">
          <i class="fa-brands fa-linkedin-in"></i
          ><a :href="contact.linkedin.link" target="_blank">{{ contact.linkedin.userName }}</a>
        </li>
        <li class="github">
          <i class="fa-brands fa-github"></i
          ><a :href="contact.github.link" target="_blank">{{ contact.github.userName }}</a>
        </li>
        <li class="twitter">
          <i class="fa-brands fa-twitter"></i
          ><a :href="contact.twitter.link" target="_blank">{{contact.twitter.userName }}</a>
        </li>
      </ul>
    </div>
  </template>
  
 
  
 
  