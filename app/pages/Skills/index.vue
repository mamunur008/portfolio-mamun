<template>
  <section id="skills">
    <div class="container">
      <h2 class="section-title">Technical Skills</h2>
      <!-- <SearchBar v-model="searchTerm" /> -->
      <div class="skills-container">
        <div v-for="(skill, index) in filteredSkills" :key="index" class="skill-card">
          <div class="skill-icon">
            <Icon :name="skill.icon" />
          </div>
          <h3 class="skill-title">{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
          <ul class="skill-list">
            <li v-for="(subject, sIndex) in skill.subjects" :key="sIndex">{{ subject }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- <div id="skills" class="py-12">
      <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
      <SearchBar v-model="searchTerm" />
  
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(skill, index) in filteredSkills" :key="index" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg">{{ skill.name }}</h3>
          <div class="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-primary h-2.5 rounded-full" :style="{ width: skill.level + '%' }"></div>
          </div>
          <p class="text-sm text-gray-600 mt-1">{{ skill.years }} years</p>
        </div>
      </div>
    </div> -->
</template>

<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");

const skills = ref([
  {
    name: "Frontend Development",
    icon: "fa6-solid:laptop-code",
    description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    level: 95,
    years: 15,
    subjects: ["Vue.js / Angular", "JavaScript", "HTML5 / CSS3 / SASS", "TailwindCSS / Bootstrap", "Responsive Design"],
  },
  {
    name: "Backend Development",
    icon: "fa6-solid:server",
    description: "Designing and implementing robust server-side solutions with optimized performance.",
    level: 90,
    years: 10,
    subjects: ["ASP.NET / C#", "Laravel", "RESTful APIs", "Microservices Architecture", "Database Design"],
  },
  {
    name: "Database Management",
    icon: "fa6-solid:database",
    description: "Implementing efficient data storage and retrieval solutions for various application needs.",
    level: 85,
    years: 12,
    subjects: ["SQL Server", "MySQL", "Database Optimization", "ETL Processes", "Data Modeling"],
  },
  {
    name: "Cloud & DevOps",
    icon: "fa6-solid:cloud",
    description: "Deploying and managing scalable applications in cloud environments with CI/CD pipelines.",
    level: 80,
    years: 8,
    subjects: ["Azure", "AWS", "CI/CD Implementation", "Infrastructure as Code", "Monitoring & Logging"],
  },
  {
    name: "Architecture & Methodologies",
    icon: "fa6-solid:gears",
    description: "Designing scalable systems and implementing efficient development processes.",
    level: 90,
    years: 10,
    subjects: ["System Architecture", "Agile / Scrum", "Design Patterns", "System Integration", "Test-Driven Development", "Performance Optimization", "Technical Leadership"],
  },
  {
    name: "Tools & Libraries",
    icon: "fa6-solid:mobile-screen-button",
    description: "Leveraging modern tools and libraries to enhance development efficiency.",
    level: 85,
    years: 7,
    subjects: ["Git / GitHub", "Visual Studio / VS Code", "LEADTOOLS / Lucene.NET", "SignalR / WebSockets", "ChartJS / Data Visualization", "TELERIK"],
  },
]);

const filteredSkills = computed(() => {
  if (!searchTerm.value) return skills.value;
  return skills.value.filter((skill) => skill.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});
const head = computed(() => ({
  title: "Skills - Mamunur Rashid",
}));
</script>
