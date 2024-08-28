<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheTestimonialsSection from "@/components/TheTestimonialsSection.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

const projects = ref([]);

const fetchProjectsAndClients = async () => {
  try {
    const projectResponse = await axios.get(
      "http://127.0.0.1:8000/api/projects/",
    );
    projects.value = projectResponse.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const starArray = (rating) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};

onMounted(() => {
  fetchProjectsAndClients();
});
</script>
<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main class="my-4">
    <div class="container mt-4">
      <h1>Projects</h1>
    </div>

    <div class="row row-cols-1 gx-0 gy-5">
      <section v-for="(project, index) in projects" :key="index" class="col">
        <div class="container">
          <div
            class="row row-cols-1 row-cols-md-2 g-5 align-items-center py-3 py-md-5"
            :class="[index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse']"
          >
            <div class="col">
              <img
                :src="project.image"
                class="card-img-top"
                :alt="project.name"
              />
            </div>
            <div class="col">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: project.completion + '%' }"
                  :aria-valuenow="project.completion"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ project.completion }}%
                </div>
              </div>
              <p>
                <strong>Completion:</strong>
                <span>{{ project.completed }}</span> /
                <span>{{ project.total }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <the-testimonials-section />
  </main>
  <the-footer />
</template>
