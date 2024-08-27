<template>
  <div>
    <header>
      <Navbar />
    </header>

    <div class="container mt-4"></div>

    <footer class="mt-4">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SoftwareSolutions from "./SoftwareSolutions.vue";
import ConsultancyAndResearch from "./ConsultancyAndResearch.vue";
import EnterpriseArchitecture from "./EnterpriseArchitecture.vue";
import ERPSolutions from "./ERPSolutions.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const activeTab = ref("software-solutions");
</script>

<style scoped>
.container {
  max-width: 1100px;
}

.nav-tabs .nav-link {
  color: #6c757d;
  font-weight: bold;
}

.nav-tabs .nav-link.active {
  color: #fff;
  background-color: #6c757d;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
}
</style>
