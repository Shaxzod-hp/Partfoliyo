<script setup>
import { ref, computed, onMounted } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang].contact);

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const sent = ref(false);

function sendMessage() {
  if (!name.value || !email.value || !message.value) {
    alert(t.value.error);
    return;
  }
  console.log("Name:", name.value, "Email:", email.value, "Subject:", subject.value, "Message:", message.value);
  sent.value = true;
  setTimeout(() => { sent.value = false; }, 4000);
  name.value = email.value = subject.value = message.value = "";
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="contact-section">
    <div class="container">

      <!-- EDITORIAL HEADER -->
      <div class="contact-header animate-up">
        <h2 class="editorial-title">
          {{ t.title }} 
          <span class="text-accent">{{ t.subtitle }}</span> {{ t.together }}
        </h2>
      </div>

      <div class="row g-5 align-items-start mt-5">

        <!-- ── CONTACT INFO ── -->
        <div class="col-lg-5 animate-up" style="--delay: 0.2s">
          <div class="info-block">
            <h4 class="info-block-title">{{ t.get_in_touch }}</h4>
            <p class="info-block-desc">
              {{ t.desc }}
            </p>

            <div class="info-items mt-5">
              <div class="info-item">
                <span class="info-label">{{ t.email || 'EMAIL' }}</span>
                <a href="mailto:isomiddinovshaxzod007@gmail.com" class="info-value hover-underline">isomiddinovshaxzod007@gmail.com</a>
              </div>
              <div class="info-item mt-4">
                <span class="info-label">{{ t.phone || 'PHONE' }}</span>
                <a href="tel:+998940073989" class="info-value hover-underline">+998 94 007 39 89</a>
              </div>
              <div class="info-item mt-4">
                <span class="info-label">{{ t.location || 'LOCATION' }}</span>
                <span class="info-value">Tashkent, Uzbekistan</span>
              </div>
            </div>

            <!-- SOCIALS -->
            <div class="social-row mt-5">
              <a href="https://www.linkedin.com/in/shaxzod-isomiddinov-52922b366/" class="social-link" target="_blank" v-magnetic="10">
                LinkedIn
              </a>
              <span class="separator">/</span>
              <a href="https://t.me/Shaxzod_Isomiddinov" class="social-link" target="_blank" v-magnetic="10">
                Telegram
              </a>
              <span class="separator">/</span>
              <a href="https://github.com/Shaxzod-hp" class="social-link" target="_blank" v-magnetic="10">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- ── FORM ── -->
        <div class="col-lg-7 animate-up" style="--delay: 0.4s">
          <form class="minimal-form" @submit.prevent="sendMessage" novalidate>
            <!-- Success banner -->
            <div class="success-banner" v-if="sent">
              <i class="bi bi-check-circle-fill"></i>
              {{ t.success }}
            </div>

            <div class="row g-4">
              <div class="col-md-6">
                <div class="input-wrapper">
                  <input type="text" class="minimal-input" v-model="name" placeholder=" " required />
                  <label class="floating-label">{{ t.form.name }}</label>
                  <div class="input-line"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-wrapper">
                  <input type="email" class="minimal-input" v-model="email" placeholder=" " required />
                  <label class="floating-label">{{ t.form.email }}</label>
                  <div class="input-line"></div>
                </div>
              </div>
              <div class="col-12">
                <div class="input-wrapper">
                  <input type="text" class="minimal-input" v-model="subject" placeholder=" " />
                  <label class="floating-label">{{ t.form.subject }}</label>
                  <div class="input-line"></div>
                </div>
              </div>
              <div class="col-12">
                <div class="input-wrapper">
                  <textarea class="minimal-input" rows="4" v-model="message" placeholder=" " required></textarea>
                  <label class="floating-label">{{ t.form.message }}</label>
                  <div class="input-line"></div>
                </div>
              </div>
              <div class="col-12 mt-5">
                <button type="submit" class="btn-primary-custom w-100 py-3" v-magnetic="5">
                  {{ t.form.submit }} <i class="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.contact-section {
  background: transparent;
  padding: 120px 0;
  border-top: 1px solid var(--border-color);
}

/* ─── HEADER ─── */
.editorial-title {
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--text-color);
  margin: 0;
  max-width: 900px;
}

.text-accent {
  color: var(--accent);
}

/* ─── INFO BLOCK ─── */
.info-block {
  padding-right: 40px;
}

.info-block-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 16px;
}

.info-block-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-label {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.info-value {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
  text-decoration: none;
}

.hover-underline {
  position: relative;
  display: inline-block;
  width: fit-content;
}

.hover-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.hover-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* ─── SOCIALS ─── */
.social-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.social-link {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.social-link:hover {
  color: var(--accent);
}

.separator {
  color: var(--border-color);
}

/* ─── MINIMAL FORM ─── */
.minimal-form {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.success-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 230, 118, 0.12);
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 16px;
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 24px;
}

/* ─── INPUTS ─── */
.input-wrapper {
  position: relative;
  padding-top: 12px;
}

.minimal-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 12px 0;
  color: var(--text-color);
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  resize: none;
}

.floating-label {
  position: absolute;
  left: 0;
  top: 24px;
  font-size: 0.9rem;
  color: var(--text-muted);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.minimal-input:focus ~ .floating-label,
.minimal-input:not(:placeholder-shown) ~ .floating-label {
  top: -4px;
  font-size: 0.7rem;
  color: var(--accent);
}

.input-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.minimal-input:focus ~ .input-line {
  transform: scaleX(1);
  transform-origin: left;
}

/* ─── ANIMATIONS ─── */
.animate-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.animate-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 991px) {
  .info-block {
    padding-right: 0;
  }
  
  .minimal-form {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }

  .editorial-title {
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    line-height: 1.1;
  }

  .info-block-title {
    font-size: 1.2rem;
  }

  .info-value {
    font-size: 1rem;
    word-break: break-all;
  }

  .minimal-form {
    padding: 20px;
  }

  .social-row {
    gap: 12px;
  }
}
</style>
