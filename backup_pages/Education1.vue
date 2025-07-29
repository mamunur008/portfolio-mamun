<!-- <template>
  <div id="education" class="py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Education</h2>
    <SearchBar v-model="searchTerm" />

    <div class="space-y-6">
      <div v-for="(edu, index) in filteredEducation" :key="index" class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
            <p class="text-primary font-medium">{{ edu.institution }}</p>
          </div>
          <span class="text-gray-600">{{ edu.year }}</span>
        </div>

        <div class="mt-4">
          <p class="text-gray-700">{{ edu.description }}</p>
          <div v-if="edu.courses" class="mt-3">
            <h4 class="font-semibold">Key Courses:</h4>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="(course, cIndex) in edu.courses" :key="cIndex" class="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm">
                {{ course }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
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

const education = ref([
  {
    icon: "fa6-solid:graduation-cap",
    degree: "Bachelor in Computer Application",
    institution: "Stanford University",
    year: "1998 - 2001",
    description: "Specialized in database systems and software architecture. Developed strong programming skills and database management expertise.",
    courses: ["Advanced Algorithms", "Cloud Computing", "Distributed Systems", "Software Architecture"],
  },
  {
    icon: "fa6-solid:graduation-cap",
    degree: "HSC in Science",
    institution: "Jessore Board",
    year: "1995 - 1997",
    description: "",
    courses: ["Advanced Algorithms", "Cloud Computing", "Distributed Systems", "Software Architecture"],
  },
  {
    icon: "fa6-solid:graduation-cap",
    degree: "SSC",
    institution: "Jessore Board",
    year: "1995",
    description: "",
    courses: ["Advanced Algorithms", "Cloud Computing", "Distributed Systems", "Software Architecture"],
  },
]);

const filteredEducation = computed(() => {
  if (!searchTerm.value) return education.value;
  const term = searchTerm.value.toLowerCase();
  return education.value.filter((edu) => edu.degree.toLowerCase().includes(term) || edu.institution.toLowerCase().includes(term) || edu.description.toLowerCase().includes(term) || (edu.courses && edu.courses.some((course) => course.toLowerCase().includes(term))));
});
</script>
