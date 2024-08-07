<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero d-flex align-items-center">
        <div class="hero-overlay"></div>
        <div class="container text-center text-white">
          <h1 class="display-4">DeepKentom - Driving Innovation in AI for Businesses</h1>
          <p class="lead">Empowering Agriculture With Cutting-Edge Technology.</p>
          <a class="btn btn-outline-secondary btn-lg text-light border border-secondary-subtle rounded-3" href="#" role="button">Get Started</a>
        </div>
      </section>

      <!-- Introduction Section -->
      <section class="introduction py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h2 class="h2">Introduction</h2>
              <hr class="bg-warning w-25 mx-auto mx-md-0">
              <p class="lead mt-3">Located in the heart of Kisii Town Kenya, DeepKentom specializes in Top-Tier software solutions, ICT consultancy, research, 
                and a range of professional services tailored to empower business and agricultural stakeholders.</p>
            </div>
            <div class="col-md-6 d-flex justify-content-center">
              <img src="@/assets/Logo.png" class="img-fluid rounded" alt="Introduction Image">
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  background: url("../src/assets/hero1.jpg") no-repeat center center;
  background-size: cover;
  height: 80vh;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.introduction {
  background-color: #f8f9fa;
}

.introduction img {
  max-width: 100%;
  height: auto;
}
</style>
