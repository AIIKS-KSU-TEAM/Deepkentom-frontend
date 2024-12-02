<template>
  <footer class="py-5 border-top">
    <div class="container">
      <div class="top border-bottom pb-5">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3"
        >
          <div class="col h-100">
            <div class="d-flex fs-5 fw-bolder">
              <span>Deep</span>
              <span class="text-primary">Kentom</span>
            </div>
            <div class="mt-3">
              <p>Building elegant softwares </p>
            </div>
          </div>
          <div class="col h-100">
            <h5>Services</h5>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li>Software Solutions</li>
              <li>Artificial Intelligence Solutions</li>
              <li>Research & Consultuncy</li>
            </ul>
          </div>
          <div class="col h-100">
            <h5>Company</h5>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li>
                <router-link
                  to="/about-us"
                  class="text-decoration-none text-body link-primary"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact-us"
                  class="text-decoration-none text-body link-primary"
                  >Contact Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/services"
                  class="text-decoration-none text-body link-primary"
                  >Services</router-link
                >
              </li>
              <li>
                <router-link
                  to="/blog"
                  class="text-decoration-none text-body link-primary"
                  >Blog</router-link
                >
              </li>
              <li>
                <router-link
                  to="/projects"
                  class="text-decoration-none text-body link-primary"
                  >Projects</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col h-100">
            <h5>Contact Us</h5>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li class="d-inline-flex gap-2 align-items-center">
                <span
                  class="c-h-8 c-w-8 d-inline-flex align-items-center justify-content-center rounded text-bg-primary"
                >
                  <font-awesome-icon icon="location-pin" />
                </span>
                <span>Kisii, Kenya</span>
              </li>
              <li class="d-inline-flex gap-2 align-items-center">
                <span
                  class="c-h-8 c-w-8 d-inline-flex align-items-center justify-content-center rounded text-bg-primary"
                >
                  <font-awesome-icon icon="phone" />
                </span>
                <span>+254 710 791 596</span>
              </li>
              <li class="d-inline-flex gap-2 align-items-center">
                <span
                  class="c-h-8 c-w-8 d-inline-flex align-items-center justify-content-center rounded text-bg-primary"
                >
                  <font-awesome-icon icon="envelope" />
                </span>
                <span>kentomdeep@gmail.com</span>
              </li>
            </ul>

            <div class="d-flex gap-3 align-items-center">
              <a href="#" class="text-decoration-none link-primary text-body">
                <font-awesome-icon size="xl" :icon="['fab', 'x-twitter']" />
              </a>
              <a href="#" class="text-decoration-none link-primary text-body">
                <font-awesome-icon size="xl" :icon="['fab', 'linkedin']" />
              </a>
              <a href="#" class="text-decoration-none link-primary text-body">
                <font-awesome-icon size="xl" :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom text-center py-5">
        <small class="text-muted"
          >2023 DeepKentom.com. All rights
          reserved.</small
        >
      </div>
    </div>
  </footer>
</template>
