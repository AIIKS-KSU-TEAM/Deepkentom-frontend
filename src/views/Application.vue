<script setup>
import { useInternshipApplication } from "@/composables/useInternshipApplication";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

const {
  name,
  email,
  phone,
  resume,
  message,
  handleFileChange,
  submitApplication,
} = useInternshipApplication();
</script>

<template>
  <div>
    <!-- Navbar -->
    <TheNavbar />

    <!-- Main Content -->
    <div class="container py-5">
      <!-- Header Section -->
      <section class="text-center mb-5">
        <h1 class="display-4 mb-3">Internship Application</h1>
        <p class="lead">
          Join our team and embark on a rewarding career journey. Fill out the form below to apply.
        </p>
      </section>

      <!-- Form and Image Container -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card shadow-lg border-0 overflow-hidden rounded-3">
            <div class="row g-0">
              
              <!-- Left Image Section -->
              <div class="col-md-5 d-none d-md-block">
                <img src="@/assets/images/internships.png" alt="Internship" class="img-fluid h-100 w-100 rounded-start" />
              </div>

              <!-- Right Form Section -->
              <div class="col-md-7 p-4">
                <h5 class="card-title text-center mb-4">Application Form</h5>
                <form @submit.prevent="submitApplication" class="mx-auto" style="max-width: 500px;">
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" v-model="name" required />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" required />
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" v-model="phone" required />
                  </div>
                  <div class="mb-3">
                    <label for="resume" class="form-label">Upload Resume</label>
                    <input type="file" class="form-control" id="resume" @change="handleFileChange" accept=".pdf,.doc,.docx" required />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Cover Letter / Message</label>
                    <textarea class="form-control" id="message" v-model="message" rows="4" required></textarea>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary mt-3">Submit Application</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <TheFooter />
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>
