<template>
  <div class="container mt-4">
    <div class="text-center mb-4">
      <h2>Consultancy & Research</h2>
      <p class="lead">
        Guided by years of experience, our team offers unmatched consultancy
        services. We understand the intricacies of the ICT sector and are here
        to steer your business to success. Guiding Businesses with strategic
        insights in ICT, backed by comprehensive research to navigate the
        evolving digital landscape.
      </p>
    </div>
    <div class="row">
      <!-- AI in Agriculture Card -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm">
          <div class="image-container">
            <img
              src="@/assets/Ai-agriculture.jpg"
              class="card-img-top"
              alt="AI in Agriculture"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">AI in Agriculture</h4>
            <ul>
              <li>Analyzing market demand.</li>
              <li>Managing risk with forecasting and predictive analytics.</li>
              <li>Breeding seeds and monitoring soil health.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Machine Learning for Healthcare Card -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm">
          <div class="image-container">
            <img
              src="@/assets/ml-healthcare.jpg"
              class="card-img-top"
              alt="Machine Learning for Healthcare"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">Machine Learning for Healthcare</h4>
            <ul>
              <li>
                Medical image analysis for disease diagnosis and radiology.
              </li>
              <li>
                Predictive modeling for patient outcomes and disease
                progression.
              </li>
              <li>Drug discovery and personalized medicine.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- AI Ethics and Fairness Card -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm">
          <div class="image-container">
            <img
              src="@/assets/ai-ethics.jpg"
              class="card-img-top"
              alt="AI Ethics and Fairness"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">AI Ethics and Fairness</h4>
            <ul>
              <li>Research into bias and fairness in AI algorithms.</li>
              <li>Ethical AI development and responsible AI practices.</li>
              <li>
                Explainable AI to make AI decision-making more transparent.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Computer Vision Card -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm">
          <div class="image-container">
            <img
              src="@/assets/computer-vision.jpg"
              class="card-img-top"
              alt="Computer Vision"
            />
          </div>
          <div class="card-body">
            <h4 class="card-title">Computer Vision</h4>
            <ul>
              <li>
                Object detection, image recognition, and facial recognition.
              </li>
              <li>
                Image and video analysis for content moderation and security.
              </li>
              <li>Visual search and image captioning.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  height: 250px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script setup>
import { ref } from "vue";

const name = "ConsultancyAndResearch";
</script>
