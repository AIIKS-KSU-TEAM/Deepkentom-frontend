<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { onMounted } from "vue";
import useUsers from "@/composables/users";

const { fetchUsers, users } = useUsers();

onMounted(async () => {
  fetchUsers();
});
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
          At DeepKentom, we are a dynamic team of IT specialists dedicated to pushing boundaries.
           We develop everything from intuitive software that simplifies everyday tasks to advanced 
           AI models tackling the world's most complex challenges. With client satisfaction at the 
           heart of our mission, we collaborate closely to drive meaningful change
        </p>
        <p>
          Our approach is bold and visionary—focused on creating innovative solutions 
          that make life easier, shooting directly for the moon in all we do.
          </p>
      </section>

      <section v-if="users?.length" class="team-section py-5">
        <h2>Meet Our Team</h2>
        <p>
          Our diverse team includes talent from undergraduates to PhDs, and we
          are always on the lookout for passionate experts who share our
          enthusiasm for building and maintaining high-quality software
          applications.
        </p>
        <div class="mt-3 row row-cols-1 row-cols-md-2 g-4">
          <div v-for="user in users" :key="user.id" class="col">
            <div
              class="bg-body-secondary rounded p-3 p-md-5 h-100 d-flex flex-column align-items-center gap-3 gap-md-4"
            >
              <div>
                <img
                  v-if="user.avatar"
                  :src="user.avatar"
                  height="160"
                  width="160"
                  class="rounded-circle object-fit-cover"
                  :alt="user.name"
                />
                <span v-else class="text-body-tertiary"
                  ><font-awesome-icon icon="user-circle" size="10x"
                /></span>
              </div>
              <h5>{{ user.name }}, {{ user.title ?? "Developer" }}</h5>
              <div class="w-100 w-md-75 text-center text-muted">
                <p v-if="user.about">
                  {{ user.about }}
                </p>
                <p v-else>
                  Passionate developer specializing in innovative solutions, web
                  and mobile apps, and delivering high-quality code with a
                  collaborative approach.
                </p>
              </div>
              <div class="d-flex gap-3 align-items-center">
                <a
                  target="_blank"
                  :href="user.x_link ?? '#'"
                  class="text-decoration-none"
                  :class="[
                    user.x_link
                      ? 'link-primary text-body'
                      : 'pe-none link-light text-muted',
                  ]"
                >
                  <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
                </a>
                <a
                  target="_blank"
                  :href="user.linkedin_link ?? '#'"
                  class="text-decoration-none"
                  :class="[
                    user.linkedin_link
                      ? 'link-primary text-body'
                      : 'pe-none link-light text-muted',
                  ]"
                >
                  <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
                </a>
                <a
                  target="_blank"
                  :href="user.github_link ?? '#'"
                  class="text-decoration-none"
                  :class="[
                    user.github_link
                      ? 'link-primary text-body'
                      : 'pe-none link-light text-muted',
                  ]"
                >
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
