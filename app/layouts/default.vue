<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    // Scroll effect for header
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
        header.style.background = "rgba(255, 255, 255, 0.95)";
      } else {
        header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
        header.style.background = "white";
      }
    });
  },
};
</script>

<style>
/* Import global CSS */
/* @import "~/assets/css/main.css"; */
</style>
