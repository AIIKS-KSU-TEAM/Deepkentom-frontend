<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheTestimonialsSection from "@/components/TheTestimonialsSection.vue";
import RecentPostsSection from "@/components/RecentPostsSection.vue";
</script>

<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main>
    <section aria-label="Hero Section">
      <div class="container">
        <br /><br /><br />
        <h1 class="display-2 fw-semibold">
          Elegant Softwares Built <br class="d-none d-md-block" />
          for the World.
        </h1>
        <p class="lead">
          We build Small, Medium to Enterprise Applications for our esteemed
          clients across the world.
        </p>
        <router-link
          to="/contact-us"
          class="btn btn-lg rounded-pill btn-primary"
          >Hire Us Now !</router-link
        >
        <br /><br /><br /><br /><br />
      </div>
    </section>

    <section class="py-5 bg-body-secondary">
      <div class="container">
        <div class="row align-items-md-center flex-row-reverse">
          <div class="col-md-6">
            <h2>Tailored Innovative Solutions to Elevate Your Business</h2>
            <div class="d-flex gap-3 mt-5">
              <div>
                <img
                  width="64"
                  src="@/assets/images/software-solutions.png"
                  alt="Software Solutions"
                />
              </div>
              <div>
                <h5>Software Solutions</h5>
                <p>
                  We develop custom software solutions and have several
                  ready-made products available for immediate implementation to
                  meet your needs.
                </p>
              </div>
            </div>

            <div class="d-flex gap-3 mt-3">
              <div>
                <img
                  width="64"
                  src="@/assets/images/artificial-intelegence.png"
                  alt="Artificial Intelligence Solutions"
                />
              </div>
              <div>
                <h5>Artificial Intelligence Solutions</h5>
                <p>
                  We provide innovative, AI-driven solutions tailored to
                  optimize your business processes, enhance efficiency, and
                  deliver measurable growth.
                </p>
              </div>
            </div>

            <div class="d-flex gap-3 mt-3">
              <div>
                <img
                  width="64"
                  src="@/assets/images/research-and-consultuncy.png"
                  alt="Research & Consultuncy"
                />
              </div>
              <div>
                <h5>Research & Consultuncy</h5>
                <p>
                  We offer expert research and consultancy across a broad
                  spectrum of IT fields, ensuring tailored solutions for your
                  business.
                </p>
              </div>
            </div>
            <div class="mt-5">
              <router-link
                to="/services"
                class="btn btn-outline-primary rounded-pill w-100 w-sm-auto px-4 py-2"
                >Read more</router-link
              >
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/images/our-services.svg"
              class="w-100"
              alt="Our Services"
            />
          </div>
        </div>
      </div>
    </section>

    <recent-posts-section />

    <the-testimonials-section />
  </main>
  <the-footer />
</template>
