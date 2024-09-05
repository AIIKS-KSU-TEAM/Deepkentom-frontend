<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main>
    <section
      class="software-solutions-section bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div class="row row-cols-1 row-cols-md-2 g-0 align-items-center">
        <div class="col bg-body bg-opacity-75 p-3 p-md-5">
          <div class="container">
            <h2>Software Solutions</h2>
            <div class="">
              <p>At DeepKentom, our core focus is software development.</p>
              <p>
                We specialize in creating custom software solutions and also
                offer a range of ready-made products that can be quickly
                implemented to suit your needs.
              </p>
              <p>
                We design personalized software tailored to your business,
                ensuring both efficiency and scalability. From initial concept
                to final deployment, we support you throughout the entire
                process.
              </p>
              <p>
                DeepKentom develops bespoke software applications to address the
                specific requirements of businesses and organizations.
              </p>
              <p>
                We create and implement software solutions for large enterprises
                to optimize their operations, including ERP, CRM, and HRMS
                systems.
              </p>
              <p>
                We also develop software for legal professionals, such as case
                management, document automation, and legal research tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="artificial-intelligence-section bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div
        class="row row-cols-1 row-cols-md-2 flex-md-row-reverse g-0 align-items-center"
      >
        <div class="col bg-body bg-opacity-75 p-3 p-md-5">
          <div class="container">
            <h2>Artificial Intelligence</h2>
            <div class="">
              <p>
                At DeepKentom, we harness the power of artificial intelligence
                to deliver innovative solutions that drive smarter
                decision-making and operational efficiency.
              </p>
              <p>
                We offer custom AI development services, along with a suite of
                pre-built AI tools ready for deployment to meet your unique
                business challenges.
              </p>
              <p>
                From machine learning algorithms to natural language processing,
                our AI solutions are designed to enhance productivity and
                scalability, tailored to fit your business needs.
              </p>
              <p>
                We work closely with businesses to integrate AI-driven
                applications, improving everything from customer engagement to
                data analysis.
              </p>
              <p>
                Our AI expertise includes developing predictive analytics,
                automation tools, and intelligent systems for a wide range of
                industries, including healthcare, finance, and retail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="research-and-consultancy-section bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div class="row row-cols-1 row-cols-md-2 g-0 align-items-center">
        <div class="col bg-body bg-opacity-75 p-3 p-md-5">
          <div class="container">
            <h2>Consultancy & Research</h2>
            <div class="">
              <p>
                At DeepKentom, we offer comprehensive research and consultancy
                services to help businesses navigate complex challenges and
                uncover new opportunities.
              </p>
              <p>
                Our team provides tailored research and expert guidance,
                delivering actionable insights that align with your strategic
                goals and drive informed decision-making.
              </p>
              <p>
                We work closely with organizations to identify pain points,
                assess market trends, and develop customized strategies that
                foster growth and innovation.
              </p>
              <p>
                From feasibility studies to industry-specific research, our
                consultancy services are designed to empower businesses to make
                data-driven decisions, streamline operations, and achieve
                sustainable success across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <the-footer />
</template>

<style>
.software-solutions-section {
  background: url("@/assets/images/software-solutions-lg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.artificial-intelligence-section {
  background: url("@/assets/images/artificial-intelligence-lg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.research-and-consultancy-section {
  background: url("@/assets/images/research-and-consultancy-lg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
