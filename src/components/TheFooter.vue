<template>
  <footer class="py-5">
    <div class="container">
      <div class="top border-bottom pb-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <div class="col">
            <div class="d-flex fs-5 fw-bolder">
              <span>Deep</span>
              <span class="text-primary">Kentom</span>
            </div>
            <div class="mt-3">
              <p>Building elegant softwares since June 2024</p>
            </div>
            <div class="mt-3 d-flex gap-3">
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-facebook"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-twitter"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-instagram"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-linkedin"></i
              ></router-link>
            </div>
          </div>
          <div class="col">
            <h5>Services</h5>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li>Software Solutions</li>
              <li>Artificial Intelligence Solutions</li>
              <li>Research & Consultuncy</li>
            </ul>
          </div>
          <div class="col">
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
          <div class="col">
            <h5>Contact Us</h5>
            <ul class="list-unstyled d-flex flex-column gap-2">
              <li class="d-inline-flex gap-1">
                <i class="bi bi-geo-alt"></i>408-40200, Kisii, Kenya
              </li>
              <li class="d-inline-flex gap-1">
                <i class="bi bi-telephone"></i>+254 114 290 760
              </li>
              <li class="d-inline-flex gap-1">
                <i class="bi bi-envelope"></i>deepkentom@gmail.com
              </li>
            </ul>
            <div class="d-inline-flex gap-3">
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-facebook"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-twitter"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-instagram"></i
              ></router-link>
              <router-link to="#" class="text-decoration-none"
                ><i class="bi bi-linkedin"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom text-center py-5">
        <small class="text-muted"
          >&copy; {{ new Date().getFullYear() }} DeepKentom.com. All rights
          reserved.</small
        >
      </div>
    </div>
  </footer>
</template>
