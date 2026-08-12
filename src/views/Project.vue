<script setup>
import { computed, onMounted } from "vue";
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
  { image: educationImg, github: "https://github.com/RizaSoft-Group/riza-edu.git", live: "https://github.com/RizaSoft-Group/riza-edu.git", type: 'featured' },
  { image: newsImg, github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#", type: 'regular' },
  { image: adminImg, github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#", type: 'regular' },
  { image: marketImg, github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#", type: 'wide' },
  { image: crmImg, github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#", type: 'regular' },
];

const translatedProjects = computed(() =>
  projects.map((p, idx) => ({
    ...p,
    title: t.value.items?.[idx]?.title || "Project Title",
    desc: t.value.items?.[idx]?.desc || "Project Description",
  }))
);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-up, .project-card').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="projects-section">
    <div class="container">
      <!-- EDITORIAL HEADER -->
      <div class="project-header animate-up">
        <div class="row align-items-end">
          <div class="col-lg-8">
            <h2 class="editorial-title">
              {{ t.title || 'SELECTED' }} <span class="text-accent">{{ t.subtitle || 'WORK' }}</span>
            </h2>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <a href="https://github.com/Shaxzod-hp" target="_blank" class="view-all-link" v-magnetic="10">
              {{ t.view_all || 'VIEW ALL WORK' }} <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- EDITORIAL PROJECT GRID -->
      <div class="editorial-grid">
        <div 
          v-for="(project, index) in translatedProjects" 
          :key="index" 
          class="project-card"
          :class="`card-${project.type}`"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <!-- Image -->
          <div class="project-img-wrapper">
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <div class="img-overlay"></div>
          </div>

          <!-- Content -->
          <div class="project-content">
            <div class="content-left">
              <div class="project-number">0{{ index + 1 }}</div>
              <h4 class="project-title">{{ project.title }}</h4>
              <p class="project-desc">{{ project.desc }}</p>
            </div>
            
            <div class="project-actions">
              <a :href="project.github" target="_blank" class="action-btn" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a :href="project.live" target="_blank" class="action-btn" aria-label="Live Demo">
                <i class="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.projects-section {
  padding: 120px 0;
  background: transparent;
}

/* ─── GRID LAYOUT ─── */
.editorial-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  grid-auto-flow: dense;
}

.project-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  display: flex;
  flex-direction: column;
}

.project-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Specific Layout Rules */
.card-featured {
  grid-column: span 12;
}

.card-regular {
  grid-column: span 6;
}

.card-wide {
  grid-column: span 12;
}

@media (max-width: 991px) {
  .card-regular, .card-featured, .card-wide {
    grid-column: span 12;
  }
}

/* ─── IMAGE ─── */
.project-img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-secondary);
}

.card-featured .project-img-wrapper, 
.card-wide .project-img-wrapper {
  aspect-ratio: 21 / 9;
}

@media (max-width: 991px) {
  .card-featured .project-img-wrapper, 
  .card-wide .project-img-wrapper {
    aspect-ratio: 16 / 9;
  }
}

.project-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(4, 5, 9, 0.8) 100%);
  opacity: 0.5;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.project-card:hover .project-img-wrapper img {
  transform: scale(1.05);
}

.project-card:hover .img-overlay {
  opacity: 0.2;
}

/* ─── CONTENT ─── */
.project-content {
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex: 1;
  background: var(--bg-primary);
  transition: background 0.3s ease;
}

.project-card:hover .project-content {
  background: var(--bg-secondary);
}

.content-left {
  flex: 1;
}

.project-number {
  font-size: 0.75rem;
  font-family: monospace;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 12px;
}

.project-title {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 12px;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: var(--accent);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
}

/* ─── ACTIONS ─── */
.project-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.action-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg-primary);
  transform: translateY(-4px);
}

/* ─── ANIMATIONS ─── */
.animate-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 60px 0;
  }

  .editorial-title {
    font-size: clamp(1.8rem, 8vw, 2.8rem);
  }

  .view-all-link {
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .project-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .editorial-grid {
    gap: 16px;
  }
}
</style>
