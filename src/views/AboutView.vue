<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <header class="border-bottom">
      <the-navbar />
    </header>

    <div class="container my-5">
      <div class="row">
        <!-- Who We Are Section -->
        <div class="col-md-6">
          <h2>Who We Are</h2>
          <hr class="bg-warning w-25 mx-auto mx-md-0" />
          <p>
            DeepKentom is a dynamic and forward-thinking ICT company with a
            special focus on integrating technology with agriculture. Our
            expertise ranges from developing cutting-edge software solutions to
            creating robust datasets for AI applications tailored for the
            agricultural sector.
          </p>
          <p>
            We believe in the power of collaboration and pride ourselves on our
            ability to work alongside various stakeholders to drive positive
            change. DeepKentom is defined by its unwavering commitment to
            excellence in every facet of its operation.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/dp.jpg"
            class="img-fluid rounded"
            alt="About DeepKentom"
          />
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="row mt-5">
        <div class="col-md-6 order-md-2">
          <h2>Our Core Values</h2>
          <hr class="bg-warning w-25 mx-auto mx-md-0" />
          <p>
            At the heart of DeepKentom's core values is a relentless pursuit of
            innovation. This value fuels a culture of creative thinking and
            adaptability, allowing the company to lead in a rapidly evolving
            tech landscape.
          </p>
          <p>
            Integrity stands as the bedrock of DeepKentom's corporate culture.
            With a dedication to honesty, transparency, and ethical conduct, the
            company builds trust with its stakeholders, fostering enduring
            relationships.
          </p>
        </div>
        <div class="col-md-6 order-md-1">
          <img
            src="@/assets/Logo.png"
            class="img-fluid rounded"
            alt="Core Values"
          />
        </div>
      </div>

      <!-- Customer-Centric Approach Section -->
      <div class="row mt-5">
        <div class="col-md-6">
          <h2>Customer-Centric Approach</h2>
          <hr class="bg-warning w-25 mx-auto mx-md-0" />
          <p>
            DeepKentom's customer-centric approach is a hallmark of its
            identity. Customers are at the forefront of its priorities, and the
            company takes great pride in not only meeting but exceeding their
            needs. Every product and service is meticulously designed with the
            end-user in mind.
          </p>
          <p>
            In the DeepKentom family, teamwork is more than just a value; it's a
            way of life. Collaboration, cooperation, and mutual support are the
            cornerstones upon which the company's success is built.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="@/assets/cc.jpg"
            class="img-fluid rounded"
            alt="Customer-Centric Approach"
          />
        </div>
      </div>

      <!-- Commitment to Quality Section -->
      <div class="row mt-5">
        <div class="col-md-6 order-md-2">
          <h2>Commitment to Quality</h2>
          <hr class="bg-warning w-25 mx-auto mx-md-0" />
          <p>
            As a company rooted in quality, DeepKentom ensures that each product
            and service meets the highest standards. Quality is not just a goal;
            it's a continuous journey of improvement and refinement.
          </p>
          <p>
            DeepKentom is accountable for its actions, acknowledging that growth
            often comes from learning through mistakes. Respect, for the diverse
            backgrounds and perspectives of its employees and stakeholders,
            underpins a culture of inclusivity and support.
          </p>
        </div>
        <div class="col-md-6 order-md-1">
          <img
            src="@/assets/image.jpg"
            class="img-fluid rounded"
            alt="Commitment to Quality"
          />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <the-footer />
    </footer>
  </div>
</template>
