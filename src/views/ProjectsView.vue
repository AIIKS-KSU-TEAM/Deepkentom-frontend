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
  <header>
    <the-navbar />
  </header>
  <main>
    <div class="container mt-4">
      <h2 class="text-center">Portfolio</h2>
      <hr class="bg-warning mx-auto mb-5" style="width: 50px" />
      <div class="row">
        <!-- Project Details -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-md-6 mb-4"
        >
          <div class="card shadow-lg">
            <img
              :src="project.image"
              class="card-img-top"
              :alt="project.name"
            />
            <div class="card-body">
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
                <strong>Completed:</strong> {{ project.completed }} /
                {{ project.total }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <the-testimonials-section />
  </main>
  <the-footer />
</template>
