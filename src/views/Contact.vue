<script setup>
import { ref, computed } from "vue";
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
</script>

<template>
  <div class="contact-section">
    <div class="container">

      <!-- TITLE -->
      <div class="text-center mb-5 section-header">
        <p class="section-title">{{ t.title }}</p>
        <h2 class="section-heading">{{ t.subtitle }}</h2>
        <div class="title-line"></div>
      </div>

      <div class="row g-5 align-items-start mb-5">

        <!-- ── CONTACT INFO ── -->
        <div class="col-lg-5">
          <div class="info-panel">
            <h4 class="info-panel-title">Let's connect</h4>
            <p class="info-panel-subtitle">I'm open to freelance projects and full-time roles. Let me know how I can
              help!</p>

            <div class="info-cards">
              <div class="info-card" v-for="(item, i) in [
                { icon: 'bi-envelope', label: t.email, val: 'isomiddinovshaxzod007@gmail.com', href: 'mailto:isomiddinovshaxzod007@gmail.com' },
                { icon: 'bi-telephone', label: t.phone, val: '+998 94 007 39 89', href: 'tel:+998940073989' },
                { icon: 'bi-geo-alt', label: t.location, val: 'Tashkent, Uzbekistan', href: '#' },
              ]" :key="i" :style="{ animationDelay: (i * 0.12) + 's' }">
                <div class="info-card-icon">
                  <i :class="['bi', item.icon]"></i>
                </div>
                <div>
                  <span class="info-card-label">{{ item.label }}</span>
                  <a :href="item.href" class="info-card-val">{{ item.val }}</a>
                </div>
              </div>
            </div>

            <!-- SOCIALS -->
            <div class="social-row mt-4">
              <a href="https://www.linkedin.com/in/shaxzod-isomiddinov-52922b366/" class="social-pill" target="_blank">
                <i class="bi bi-linkedin"></i><span>LinkedIn</span>
              </a>
              <a href="https://t.me/Shaxzod_Isomiddinov" class="social-pill" target="_blank">
                <i class="bi bi-telegram"></i><span>Telegram</span>
              </a>
              <a href="https://github.com/Shaxzod-hp" class="social-pill" target="_blank">
                <i class="bi bi-github"></i><span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <!-- ── FORM ── -->
        <div class="col-lg-7">
          <form class="glass-form" @submit.prevent="sendMessage" novalidate>
            <!-- Success banner -->
            <div class="success-banner" v-if="sent">
              <i class="bi bi-check-circle-fill"></i>
              {{ t.success }}
            </div>

            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ t.form.name }}</label>
                  <input type="text" class="glass-input" v-model="name" :placeholder="t.form.name" required />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ t.form.email }}</label>
                  <input type="email" class="glass-input" v-model="email" :placeholder="t.form.email" required />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>{{ t.form.subject }}</label>
                  <input type="text" class="glass-input" v-model="subject" :placeholder="t.form.subject" />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>{{ t.form.message }}</label>
                  <textarea class="glass-input" rows="5" v-model="message" :placeholder="t.form.message"
                    required></textarea>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="submit-btn">
                  <i class="bi bi-send-fill me-2"></i>{{ t.form.submit }}
                  <span class="btn-glow"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- MAP -->
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d22766.439149676986!2d69.28636!3d41.37533!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x38ae8d6c57617373%3A0x4b0f7e76dfec5113!2s3A%2C%20100190%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.3782114!2d69.2812453!4m0!5e1!3m2!1sen!2sus!4v1772735412579!5m2!1sen!2sus"
          width="100%" height="380" style="border:0" allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.contact-section {
  background: transparent;
  padding: 100px 0 60px;
}

/* ─── HEADER ─── */
.section-header {
  animation: fadeInDown 0.8s ease both;
}

.title-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #00cfff);
  border-radius: 3px;
  margin: 16px auto 0;
}

/* ─── INFO PANEL ─── */
.info-panel {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  animation: fadeInLeft 0.9s ease both;
}

.info-panel-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
}

.info-panel-subtitle {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 24px;
}

/* ─── INFO CARDS ─── */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg-primary, #07091e);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 14px 16px;
  transition: 0.3s ease;
  animation: fadeInLeft 0.7s ease both;
  text-decoration: none;
}

.info-card:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
  transform: translateX(4px);
}

.info-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--accent-dim);
  border: 1px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent);
  flex-shrink: 0;
}

.info-card>div {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.info-card-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.info-card-val {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;
}

.info-card:hover .info-card-val {
  color: var(--accent);
}

/* ─── SOCIAL PILLS ─── */
.social-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.25s ease;
}

.social-pill:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

/* ─── GLASS FORM ─── */
.glass-form {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(10px);
  animation: fadeInRight 0.9s ease both;
  position: relative;
  overflow: hidden;
}

.glass-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), #00cfff);
}

/* ─── SUCCESS BANNER ─── */
.success-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 230, 118, 0.12);
  border: 1px solid var(--accent);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 16px;
  animation: slideDown 0.4s ease both;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── FORM GROUP ─── */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ─── INPUTS ─── */
.glass-input {
  width: 100%;
  background: var(--bg-primary, #07091e);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--text-color);
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.25s, box-shadow 0.25s;
  outline: none;
  resize: none;
}

.glass-input::placeholder {
  color: var(--text-muted);
}

.glass-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

/* ─── SUBMIT BUTTON ─── */
.submit-btn {
  position: relative;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--accent), #00cfff);
  color: #07091e;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px var(--accent-glow);
}

.submit-btn:active {
  transform: translateY(0);
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent);
  pointer-events: none;
}

/* ─── MAP ─── */
.map-wrapper {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.9s ease 0.3s both;
}

/* ─── ANIMATIONS ─── */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
