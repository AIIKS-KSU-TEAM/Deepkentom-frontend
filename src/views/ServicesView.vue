<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import SoftwareSolutions from "@/components/SoftwareSolutions.vue";
import ConsultancyAndResearch from "@/components/ConsultancyAndResearch.vue";
import EnterpriseArchitecture from "@/components/EnterpriseArchitecture.vue";
import ERPSolutions from "@/components/ERPSolutions.vue";

import { ref } from "vue";

const activeTab = ref("software-solutions");
</script>
<template>
  <header class="border-bottom">
    <the-navbar />
  </header>
  <main>
    <div class="container">
      <h1 class="text-center text-secondary mb-4">Our Services</h1>
      <ul class="nav nav-tabs" id="servicesTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            :class="[
              'nav-link',
              activeTab === 'software-solutions' ? 'active' : '',
            ]"
            id="software-solutions-tab"
            data-bs-toggle="tab"
            href="#software-solutions"
            role="tab"
            aria-controls="software-solutions"
            aria-selected="activeTab === 'software-solutions'"
            @click.prevent="activeTab = 'software-solutions'"
          >
            Software Solutions
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            :class="[
              'nav-link',
              activeTab === 'consultancy-and-research' ? 'active' : '',
            ]"
            id="consultancy-and-research-tab"
            data-bs-toggle="tab"
            href="#consultancy-and-research"
            role="tab"
            aria-controls="consultancy-and-research"
            aria-selected="activeTab === 'consultancy-and-research'"
            @click.prevent="activeTab = 'consultancy-and-research'"
          >
            Consultancy & Research
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            :class="[
              'nav-link',
              activeTab === 'enterprise-architecture' ? 'active' : '',
            ]"
            id="enterprise-architecture-tab"
            data-bs-toggle="tab"
            href="#enterprise-architecture"
            role="tab"
            aria-controls="enterprise-architecture"
            aria-selected="activeTab === 'enterprise-architecture'"
            @click.prevent="activeTab = 'enterprise-architecture'"
          >
            Enterprise Architecture
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            :class="['nav-link', activeTab === 'erp-solutions' ? 'active' : '']"
            id="erp-solutions-tab"
            data-bs-toggle="tab"
            href="#erp-solutions"
            role="tab"
            aria-controls="erp-solutions"
            aria-selected="activeTab === 'erp-solutions'"
            @click.prevent="activeTab = 'erp-solutions'"
          >
            ERP Solutions
          </a>
        </li>
      </ul>
      <div class="tab-content mt-4" id="servicesTabContent">
        <div
          v-show="activeTab === 'software-solutions'"
          class="tab-pane fade show active"
          id="software-solutions"
          role="tabpanel"
          aria-labelledby="software-solutions-tab"
        >
          <SoftwareSolutions />
        </div>
        <div
          v-show="activeTab === 'consultancy-and-research'"
          class="tab-pane fade show active"
          id="consultancy-and-research"
          role="tabpanel"
          aria-labelledby="consultancy-and-research-tab"
        >
          <ConsultancyAndResearch />
        </div>
        <div
          v-show="activeTab === 'enterprise-architecture'"
          class="tab-pane fade show active"
          id="enterprise-architecture"
          role="tabpanel"
          aria-labelledby="enterprise-architecture-tab"
        >
          <EnterpriseArchitecture />
        </div>
        <div
          v-show="activeTab === 'erp-solutions'"
          class="tab-pane fade show active"
          id="erp-solutions"
          role="tabpanel"
          aria-labelledby="erp-solutions-tab"
        >
          <ERPSolutions />
        </div>
      </div>
    </div>
  </main>
  <the-footer />
</template>
