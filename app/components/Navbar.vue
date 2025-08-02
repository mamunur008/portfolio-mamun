<script setup>
const toggleMenu = () => {
  document.querySelector(".nav-menu").classList.toggle("active");
};

// Remove active class when navigating in mobile view
const closeMobileMenu = () => {
  document.querySelector(".nav-menu").classList.remove("active");
};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <NuxtLink to="/" class="logo">MAMUNUR RASHID<span>.</span></NuxtLink>
        <!-- <Img src="/images/mamun-icon.svg" width="50px" style="display: inline !important" /> -->
        <ul class="nav-menu">
          <li><NuxtLink to="/" @click="closeMobileMenu">Home</NuxtLink></li>
          <li><NuxtLink to="/skills" @click="closeMobileMenu">Skills</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="closeMobileMenu">Projects</NuxtLink></li>
          <li><NuxtLink to="/experience" @click="closeMobileMenu">Experience</NuxtLink></li>
          <li><NuxtLink to="/education" @click="closeMobileMenu">Education</NuxtLink></li>
          <li><NuxtLink to="/resume" @click="closeMobileMenu">Resume</NuxtLink></li>
        </ul>
        <div class="mobile-toggle" @click="toggleMenu">
          <Icon name="fa6-solid:bars" />
        </div>
      </nav>
    </div>
  </header>
</template>
