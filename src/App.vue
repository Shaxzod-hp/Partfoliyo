<script setup>
import Navbar from "./components/Global/Navbar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Services from "./views/Services.vue";
import Project from "./views/Project.vue";
import Footer from "./components/Global/Footer.vue";

import { useSettingsStore } from "./stores/settings";
import { onMounted } from "vue";

const settings = useSettingsStore();

onMounted(() => {
  settings.applyTheme();
});
</script>
<template>
  <Navbar class="fixed-top" />
  <section id="home">
    <Home />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="services">
    <Services />
  </section>

  <section id="project">
    <Project />
  </section>

  <section id="contact">
    <Contact />
  </section>
  <Footer />
</template>
<style>
:root {
  --bg-primary: #090e29;
  --bg-gradient: linear-gradient(135deg, #090e29, #0f1b4d);
  --text-color: #ffffff;
  --text-muted: #cccccc;
  --navbar-bg: rgba(9, 14, 41, 0.8);
  --card-bg: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.1);
  --success-color: #198754;
}

.light-mode {
  --bg-primary: #f8f9fa;
  --bg-gradient: linear-gradient(135deg, #f8f9fa, #e9ecef);
  --text-color: #212529;
  --text-muted: #6c757d;
  --navbar-bg: rgba(255, 255, 255, 0.8);
  --card-bg: #ffffff;
  --border-color: rgba(0, 0, 0, 0.1);
  --success-color: #198754;
}

body {
  margin: 0;
  padding: 0;
  color: var(--text-color);
  background: var(--bg-primary);
  background-attachment: fixed;
  transition: 0.3s ease;
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

section {
  min-height: 100vh;
  background: var(--bg-primary);
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
