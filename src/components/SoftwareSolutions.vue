<template>
  <div class="container mt-5">
    <h2 class="text-center mb-5">Software Solutions</h2>
    <p class="lead text-center mb-5">
      Crafting customized software solutions tailored to meet your business
      needs, ensuring efficiency and scalability. From conceptualization to
      deployment, we're with you every step of the way.
    </p>
    <div class="row">
      <div
        class="col-lg-6 col-md-12 mb-4"
        v-for="(solution, index) in solutions"
        :key="index"
      >
        <div class="card shadow-lg h-100">
          <img
            :src="solution.image"
            class="card-img-top img-fluid"
            :alt="solution.alt"
          />
          <div class="card-body d-flex flex-column">
            <h4 class="card-title">{{ solution.title }}</h4>
            <p class="card-text flex-grow-1">{{ solution.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customSoftware from "@/assets/custom_software.png";
import enterpriseSoftware from "@/assets/enterprise_software.jpeg";
import aiMl from "@/assets/ai_ml.png";
import legalTech from "@/assets/legal.jpg";

export default {
  name: "SoftwareSolutions",
  data() {
    return {
      solutions: [
        {
          image: customSoftware,
          alt: "Custom Software Development",
          title: "Custom Software Development",
          description:
            "At DeepKentom, we build tailored software applications to meet the unique needs of individual businesses or organizations.",
        },
        {
          image: enterpriseSoftware,
          alt: "Enterprise Software",
          title: "Enterprise Software",
          description:
            "Designing and implementing software solutions for large organizations to improve operations, such as ERP, CRM, and HRMS.",
        },
        {
          image: aiMl,
          alt: "AI and Machine Learning Applications",
          title: "AI and Machine Learning Applications",
          description:
            "Building solutions that leverage AI and ML for automation, data analysis, and predictive modeling.",
        },
        {
          image: legalTech,
          alt: "Legal Tech Solutions",
          title: "Legal Tech Solutions",
          description:
            "Building software for legal professionals, including case management, document automation, and legal research tools.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 280px;
  object-fit: cover;
}
</style>
