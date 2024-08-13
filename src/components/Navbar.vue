<script setup>
import logo from '@/assets/logo1.png';
</script>

<template>
  <!-- Main Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary-subtle">
    <div class="container-fluid">
      <img :src="logo" alt="Logo" style="height: 40px; margin-left: 30px">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Secondary Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#secondaryNavbar" aria-controls="secondaryNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="secondaryNavbar">
        <ul class="navbar-nav mx-auto">
          <!-- Computer Vision Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="cvDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Computer Vision
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="cvDropdown">
              <li><router-link class="dropdown-item" to="/services">Object Detection</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Image Recognition</router-link></li>
            </ul>
          </li>
          <!-- ML for Healthcare Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="mlHealthcareDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ML for Healthcare
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="mlHealthcareDropdown">
              <li><router-link class="dropdown-item" to="/services">Medical Image Analysis</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Predictive Modeling</router-link></li>
            </ul>
          </li>
          <!-- AI Ethics and Fairness Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aiEthicsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              AI Ethics
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="aiEthicsDropdown">
              <li><router-link class="dropdown-item" to="/services">Bias and Fairness</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Ethical AI</router-link></li>
            </ul>
          </li>
          <!-- AI in Agriculture Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aiAgriDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              AI in Agriculture
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="aiAgriDropdown">
              <li><router-link class="dropdown-item" to="/services">Market Demand</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Soil Health Monitoring</router-link></li>
            </ul>
          </li>
          <!-- Enterprise Architecture Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="enterpriseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enterprise Architecture
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="enterpriseDropdown">
              <li><router-link class="dropdown-item" to="/services">IT Architecture</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Scalable Solutions</router-link></li>
            </ul>
          </li>
          <!-- ERP Solutions Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="erpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ERP Solutions
            </a>
            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="erpDropdown">
              <li><router-link class="dropdown-item" to="/services">Integration</router-link></li>
              <li><router-link class="dropdown-item" to="/services">Optimization</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
