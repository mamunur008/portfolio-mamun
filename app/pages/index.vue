<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Hi, I am <span>Md. Mamunur Rashid</span></h1>
          <p>A seasoned Software Architect and Developer with 21+ years of progressive experience, I've navigated the evolving landscape of technology, consistently delivering cutting-edge solutions. My expertise spans diverse tech stacks and complex system designs, with a passion for optimizing performance and scalability. I thrive on solving intricate technical challenges and mentoring teams to achieve excellence in software craftsmanship.</p>
          <div class="hero-btns">
            <NuxtLink to="/projects" @click="closeMobileMenu" class="btn btn-primary">View My Work</NuxtLink>
            <NuxtLink to="/contact" @click="closeMobileMenu" class="btn btn-secondary">Contact Me</NuxtLink>
          </div>
        </div>
        <div class="hero-image">
          <!-- <img src="~/assets/images/mamun1.jpeg" alt="Md. Mamunur Rashid" /> -->
          <NuxtImg src="/images/mamun11.jpg" :placeholder="[50, 25, 75, 5]" />
          <div class="experience-badge">21+ Years Experience</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const closeMobileMenu = () => {
  document.querySelector(".nav-menu").classList.remove("active");
};

const head = computed(() => ({
  title: "Md. Mamunur Rashid - Senior Technical Manager",
  meta: [
    { name: "description", content: "Md. Mamunur Rashid is a seasoned Software Architect and Developer with over 21 years of experience in delivering cutting-edge solutions." },
    { name: "keywords", content: "Software Architect, Developer, Tech Lead, Mamunur Rashid, Portfolio" },
  ],
}));
useHead(head);
</script>
