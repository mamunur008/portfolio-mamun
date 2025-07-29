<template>
  <section id="resume" style="background-color: #f9f9f9">
    <div class="container">
      <h2 class="section-title">My Resume</h2>
      <SearchBar v-model="searchTerm" v-if="false" />
      <div class="resume-container">
        <div class="resume-icon">
          <i class="fas fa-file-pdf"></i>
        </div>
        <p>Download my comprehensive resume to learn more about my professional journey, technical expertise, and accomplishments.</p>
        <a href="#" class="resume-download"> <i class="fas fa-download"></i> Download Resume (PDF) </a>
      </div>
    </div>
  </section>
  <!-- <div id="resume" class="py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Resume</h2>
    

    <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div class="flex justify-between items-start mb-8">
        <div>
          <h1 class="text-4xl font-bold">Md. Mamunur Rashid</h1>
          <p class="text-xl text-primary mt-2">Software Architect & Developer</p>
        </div>
        <div class="text-right">
          <p>mamun@example.com</p>
          <p>+1 (123) 456-7890</p>
          <p>linkedin.com/in/mamun</p>
          <p>github.com/mamun</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-2 mb-4">Summary</h2>
        <p>Seasoned Software Architect with 21+ years of experience designing and implementing scalable solutions. Expertise in modern tech stacks, cloud architecture, and performance optimization. Proven track record in mentoring teams and delivering complex enterprise applications.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-2 mb-4">Experience</h2>
        <div v-for="(job, index) in filteredExperience" :key="index" class="mb-6">
          <div class="flex justify-between">
            <h3 class="text-xl font-semibold">{{ job.position }}</h3>
            <span class="font-medium">{{ job.duration }}</span>
          </div>
          <p class="text-primary">{{ job.company }}</p>
          <ul class="list-disc list-inside mt-2">
            <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="(skill, index) in filteredSkills" :key="index" class="flex items-center">
            <span class="font-medium w-32">{{ skill.name }}:</span>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-primary h-2.5 rounded-full" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
        <div v-for="(edu, index) in filteredEducation" :key="index" class="mb-4">
          <div class="flex justify-between">
            <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
            <span>{{ edu.year }}</span>
          </div>
          <p class="text-primary">{{ edu.institution }}</p>
        </div>
      </div>

      <div class="mt-10 text-center">
        <button class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition">Download Full Resume</button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");

// Reusing data from other components for the resume
const experience = [
  {
    position: "Lead Software Architect",
    company: "Tech Innovations Inc.",
    duration: "2018 - Present",
    achievements: ["Designed scalable microservices architecture reducing latency by 40%", "Implemented CI/CD pipeline improving deployment frequency by 70%", "Mentored 15+ developers in advanced software design patterns"],
  },
  // Other experience items...
];

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  // Other skills...
];

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "Stanford University",
    year: "2001 - 2003",
  },
  // Other education items...
];

// Filter functions for resume sections
const filteredExperience = computed(() => filterItems(experience, searchTerm.value));
const filteredSkills = computed(() => filterItems(skills, searchTerm.value));
const filteredEducation = computed(() => filterItems(education, searchTerm.value));

function filterItems(items, term) {
  if (!term) return items;
  const lowerTerm = term.toLowerCase();
  return items.filter((item) => Object.values(item).some((val) => (Array.isArray(val) ? val.some((arrayItem) => arrayItem.toLowerCase().includes(lowerTerm)) : String(val).toLowerCase().includes(lowerTerm))));
}
</script>
