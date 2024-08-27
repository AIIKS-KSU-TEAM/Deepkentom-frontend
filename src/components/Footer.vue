<script setup></script>

<template>
  <!-- Footer -->
  <footer class="bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <!-- Footer Items -->
        <div class="col-md-3 mb-3">
          <h1 class="h4">DeepKentom Solutions</h1>
          <p>
            DeepKentom Solutions is dedicated to providing top-notch software
            solutions and ICT consultancy to meet your business needs.
          </p>
        </div>

        <div class="col-md-3 mb-3">
          <h2 class="h5">Quick Links</h2>
          <hr class="bg-warning w-25" />
          <ul class="list-unstyled">
            <li>
              <a href="/" class="text-white text-decoration-none">Home</a>
            </li>
            <li>
              <a href="/about" class="text-white text-decoration-none"
                >About Us</a
              >
            </li>
            <li>
              <a href="/services" class="text-white text-decoration-none"
                >Services</a
              >
            </li>
            <li>
              <a href="/blog" class="text-white text-decoration-none">Blog</a>
            </li>
            <li>
              <a href="/contact" class="text-white text-decoration-none"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-3">
          <h2 class="h5">DeepKentom</h2>
          <hr class="bg-warning w-25" />
          <ul class="list-unstyled">
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/object-detection"
                >Object Detection</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/image-recognition"
                >Image Recognition</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/facial-recognition"
                >Facial Recognition</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/visual-search"
                >Visual Search</router-link
              >
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/medical-image-analysis"
                >Medical Image Analysis</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-3">
          <h2 class="h5">Contact Us</h2>
          <hr class="bg-warning w-25" />
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt me-2"></i>408-40200, Kisii, Kenya</li>
            <li><i class="bi bi-telephone me-2"></i>+254 114 290 760</li>
            <li><i class="bi bi-envelope me-2"></i>deepkentom@gmail.com</li>
          </ul>
          <div class="mt-3">
            <a href="#" class="text-white text-decoration-none me-3"
              ><i class="bi bi-facebook"></i
            ></a>
            <a href="#" class="text-white text-decoration-none me-3"
              ><i class="bi bi-twitter"></i
            ></a>
            <a href="#" class="text-white text-decoration-none me-3"
              ><i class="bi bi-instagram"></i
            ></a>
            <a href="#" class="text-white text-decoration-none"
              ><i class="bi bi-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondary text-center py-2">
      <small>&copy; 2024 DeepKentom Solutions. All rights reserved.</small>
    </div>
  </footer>
</template>

<style scoped>
hr {
  height: 2px;
  border: none;
}
</style>
