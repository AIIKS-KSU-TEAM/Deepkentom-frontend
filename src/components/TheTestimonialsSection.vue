<script setup>
import useTestimonials from "@/composables/testimonials";
import { onMounted } from "vue";

const { testimonials, fetchTestimonials } = useTestimonials();

const starArray = (rating) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};

onMounted(async () => {
  fetchTestimonials();
});
</script>
<template>
  <section v-if="testimonials.length" class="py-5 bg-body-secondary">
    <div class="container">
      <h2 class="text-center">Testimonials</h2>
      <div
        id="testimonials-carousel"
        class="mt-4 carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <div class="d-flex justify-content-center">
              <div class="w-75">
                <h5>{{ testimonial.name }}</h5>
                <p>{{ testimonial.comment }}</p>
                <div class="d-flex justify-content-end">
                  <div class="d-inline-flex gap-1">
                    <span v-for="(filled, index) in starArray(5)" :key="index">
                      <i
                        class="bi"
                        :class="
                          filled
                            ? 'bi-star-fill text-warning'
                            : 'bi-star text-secondary'
                        "
                      ></i>
                    </span>
                    ({{ testimonial.satisfaction }}/5)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimonials-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
