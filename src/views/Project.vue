<script setup>
import { computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.projects || { items: [] });

const projects = [
  { image: "@assets/Education.png", github: "https://github.com/RizaSoft-Group/riza-edu.git", live: "https://github.com/RizaSoft-Group/riza-edu.git" },
  { image: "@assets/news.png", github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#" },
  { image: "@assets/admin.png", github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#" },
  { image: "@assets/Market.png", github: "https://github.com/Shaxzod-hp/Shaxzod", live: "#" },
  { image: "@assets/CRM.png", github: "https://shaxzod-hp.github.io/Iso-Uz/#/access", live: "#" },
];

const translatedProjects = computed(() => {
  return projects.map((p, idx) => {
    const translation = t.value.items?.[idx] || {};
    return {
      ...p,
      title: translation.title || "Project Title",
      desc: translation.desc || "Project Description"
    };
  });
}); 
</script>

<template>
  <section id="project" class="projects-section d-flex align-items-center">
    <div class="container content">
      <!-- TITLE -->
      <div class="text-center mb-5">
        <p class="text-success">{{ t.title }}</p>
        <h2 class="fw-bold text-color">{{ t.subtitle }}</h2>
      </div>

      <!-- PROJECT GRID -->
      <div class="row g-5">
        <div v-for="(project, index) in translatedProjects" :key="index" class="col-lg-4 col-md-6">
          <div class="project-card">
            <img :src="project.image" alt="" />

            <div class="project-overlay">
              <h4>{{ project.title }}</h4>

              <p>{{ project.desc }}</p>

              <div class="buttons">
                <a :href="project.live" target="_blank" class="btn btn-danger btn-sm">
                  {{ t.btn_live }}
                </a>

                <a :href="project.github" target="_blank" class="btn btn-outline-success btn-sm">
                  {{ t.btn_github }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: transparent;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: var(--card-bg);
  animation: fadeInUp 0.8s ease backwards;
}

/* Staggered delays */
.col-lg-4:nth-child(1) .project-card {
  animation-delay: 0.1s;
}

.col-lg-4:nth-child(2) .project-card {
  animation-delay: 0.2s;
}

.col-lg-4:nth-child(3) .project-card {
  animation-delay: 0.3s;
}

.col-lg-4:nth-child(4) .project-card {
  animation-delay: 0.4s;
}

.col-lg-4:nth-child(5) .project-card {
  animation-delay: 0.5s;
}

.project-card:hover {
  box-shadow: 0 10px 50px rgba(25, 135, 84, 0.3);

}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: left;
  background-position: left;
  transition: 0.4s;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transition: 0.4s;
}

.project-overlay h4 {
  color: white;
}

.project-overlay p {
  color: #ccc;
  font-size: 14px;
}

.buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.text-color {
  color: var(--text-color);
}

.content {
  animation: fadeInDown 0.8s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
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
