<script setup>
import { computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.services || { items: [] });

const icons = [
  "bi-code-slash",
  "bi-phone",
  "bi-palette2",
  "bi-lightning-charge",
  "bi-diagram-3",
  "bi-speedometer2",
];
</script>

<template>
  <div class="services-section">
    <div class="container">
      <!-- TITLE -->
      <div class="text-center mb-5 section-header">
        <p class="section-title">{{ t.title }}</p>
        <h2 class="section-heading">{{ t.subtitle }}</h2>
        <div class="title-line"></div>
      </div>

      <!-- SERVICE CARDS: 3D FLIP -->
      <div class="row g-4">
        <div v-for="(service, index) in t.items" :key="index" class="col-lg-4 col-md-6">
          <div class="flip-card" :style="{ animationDelay: (index * 0.1) + 's' }">
            <div class="flip-inner">
              <!-- FRONT -->
              <div class="flip-front">
                <div class="card-icon-wrapper">
                  <i :class="['bi', icons[index]]"></i>
                  <div class="icon-glow"></div>
                </div>
                <h4 class="card-title">{{ service.title }}</h4>
                <div class="card-line"></div>
                <p class="card-hint">Hover to see more</p>
              </div>
              <!-- BACK -->
              <div class="flip-back">
                <div class="back-icon">
                  <i :class="['bi', icons[index]]"></i>
                </div>
                <h4 class="card-title">{{ service.title }}</h4>
                <p class="card-desc">{{ service.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.services-section {
  background: transparent;
  padding: 100px 0;
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

/* ─── 3D FLIP CARD ─── */
.flip-card {
  height: 260px;
  perspective: 1000px;
  cursor: pointer;
  animation: fadeInUp 0.7s ease both;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

/* ─── FRONT / BACK ─── */
.flip-front,
.flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 24px;
  border: 1px solid var(--border-color);
  transition: border-color 0.3s;
}

.flip-front {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
}

.flip-back {
  background: linear-gradient(135deg, rgba(0, 230, 118, 0.08), rgba(0, 207, 255, 0.05));
  border-color: var(--accent);
  transform: rotateY(180deg);
  text-align: center;
}

/* ─── ICON ─── */
.card-icon-wrapper {
  position: relative;
  width: 72px;
  height: 72px;
  margin-bottom: 18px;
}

.card-icon-wrapper i {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: var(--accent);
  z-index: 1;
}

.icon-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent-dim);
  animation: iconPulse 2.5s ease-in-out infinite;
}

@keyframes iconPulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.4;
  }
}

.back-icon i {
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 10px;
  display: block;
}

/* ─── CARD TEXT ─── */
.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin: 0 0 8px;
}

.card-line {
  width: 30px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  margin: 8px auto;
}

.card-hint {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 0;
  letter-spacing: 0.5px;
  opacity: 0.7;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
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
