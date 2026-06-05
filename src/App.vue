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
  <Navbar />
  <!-- 3D Animated Background -->
  <div class="bg-orbs" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
  </div>

  <section id="home" class="section-wrapper">
    <Home />
  </section>

  <section id="about" class="section-wrapper">
    <About />
  </section>

  <section id="services" class="section-wrapper">
    <Services />
  </section>

  <section id="project" class="section-wrapper">
    <Project />
  </section>

  <section id="contact" class="section-wrapper">
    <Contact />
  </section>
  <Footer />
</template>

<style>
/* ─── GOOGLE FONT ─── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* ─── DESIGN TOKENS ─── */
:root {
  --bg-primary: #07091e;
  --bg-secondary: #0c1033;
  --bg-gradient: linear-gradient(135deg, #07091e 0%, #0c1033 50%, #101540 100%);
  --text-color: #f0f4ff;
  --text-muted: #8892b0;
  --navbar-bg: rgba(7, 9, 30, 0.85);
  --card-bg: rgba(255, 255, 255, 0.04);
  --border-color: rgba(255, 255, 255, 0.08);
  --accent: #00e676;
  --accent-glow: rgba(0, 230, 118, 0.35);
  --accent-dim: rgba(0, 230, 118, 0.12);
  --purple-glow: rgba(130, 80, 255, 0.18);
  --success-color: #00e676;

  /* Typography */
  --font-main: 'Inter', sans-serif;
}

.light-mode {
  --bg-primary: #f4f7ff;
  --bg-secondary: #eef1fb;
  --bg-gradient: linear-gradient(135deg, #f4f7ff 0%, #eef1fb 100%);
  --text-color: #14173a;
  --text-muted: #5a6080;
  --navbar-bg: rgba(244, 247, 255, 0.90);
  --card-bg: #ffffff;
  --border-color: rgba(0, 0, 0, 0.08);
  --accent: #00b857;
  --accent-glow: rgba(0, 184, 87, 0.25);
  --accent-dim: rgba(0, 184, 87, 0.1);
  --purple-glow: rgba(100, 60, 200, 0.1);
  --success-color: #00b857;
}

/* ─── RESET & BASE ─── */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  color: var(--text-color);
  background: var(--bg-primary);
  font-family: var(--font-main);
  transition: background 0.35s ease, color 0.35s ease;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ─── SECTION WRAPPER ─── */
.section-wrapper {
  position: relative;
  min-height: 100vh;
  background: transparent;
  transition: 0.3s ease;
}

/* ─── ANIMATED 3D BACKGROUND ORBS ─── */
.bg-orbs {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 12s ease-in-out infinite;
  opacity: 0.55;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 230, 118, 0.3), transparent 70%);
  top: -150px;
  left: -100px;
  animation-duration: 14s;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(100, 80, 255, 0.25), transparent 70%);
  bottom: 10%;
  right: -80px;
  animation-duration: 18s;
  animation-delay: -4s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 180, 230, 0.2), transparent 70%);
  top: 40%;
  left: 35%;
  animation-duration: 20s;
  animation-delay: -8s;
}

.orb-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(255, 80, 120, 0.15), transparent 70%);
  bottom: 30%;
  left: -50px;
  animation-duration: 16s;
  animation-delay: -5s;
}

@keyframes orbFloat {
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -40px) scale(1.05); }
  50%  { transform: translate(-20px, 30px) scale(0.95); }
  75%  { transform: translate(40px, 20px) scale(1.08); }
  100% { transform: translate(0, 0) scale(1); }
}

/* Light mode - soften orbs */
.light-mode .orb {
  opacity: 0.25;
}

/* ─── SHARED UTILITIES ─── */
.text-accent {
  color: var(--accent) !important;
}

.section-title {
  font-size: 0.85rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.section-heading {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.2;
}

/* ─── GRADIENT TEXT ─── */
.gradient-text {
  background: linear-gradient(135deg, var(--accent) 0%, #00cfff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Ensure all content is above orbs */
section > * {
  position: relative;
  z-index: 1;
}
</style>
