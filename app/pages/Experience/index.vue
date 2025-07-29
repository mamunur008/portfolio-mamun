<!-- <template>
  <div id="experience" class="py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Experience</h2>
    <SearchBar v-model="searchTerm" />

    <div class="space-y-8">
      <div v-for="(job, index) in filteredExperience" :key="index" class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-xl font-semibold">{{ job.position }}</h3>
            <p class="text-primary font-medium">{{ job.company }}</p>
          </div>
          <span class="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
            {{ job.duration }}
          </span>
        </div>

        <p class="mt-4 text-gray-700">{{ job.description }}</p>

        <div class="mt-4">
          <h4 class="font-semibold">Key Achievements:</h4>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <section id="skills">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <SearchBar v-model="searchTerm" v-if="false" />
      <div class="timeline">
        <div v-for="(job, index) in filteredExperience" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">{{ job.duration }}</div>
            <h3 class="timeline-title">{{ job.position }}</h3>
            <p class="timeline-desc">{{ job.company }}</p>
            <ul class="skill-list">
              <li v-for="(achievement, ind) in job.achievements" :key="ind">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");

const experience = ref([
  {
    position: "Product Manager & Tech Lead",
    company: "Dollines Technologies, Dhaka",
    duration: "Apr 2024 - Present",
    description: "Leading architecture design for enterprise-level applications and mentoring development teams.",
    achievements: ["Lead cross-functional teams to deliver innovative SaaS products", "Implemented CI/CD pipeline improving deployment frequency", "Architected microservices solutions"],
  },
  {
    position: "Senior Technical Manager",
    company: "Coordinate, Dhaka.",
    duration: "Nov 2022 - May 2024",
    description: "Developed and maintained high-traffic web applications for financial sector clients.",
    achievements: ["Directed technology strategy for sales automation platform", "Designed BI features to reduce processing time ", "Managed team of 10 developers delivering key features"],
  },
  {
    position: "Senior Technical Manager",
    company: "JustGo (Azolve), Dhaka",
    duration: "Jan 2005 - Oct 2022",
    description: "Developed custom web applications for various clients across different industries.",
    achievements: ["Oversaw development of no-code web application builder", "Managed $2M+ annual technology budget", "Established offshore development center across time zones"],
  },
  {
    position: "Programmer",
    company: "Grameen Software Limited, Dhaka",
    duration: "Jan 2003 - Dec 2004",
    description: "Started career developing and maintaining websites for big company Grameen Software Ltd.",
    achievements: ["Developed ERP solutions for textile manufacturing", "Built web applications using .NET and JavaScript", "Implemented TDD practices"],
  },
]);

const filteredExperience = computed(() => {
  if (!searchTerm.value) return experience.value;
  const term = searchTerm.value.toLowerCase();
  return experience.value.filter((job) => job.position.toLowerCase().includes(term) || job.company.toLowerCase().includes(term) || job.description.toLowerCase().includes(term) || job.achievements.some((achievement) => achievement.toLowerCase().includes(term)));
});
</script>
