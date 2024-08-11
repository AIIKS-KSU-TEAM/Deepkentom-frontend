<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const projects = ref([]);
const clients = ref([]);

const fetchProjectsAndClients = async () => {
  try {
    const projectResponse = await axios.get('http://127.0.0.1:8000/api/projects/');
    const clientResponse = await axios.get('http://127.0.0.1:8000/api/clients/');
    projects.value = projectResponse.data;
    clients.value = clientResponse.data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

onMounted(() => {
  fetchProjectsAndClients();
});
</script>

<template>
  <header>
    <Navbar />
  </header>

  <div class="container mt-4">
    <h2 class="text-center mb-5">Our Projects</h2>
    <div class="row">
      <!-- Project Details -->
      <div v-for="(project, index) in projects" :key="index" class="col-md-6 mb-4">
        <div class="card shadow-lg">
          <img :src="project.image" class="card-img-top" :alt="project.name" />
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
            <p><strong>Completed:</strong> {{ project.completed }} / {{ project.total }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Client Satisfaction -->
    <h2 class="text-center mt-5 mb-5">Client Satisfaction</h2>
    <div class="row">
      <div v-for="(client, index) in clients" :key="index" class="col-md-6 mb-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">{{ client.name }}</h5>
            <p class="card-text">{{ client.comment }}</p>
            <p><strong>Satisfaction:</strong></p>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="{ width: client.satisfaction + '%' }"
                :aria-valuenow="client.satisfaction"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ client.satisfaction }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="mt-5">
    <Footer />
  </footer>
</template>

<style scoped>
.container {
  padding-bottom: 40px;
}

.card {
  border-radius: 15px;
  overflow: hidden;
}

.card-img-top {
  height: 200px;
  object-fit: contain;
}

.progress-bar {
  transition: width 0.6s ease;
}
</style>
