<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <!-- Navbar -->
    <TheNavbar />

    <!-- Main Content -->
    <div class="container py-4">
      <!-- Header Section (Hero Section) -->
      <section class="mb-5">
        <h1 class="display-4 text-center mb-3">Join Our Team</h1>
        <p class="lead text-center mb-4">
          We’re excited to welcome innovative and motivated minds who wish to explore
          career opportunities with us. Our internships provide a unique environment
          for hands-on learning and real-world experience.
        </p>
      </section>

      <!-- Career Opportunities Section with bg-body-secondary -->
      <section class="mt-5 mb-5 p-4 bg-body-secondary ">
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/images/collaborations.jpg" class="w-100 h-100 rounded" alt="Global Collaboration" />
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center">
            <h2 class="h4 fw-bold">Career with Us</h2>
            <p>
              <i class="bi bi-globe text-primary"></i> We foster cross-cultural
              collaborations among our interns and team members worldwide, empowering
              them to drive innovation and create a lasting impact.
            </p>
            <p>
              <i class="bi bi-briefcase-fill text-primary"></i> As an intern, you will be fully immersed in
              real-life, high-impact projects across various industries, from
              logistics and transportation to healthcare and biotechnology.
            </p>
            <p>
              <i class="bi bi-lightbulb-fill text-primary"></i> You’ll have the opportunity to
              proactively propose and execute your ideas while receiving continuous
              support and guidance from your assigned supervisors and experienced
              team members.
            </p>
          </div>
        </div>
      </section>

      <!-- Hands-On Experience Section with alternating background color -->
      <section class="mb-5 p-4">
        <div class="row align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="@/assets/images/programmer1.png" class="w-100 rounded" alt="Real-World Projects" />
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center">
            <h2 class="h4 fw-bold">Real-World Projects</h2>
            <p>
              <i class="bi bi-gear-fill text-primary"></i> Dive into impactful projects
              that span multiple fields, where you can directly contribute to real
              solutions for complex challenges in the modern world.
            </p>
            <p>
              <i class="bi bi-chat-left-dots-fill text-primary"></i> Engage in active
              feedback and discussions with supervisors and team members, ensuring
              you gain valuable insights and refine your expertise.
            </p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <div class="text-center mt-4">
        <router-link
          to="/application"
          class="btn btn-lg btn-primary rounded-pill px-4"
        >
          Apply Now
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped>

img {
  max-height: 300px;
  object-fit: cover;
}
</style>
