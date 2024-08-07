<template>
    <div class="container mt-4">
      <h1>Our Services</h1>
      <ul class="nav nav-tabs" id="servicesTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="software-solutions-tab" data-toggle="tab" href="#software-solutions" role="tab" aria-controls="software-solutions" aria-selected="true">Software Solutions</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="consultancy-and-research-tab" data-toggle="tab" href="#consultancy-and-research" role="tab" aria-controls="consultancy-and-research" aria-selected="false">Consultancy & Research</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="enterprise-architecture-tab" data-toggle="tab" href="#enterprise-architecture" role="tab" aria-controls="enterprise-architecture" aria-selected="false">Enterprise Architecture</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="erp-solutions-tab" data-toggle="tab" href="#erp-solutions" role="tab" aria-controls="erp-solutions" aria-selected="false">ERP Solutions</a>
        </li>
      </ul>
      <div class="tab-content" id="servicesTabContent">
        <div class="tab-pane fade show active" id="software-solutions" role="tabpanel" aria-labelledby="software-solutions-tab">
          <SoftwareSolutions />
        </div>
        <div class="tab-pane fade" id="consultancy-and-research" role="tabpanel" aria-labelledby="consultancy-and-research-tab">
          <ConsultancyAndResearch />
        </div>
        <div class="tab-pane fade" id="enterprise-architecture" role="tabpanel" aria-labelledby="enterprise-architecture-tab">
          <EnterpriseArchitecture />
        </div>
        <div class="tab-pane fade" id="erp-solutions" role="tabpanel" aria-labelledby="erp-solutions-tab">
          <ERPSolutions />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SoftwareSolutions from './SoftwareSolutions.vue';
  import ConsultancyAndResearch from './ConsultancyAndResearch.vue';
  import EnterpriseArchitecture from './EnterpriseArchitecture.vue';
  import ERPSolutions from './ERPSolutions.vue';
  
  export default {
    name: 'Services',
    components: {
      SoftwareSolutions,
      ConsultancyAndResearch,
      EnterpriseArchitecture,
      ERPSolutions,
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if necessary */
  </style>
  