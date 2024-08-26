<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheTestimonialsSection from "@/components/TheTestimonialsSection.vue";
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
        <a href="#" class="btn btn-lg rounded-pill btn-primary"
          >Hire Us Now !</a
        >
        <br /><br /><br /><br /><br />
      </div>
    </section>

    <section class="py-5 bg-body-secondary">
      <div class="container">
        <div class="row align-items-md-center flex-row-reverse">
          <div class="col-md-6">
            <h2 class="text-primary-dark fw-bold">
              Tailored Innovative Solutions to Elevate Your Business
            </h2>
            <div class="d-flex gap-3 mt-5">
              <div>
                <img
                  width="64"
                  src="@/assets/images/software-solutions.png"
                  alt="Software Solutions"
                />
              </div>
              <div>
                <h5 class="text-primary-dark">Software Solutions</h5>
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
                <h5 class="text-primary-dark">
                  Artificial Intelligence Solutions
                </h5>
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
                <h5 class="text-primary-dark">Research & Consultuncy</h5>
                <p>
                  We offer expert research and consultancy across a broad
                  spectrum of IT fields, ensuring tailored solutions for your
                  business.
                </p>
              </div>
            </div>
            <div class="mt-5">
              <a href="#" class="btn btn-outline-primary rounded-pill px-4 py-2"
                >Read more</a
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

    <section class="py-5 bg-body">
      <div class="container">
        <h2>Recent Posts</h2>

        <div class="mt-3 row row-cols-1 row-cols-md-2 g-5">
          <div class="col">
            <div class="h-100">
              <div class="">
                <span class="fs-5 text-body">Nov 2023</span>
                <a href="#" class="text-decoration-none"
                  ><h3 class="h4">
                    Creating a HelpScout app for your Laravel application
                  </h3></a
                >
                <p class="text-muted">
                  Learn how to set up an app for your HelpScout inbox that
                  displays useful information for your customer support team.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="">
                <span class="fs-5 text-body">Oct 2023</span>
                <a href="#" class="text-decoration-none"
                  ><h3 class="h4">Curing the browser-refresh-loop</h3></a
                >
                <p class="text-muted">
                  The browser-refresh-loop is the annoying process of writing
                  PHP code, switching to your browser and refreshing the site –
                  we've solved that.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="">
                <span class="fs-5 text-body">Sep 2023</span>
                <a href="#" class="text-decoration-none"
                  ><h3 class="h4">
                    Blazing fast NodeJS dependencies with Laravel and Bun
                  </h3></a
                >
                <p class="text-muted">
                  Let me show you how you can install and use Bun as a
                  replacement for NPM or Yarn to gain up to 33x speed
                  improvements!
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100">
              <div class="">
                <span class="fs-5 text-body">Jul 2023</span>
                <a href="#" class="text-decoration-none"
                  ><h3 class="h4">Announcing Laravel Herd</h3></a
                >
                <p class="text-muted">
                  We are extremely excited to announce the release of Herd - a
                  macOS desktop application to kickstart your PHP and Laravel
                  development. Learn what it is and how it works behind the
                  scenes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <a href="#" class="btn btn-outline-primary rounded-pill px-4 py-2"
            >Read more</a
          >
        </div>
      </div>
    </section>

    <the-testimonials-section />
  </main>
</template>
