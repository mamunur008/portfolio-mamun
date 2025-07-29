<!-- <template>
  <div id="projects" class="py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
    <SearchBar v-model="searchTerm" />

    <div class="space-y-6">
      <div v-for="(project, index) in filteredProjects" :key="index" class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold text-primary">{{ project.name }}</h3>
        <p class="text-gray-600 mt-2">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
            {{ tech }}
          </span>
        </div>
        <div class="mt-4 text-sm"><span class="font-medium">Year:</span> {{ project.year }}</div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <section id="projects" style="background-color: #f0f8ff">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-container">
        <div v-for="(project, index) in filteredProjects" :key="index" class="project-card">
          <div class="project-image">
            <img :src="project.img" alt="Project Image" class="w-full h-48 object-cover rounded-t-lg" />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="text-gray-600 mt-2">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-pill">
                {{ tech }}
              </span>
            </div>
            <div class="mt-4 text-sm"><span class="font-medium">Year:</span> {{ project.year }}</div>
            <div class="project-links">
              <a href="https://example.com/project1" class="project-link" target="_blank"> View Project <Icon name="fa6-solid:arrow-up-right-from-square" /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");

const projects = ref([
  {
    name: "Phoenix Web Builder",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    year: 2005,
    description: "A no-code platform enabling users to create database-driven applications without coding.",
    technologies: ["ASP.NET", "Vue.js", "SQL Server"],
  },
  {
    name: "SalesTracing Platform",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    year: 2022,
    description: "A business intelligence system that helps organizations maximize revenue through intelligent automation.",
    technologies: ["ASP.NET", "Vue.js", "SQL Server"],
  },
  {
    name: "iScanner Solution",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    year: 2005,
    description: "A comprehensive document processing system with OCR capabilities for text extraction and full-text search.",
    technologies: ["LEADTOOLS OCR", "Lucene.NET", "iTextSharp"],
  },
  {
    name: "Healthcare Management System",
    year: 2003,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
    description: "A comprehensive system for managing patient records, appointments, and billing.",
    technologies: ["Angular", "Java", "PostgreSQL"],
  },
]);

const filteredProjects = computed(() => {
  if (!searchTerm.value) return projects.value;
  const term = searchTerm.value.toLowerCase();
  return projects.value.filter((project) => project.name.toLowerCase().includes(term) || project.description.toLowerCase().includes(term) || project.technologies.some((tech) => tech.toLowerCase().includes(term)));
});
const head = computed(() => ({
  title: "Projects - Mamunur Rashid",
  meta: [
    {
      name: "Phonex Web Builder",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      year: 2023,
      description: "A no-code platform enabling users to create database-driven applications without coding.",
      technologies: ["ASP.NET", "Vue.js", "SQL Server"],
    },
    {
      name: "SalesTracing Platform",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      year: 2023,
      description: "A business intelligence system that helps organizations maximize revenue through intelligent automation.",
      technologies: ["ASP.NET", "Vue.js", "SQL Server"],
    },
    {
      name: "iScanner Solution",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      year: 2023,
      description: "A comprehensive document processing system with OCR capabilities for text extraction and full-text search.",
      technologies: ["LEADTOOLS OCR", "Lucene.NET", "iTextSharp"],
    },
    {
      name: "Healthcare Management System",
      year: 2022,
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      description: "A comprehensive system for managing patient records, appointments, and billing.",
      technologies: ["Angular", "Java", "PostgreSQL"],
    },
  ],
}));
</script>
