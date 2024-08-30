<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <header class="border-bottom">
      <the-navbar />
    </header>

    <div class="container mt-4">
      <h1>About Us</h1>

      <section aria-label="Who We Are">
        <p>
          At DeepKentom, we are a dynamic team of IT specialists dedicated to
          developing a wide range of innovative solutions—from intuitive
          software that simplifies everyday tasks to advanced AI models that
          tackle today's most complex challenges. Whether it's enhancing
          productivity for busy professionals or streamlining processes for more
          laid-back users, we have the expertise to create technology that makes
          life easier.
        </p>
        <p>
          At the heart of our mission is client satisfaction. We strive to make
          a lasting impact by collaborating closely with stakeholders to drive
          positive change. At DeepKentom, excellence is our standard in
          everything we do.
        </p>
      </section>

      <section class="team-section py-5">
        <h2>Meet Our Team</h2>
        <p>
          Our diverse team includes talent from undergraduates to PhDs, and we
          are always on the lookout for passionate experts who share our
          enthusiasm for building and maintaining high-quality software
          applications.
        </p>
        <div class="mt-3 row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div
              class="bg-body-secondary rounded p-3 p-md-5 h-100 d-flex flex-column align-items-center gap-3 gap-md-4"
            >
              <img
                src="https://via.placeholder.com/160"
                class="rounded-circle mb-3"
                alt="Team Member 1"
              />
              <h5>John Doe, CEO</h5>
              <p class="text-center text-muted w-100 w-md-75">
                John is the founder and CEO of our company. He has over 10 years
                of experience in the industry.
              </p>
              <div class="d-flex gap-3 align-items-center">
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="bg-body-secondary rounded p-3 p-md-5 h-100 d-flex flex-column align-items-center gap-3 gap-md-4"
            >
              <img
                src="https://via.placeholder.com/160"
                class="rounded-circle mb-3"
                alt="Team Member 1"
              />
              <h5>John Doe, CEO</h5>
              <p class="text-center text-muted w-100 w-md-75">
                John is the founder and CEO of our company. He has over 10 years
                of experience in the industry.
              </p>
              <div class="d-flex gap-3 align-items-center">
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="bg-body-secondary rounded p-3 p-md-5 h-100 d-flex flex-column align-items-center gap-3 gap-md-4"
            >
              <img
                src="https://via.placeholder.com/160"
                class="rounded-circle mb-3"
                alt="Team Member 2"
              />
              <h5>Jane Smith, CTO</h5>
              <p class="text-center text-muted w-100 w-md-75">
                Jane is the Chief Technology Officer. She leads our engineering
                team and oversees all technical aspects of the company.
              </p>
              <div class="d-flex gap-3 align-items-center">
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="bg-body-secondary rounded p-3 p-md-5 h-100 d-flex flex-column align-items-center gap-3 gap-md-4"
            >
              <img
                src="https://via.placeholder.com/160"
                class="rounded-circle mb-3"
                alt="Team Member 3"
              />
              <h5>Bob Johnson, COO</h5>
              <p class="text-center text-muted w-100 w-md-75">
                Bob is the Chief Operating Officer. He ensures the smooth
                running of day-to-day operations and manages the team.
              </p>
              <div class="d-flex gap-3 align-items-center">
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
                </a>
                <a href="#" class="text-decoration-none link-primary text-body">
                  <font-awesome-icon size="xl" :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <the-footer />
  </div>
</template>
