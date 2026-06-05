<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const baseUrl = import.meta.env.BASE_URL;

const t = computed(() => translations[settings.lang]?.home || {});
const texts = computed(() => t.value.roles || []);

const displayed = ref("");

let textIndex = 0;
let charIndex = 0;
let deleting = false;
let timeoutId = null;

function typeEffect() {
  const current = texts.value[textIndex];
  if (!current) return;

  if (!deleting) {
    displayed.value = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      timeoutId = setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    displayed.value = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.value.length;
    }
  }
  timeoutId = setTimeout(typeEffect, deleting ? 35 : 75);
}

onMounted(() => { typeEffect(); });
onUnmounted(() => { clearTimeout(timeoutId); });
</script>

<template>
  <div class="home-section d-flex align-items-center">
    <div class="container py-5">
      <div class="row align-items-center gy-5">
        <!-- TEXT -->
        <div class="col-lg-6 content text-center text-lg-start">
          <div class="hello-badge mb-3">
            <span class="badge-dot"></span>
            <span>{{ t.hello }}</span>
          </div>

          <h1 class="hero-name fw-bold mb-1">
            {{ t.surname }}
            <span class="gradient-text">{{ t.name }}</span>
          </h1>

          <div class="typing-wrapper mb-3">
            <span class="typing-prefix">// </span>
            <span class="typing-text">{{ displayed }}</span>
            <span class="cursor">|</span>
          </div>

          <p class="hero-desc mb-4">
            {{ t.desc }}
          </p>

          <div class="hero-actions d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
            <a href="#contact" class="btn-primary-custom px-4 py-2">
              <i class="bi bi-send me-2"></i>{{ t.btn }}
            </a>
            <a href="#project" class="btn-outline-custom px-4 py-2">
              <i class="bi bi-grid me-2"></i>Projects
            </a>
          </div>

          <!-- SOCIAL -->
          <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
            <a href="https://www.linkedin.com/in/shaxzod-isomiddinov-52922b366/" class="social-icon" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://t.me/Shaxzod_Isomiddinov" class="social-icon" title="Telegram">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="https://www.instagram.com/isomiddinov__sh" class="social-icon" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://github.com/Shaxzod-hp" class="social-icon" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
          </div>

          <!-- TECH BADGES -->
          <div class="tech-badges mt-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
            <span class="tech-badge">Vue.js</span>
            <span class="tech-badge">JavaScript</span>
            <span class="tech-badge">Bootstrap</span>
            <span class="tech-badge">HTML/CSS</span>
          </div>
        </div>

        <!-- 3D PROFILE IMAGE -->
        <div class="col-lg-6 image-col text-center">
          <div class="profile-3d-wrapper">
            <div class="ring ring-outer"></div>
            <div class="ring ring-middle"></div>
            <div class="image-container">
              <img :src="`${baseUrl}image/image.png`" alt="Shaxzod Isomiddinov" class="profile-img" />
            </div>
            <!-- Floating skill badges around image -->
            <div class="float-badge badge-html">HTML5</div>
            <div class="float-badge badge-vue">Vue.js</div>
            <div class="float-badge badge-js">JS</div>
            <div class="float-badge badge-css">CSS3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.home-section {
  min-height: 100vh;
  padding-top: 80px;
  background: transparent;
}

/* ─── HELLO BADGE ─── */
.hello-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 var(--accent-glow); }
  50% { box-shadow: 0 0 0 8px transparent; transform: scale(1.2); }
}

/* ─── HERO NAME ─── */
.hero-name {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -1px;
}

/* ─── TYPING ─── */
.typing-wrapper {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  min-height: 2.5rem;
}

.typing-prefix {
  color: var(--text-muted);
}

.typing-text {
  color: var(--accent);
}

.cursor {
  display: inline-block;
  color: var(--accent);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ─── HERO DESC ─── */
.hero-desc {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  max-width: 480px;
}

@media (max-width: 991px) {
  .hero-desc { margin: 0 auto 1rem; }
}

/* ─── BUTTONS ─── */
.btn-primary-custom {
  display: inline-flex;
  align-items: center;
  background: var(--accent);
  color: #07091e;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-primary-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px var(--accent-glow);
  color: #07091e;
}

.btn-outline-custom {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--text-color);
  font-weight: 600;
  border-radius: 50px;
  border: 1.5px solid var(--border-color);
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 0.95rem;
  text-decoration: none;
}

.btn-outline-custom:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 4px 20px var(--accent-dim);
}

/* ─── SOCIAL ─── */
.social-icon {
  width: 42px;
  height: 42px;
  border: 1.5px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 1.1rem;
  transition: 0.3s ease;
}

.social-icon:hover {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 6px 20px var(--accent-dim);
}

/* ─── TECH BADGES ─── */
.tech-badge {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  transition: 0.3s;
}

.tech-badge:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ─── 3D PROFILE WRAPPER ─── */
.profile-3d-wrapper {
  position: relative;
  display: inline-block;
  width: min(380px, 90vw);
  height: min(380px, 90vw);
  animation: floatProfile 6s ease-in-out infinite;
}

@keyframes floatProfile {
  0%, 100% { transform: translateY(0px) rotate3d(1, 1, 0, 0deg); }
  33%  { transform: translateY(-15px) rotate3d(1, 1, 0, 2deg); }
  66%  { transform: translateY(-8px) rotate3d(1, -1, 0, -1deg); }
}

.image-container {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  box-shadow:
    0 0 0 4px var(--accent),
    0 0 60px var(--accent-glow),
    0 30px 80px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease;
}

.image-container:hover {
  box-shadow:
    0 0 0 4px var(--accent),
    0 0 100px var(--accent-glow),
    0 40px 100px rgba(0, 0, 0, 0.5);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.5s ease;
}

.image-container:hover .profile-img {
  transform: scale(1.06);
}

/* ─── RINGS ─── */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid;
  animation: spinRing 10s linear infinite;
  z-index: 1;
}

.ring-outer {
  inset: -25px;
  border-color: rgba(0, 230, 118, 0.2);
  animation-duration: 14s;
}

.ring-middle {
  inset: -12px;
  border-color: rgba(0, 207, 255, 0.15);
  border-style: dashed;
  animation-duration: 9s;
  animation-direction: reverse;
}

@keyframes spinRing {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ─── FLOATING BADGES ─── */
.float-badge {
  position: absolute;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  z-index: 5;
  letter-spacing: 1px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: badgeFloat 4s ease-in-out infinite;
}

.badge-html { top: 5%; right: -10px; animation-delay: 0s; }
.badge-vue  { bottom: 10%; right: -15px; animation-delay: 1s; }
.badge-js   { bottom: 5%; left: -10px; animation-delay: 2s; }
.badge-css  { top: 15%; left: -15px; animation-delay: 0.5s; }

@keyframes badgeFloat {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-8px); }
}

/* ─── CONTENT ANIMATION ─── */
.content {
  animation: slideInLeft 0.9s ease both;
}

.image-col {
  animation: slideInRight 0.9s ease 0.2s both;
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 991px) {
  .profile-3d-wrapper {
    width: min(280px, 80vw);
    height: min(280px, 80vw);
    margin: 0 auto;
  }
  .float-badge { display: none; }
}
</style>
