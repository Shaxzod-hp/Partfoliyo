<script setup>
import { computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.projects || { items: [] });

import educationImg from "@/assets/project/Education.png";
import newsImg from "@/assets/project/news.avif";
import adminImg from "@/assets/project/admin.png";
import marketImg from "@/assets/project/Market.png";
import crmImg from "@/assets/project/CRM.png";

const projects = [
  { image: educationImg, github: "https://github.com/RizaSoft-Group/riza-edu.git", live: "https://github.com/RizaSoft-Group/riza-edu.git" },
  { image: newsImg, github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#" },
  { image: adminImg, github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#" },
  { image: marketImg, github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#" },
  { image: crmImg, github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#" },
];

const translatedProjects = computed(() =>
  projects.map((p, idx) => ({
    ...p,
    title: t.value.items?.[idx]?.title || "Project Title",
    desc: t.value.items?.[idx]?.desc || "Project Description",
  }))
);

// 3D tilt handler
function onMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rotX = ((y - cy) / cy) * -8;
  const rotY = ((x - cx) / cx) * 8;
  card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
}

function onMouseLeave(e) {
  e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
}
</script>

<template>
  <div class="projects-section">
    <div class="container">
      <!-- TITLE -->
      <div class="text-center mb-5 section-header">
        <p class="section-title">{{ t.title }}</p>
        <h2 class="section-heading">{{ t.subtitle }}</h2>
        <div class="title-line"></div>
      </div>

      <!-- PROJECT GRID -->
      <div class="row g-4">
        <div v-for="(project, index) in translatedProjects" :key="index" class="col-lg-4 col-md-6"
          :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="project-card" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
            <!-- Image -->
            <div class="project-img-wrapper">
              <img :src="project.image" :alt="project.title" />
              <div class="img-overlay"></div>
            </div>

            <!-- Content -->
            <div class="project-content">
              <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h4 class="project-title">{{ project.title }}</h4>
              <p class="project-desc">{{ project.desc }}</p>
              <div class="project-actions">
                <a :href="project.live" target="_blank" class="action-btn action-live">
                  <i class="bi bi-box-arrow-up-right"></i>
                  {{ t.btn_live }}
                </a>
                <a :href="project.github" target="_blank" class="action-btn action-github">
                  <i class="bi bi-github"></i>
                  {{ t.btn_github }}
                </a>
              </div>
            </div>

            <!-- Glow on hover -->
            <div class="card-glow"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.projects-section {
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

/* ─── CARD ─── */
.project-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  animation: fadeInUp 0.7s ease both;
  cursor: pointer;
  will-change: transform;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px var(--accent-glow);
}

/* hover glow overlay */
.card-glow {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: radial-gradient(circle at 50% 50%, var(--accent-dim), transparent 70%);
  opacity: 0;
  transition: opacity 0.35s;
  pointer-events: none;
  z-index: 0;
}

.project-card:hover .card-glow {
  opacity: 1;
}

/* ─── IMAGE ─── */
.project-img-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  transition: transform 0.5s ease;
  display: block;
}

.project-card:hover .project-img-wrapper img {
  transform: scale(1.08);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(7, 9, 30, 0.7) 100%);
}

/* ─── CONTENT ─── */
.project-content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

.project-number {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 6px;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 8px;
  line-height: 1.3;
}

.project-desc {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── BUTTONS ─── */
.project-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.25s ease;
  border: 1.5px solid transparent;
}

.action-live {
  background: var(--accent);
  color: #07091e;
  box-shadow: 0 4px 14px var(--accent-dim);
}

.action-live:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow);
  color: #07091e;
}

.action-github {
  background: transparent;
  border-color: var(--border-color);
  color: var(--text-muted);
}

.action-github:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
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
