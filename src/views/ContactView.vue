<script setup>
import { ref } from "vue";
import axios from "axios";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

// Refs for form data
const name = ref("");
const email = ref("");
const message = ref("");
const formMessage = ref("");
const alertType = ref("");

// Function to handle form submission
const submitForm = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/contact/", {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    formMessage.value = "Your message has been sent successfully!";
    alertType.value = "alert-success";

    // Clear the form fields
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    formMessage.value =
      "There was an error sending your message. Please try again.";
    alertType.value = "alert-danger";
  }
};
</script>

<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main class="py-4">
    <div class="container">
      <h1>Contact Us</h1>
    </div>

    <section class="py-3 py-md-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-md-5">
          <div class="col">
            <div class="h-100 bg-body-secondary p-3 p-md-5 rounded">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center gap-4">
                  <font-awesome-icon icon="phone" size="2x" />
                  <span class="fs-4 fw-bold">+254 710 791 596</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100 bg-body-secondary p-3 p-md-5 rounded">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center gap-4">
                  <font-awesome-icon icon="envelope" size="2x" />
                  <span class="fs-4 fw-bold">deepkentom@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="h-100 bg-body-secondary p-3 p-md-5 rounded">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center gap-4">
                  <font-awesome-icon icon="map-pin" size="2x" />
                  <span class="fs-4 fw-bold">Keumbu, Kisii, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-3 py-md-5">
      <div class="container">
        <h2>Leave A Message</h2>
        <form
          @submit.prevent="submitForm"
          class="mt-3 mt-md-4 row row-cols-1 gap-3 gap-md-4"
        >
          <div v-if="formMessage" class="col">
            <div :class="['alert', alertType]" role="alert">
              {{ formMessage }}
            </div>
          </div>

          <div class="col">
            <div class="form-floating">
              <input
                type="text"
                id="name"
                v-model="name"
                class="form-control"
                placeholder="Name"
                autocomplete="name"
                required
              />
              <label for="name">Name</label>
            </div>
          </div>

          <div class="col">
            <div class="form-floating">
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control"
                placeholder="Email Address"
                autocomplete="email"
                required
              />
              <label for="email">Email Address</label>
            </div>
          </div>

          <div class="col">
            <div class="form-floating">
              <textarea
                id="message"
                v-model="message"
                class="form-control"
                placeholder="Message"
                rows="4"
                required
                autocomplete="message"
              />
              <label for="message">Message</label>
            </div>
          </div>

          <div class="col">
            <button
              type="submit"
              class="btn btn-outline-primary rounded-pill w-100 w-sm-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    <section class="py-3 py-md-5">
      <div class="container">
        <h2>Visit Us</h2>

        <div class="mt-3 mt-md-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8217088203!2d34.781737376012316!3d-0.6923034873102553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3f6840164ff1%3A0x8040e0d2e546b570!2sKisii%20University%20Main%20Campus!5e0!3m2!1sen!2ske!4v1723017296428!5m2!1sen!2ske"
            class="w-100 rounded"
            width="100%"
            height="320"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </section>
  </main>
  <the-footer />
</template>
