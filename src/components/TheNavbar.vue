<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
    <div class="container">
      <router-link class="navbar-brand d-inline-flex fw-bold fs-4" to="/">
        <span>Deep</span>
        <span class="text-primary">Kentom</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about-us"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/services"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/projects"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/blog"
              >Blog</router-link
            >
          </li>
        </ul>
        <div class="d-inline-flex gap-3">
          <router-link to="/contact-us" class="btn btn-primary rounded-pill"
            >Contact Us</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
