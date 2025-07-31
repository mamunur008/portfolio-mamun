<template>
  <section id="education" style="background-color: #f9f9f9">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <SearchBar v-model="searchTerm" v-if="false" />
      <div class="education-container">
        <div v-for="(edu, index) in filteredEducation" :key="index" class="education-card">
          <div class="education-icon">
            <Icon :name="edu.icon" />
          </div>
          <div class="education-content">
            <h3 class="education-degree">{{ edu.degree }}</h3>
            <div class="education-meta">
              <span>{{ edu.institution }}</span>
              <span>{{ edu.year }}</span>
            </div>

            <p class="education-description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");
useHead({ title: "Education - Mamunur Rashid" });
const education = ref([
  {
    icon: "fa6-solid:graduation-cap",
    degree: "Bachelor in Computer Application",
    institution: "University of Madras (India)",
    year: "1998 - 2001",
    description: "Developed strong programming skills and database management expertise.",
    courses: ["Advanced Algorithms", "Cloud Computing", "Distributed Systems", "Software Architecture"],
  },
  {
    icon: "fa6-solid:graduation-cap",
    degree: "HSC (Science)",
    institution: "Jessore Board",
    year: "1995 - 1997",
    description: "",
    courses: ["Science", "Mathematics", "English", "Bangla"],
  },
  {
    icon: "fa6-solid:graduation-cap",
    degree: "SSC",
    institution: "Jessore Board",
    year: "1995",
    description: "",
    courses: ["Science", "Mathematics", "English", "Bangla"],
  },
]);

const filteredEducation = computed(() => {
  if (!searchTerm.value) return education.value;
  const term = searchTerm.value.toLowerCase();
  return education.value.filter((edu) => edu.degree.toLowerCase().includes(term) || edu.institution.toLowerCase().includes(term) || edu.description.toLowerCase().includes(term) || (edu.courses && edu.courses.some((course) => course.toLowerCase().includes(term))));
});
</script>
