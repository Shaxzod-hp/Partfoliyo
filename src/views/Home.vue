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
    // yozish
    displayed.value = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      timeoutId = setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    // o‘chirish
    displayed.value = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.value.length;
    }
  }

  timeoutId = setTimeout(typeEffect, deleting ? 40 : 80);
}

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  clearTimeout(timeoutId);
});
</script>

<template>
  <section id="home" class="vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- TEXT -->
        <div class="col-lg-6 content text-center text-lg-start">
          <h6 class="opacity-75">{{ t.hello }}</h6>

          <h1 class="fw-bold display-4">
            {{ t.surname }} <span class="text-success">{{ t.name }}</span>
          </h1>

          <h4 class="typing text-success mb-3">
            {{ displayed }}<span class="cursor">|</span>
          </h4>

          <p class="opacity-75 mb-4">
            {{ t.desc }}
          </p>

          <a href="#contact" class="btn btn-success px-4 py-2 rounded-pill">
            {{ t.btn }}
          </a>

          <!-- SOCIAL -->
          <div class="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
            <a href="https://www.linkedin.com/in/shaxzod-isomiddinov-52922b366/" class="social-icon"><i
                class="bi bi-linkedin"></i></a>
            <a href="https://t.me/Shaxzod_Isomiddinov" class="social-icon"><i class="bi bi-telegram"></i></a>
            <a href="https://www.instagram.com/isomiddinov__sh" class="social-icon"><i class="bi bi-instagram"></i></a>
            <a href="https://github.com/Shaxzod-hp/Iso-Uz" class="social-icon"><i class="bi bi-github"></i></a>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="col-lg-6 image text-center">
          <img :src="`${baseUrl}image/image.png`" alt="Profile" class="img-fluid rounded-circle border border-3 border-success"
            style="max-width: 400px" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#home {
  background: transparent;
}

/* faqat cursor uchun */
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.content {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.image {
  animation: fadeIn 1s ease;
}

.image img {
  height: 380px;
  width: 380px;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.4s ease-in-out;
  box-shadow: 0 0 40px rgba(25, 135, 60, 0.6);
}

.image img:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}

/* social icon */
.social-icon {
  width: 40px;
  height: 40px;
  border: 1px solid #198754;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  text-decoration: none;
  transition: 0.3s;
}

.social-icon:hover {
  background: #198754;
  color: white;
}
</style>
