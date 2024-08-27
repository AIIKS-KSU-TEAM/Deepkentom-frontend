<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const projects = ref([]);
const clients = ref([]);

const fetchProjectsAndClients = async () => {
  try {
    const projectResponse = await axios.get(
      "http://127.0.0.1:8000/api/projects/",
    );
    const clientResponse = await axios.get(
      "http://127.0.0.1:8000/api/clients/",
    );
    projects.value = projectResponse.data;
    clients.value = clientResponse.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const getStarRating = (percentage) => {
  return (percentage / 100) * 5;
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
    <Navbar />
  </header>

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
            <p>
              <strong>Completed:</strong> {{ project.completed }} /
              {{ project.total }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Client Satisfaction -->
    <h2 class="text-center mt-5">Reviews</h2>
    <hr class="bg-warning mx-auto mb-5" style="width: 50px" />

    <div id="clientCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(client, index) in clients"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">{{ client.name }}</h5>
                  <p class="card-text">{{ client.comment }}</p>
                  <p><strong>Satisfaction:</strong></p>
                  <div>
                    <span
                      v-for="(filled, index) in starArray(
                        getStarRating(client.satisfaction),
                      )"
                      :key="index"
                    >
                      <i
                        class="bi"
                        :class="
                          filled
                            ? 'bi-star-fill text-warning'
                            : 'bi-star text-secondary'
                        "
                      ></i>
                    </span>
                    ({{ getStarRating(client.satisfaction).toFixed(1) }}/5)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#clientCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#clientCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
  height: 250px;
  object-fit: cover;
}

.bi {
  font-size: 1.5em;
  margin-right: 4px;
}

.carousel-inner {
  overflow: hidden;
}

.carousel-control-prev,
.carousel-control-next {
  filter: invert(1);
}
</style>
