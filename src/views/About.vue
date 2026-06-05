<script setup>
import { computed, ref, onMounted } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.about || {});
const baseUrl = import.meta.env.BASE_URL;

// Progress bar animation on IntersectionObserver
const progressVisible = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      progressVisible.value = true;
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  const el = document.getElementById("about");
  if (el) observer.observe(el);
});

const skills = [
  { label: "HTML5 / CSS3", pct: 100 },
  { label: "CSS / Bootstrap", pct: 100 },
  { label: "JavaScript (ES6+)", pct: 60 },
  { label: "Vue.js + Pinia", pct: 85 },
  { label: "ElementPlus / Tailwind", pct: 100 },
];

const techList = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
];
</script>

<template>
  <div class="about-section">
    <div class="container">

      <!-- ── ROW 1: Profile + Bio ── -->
      <div class="row align-items-center gy-5">
        <!-- IMAGE -->
        <div class="col-lg-5 d-flex justify-content-center">
          <div class="about-img-wrapper">
            <img :src="`${baseUrl}image/ozim.jpg`" alt="Profile" />
            <div class="exp-badge">
              <span class="exp-num">1+</span>
              <span class="exp-txt">Year Exp</span>
            </div>
          </div>
        </div>

        <!-- CONTENT -->
        <div class="col-lg-7 content">
          <p class="section-title">{{ t.title }}</p>
          <h2 class="section-heading mb-3">
            <span class="gradient-text">{{ t.subtitle }}</span><br />
            {{ t.role }}
          </h2>
          <p class="about-desc mb-4">{{ t.desc }}</p>

          <!-- INFO GRID -->
          <div class="info-grid mb-4">
            <div class="info-item">
              <i class="bi bi-briefcase"></i>
              <div>
                <span class="info-label">{{ t.experience }}</span>
                <span class="info-value">1+ Year</span>
              </div>
            </div>
            <div class="info-item">
              <i class="bi bi-geo-alt"></i>
              <div>
                <span class="info-label">{{ t.location }}</span>
                <span class="info-value">{{ t.uzbekistan }}</span>
              </div>
            </div>
            <div class="info-item">
              <i class="bi bi-envelope"></i>
              <div>
                <span class="info-label">{{ t.email }}</span>
                <a href="mailto:isomiddinovshaxzod007@gmail.com"
                  class="info-value info-link">isomiddinovshaxzod007@gmail.com</a>
              </div>
            </div>
            <div class="info-item">
              <i class="bi bi-lightning-charge"></i>
              <div>
                <span class="info-label">{{ t.freelance }}</span>
                <span class="info-value available-badge">{{ t.available }}</span>
              </div>
            </div>
          </div>

          <!-- SKILLS BARS -->
          <div class="skills-bars mb-4">
            <div v-for="(skill, i) in skills" :key="i" class="skill-bar-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-label">{{ skill.label }}</span>
                <span class="skill-pct">{{ skill.pct }}%</span>
              </div>
              <div class="bar-track">
                <div class="bar-fill"
                  :style="{ width: progressVisible ? skill.pct + '%' : '0%', transitionDelay: (i * 0.12) + 's' }"></div>
              </div>
            </div>
          </div>

          <!-- COUNTERS -->
          <div class="counters-row">
            <div class="counter-card">
              <span class="counter-num gradient-text">3+</span>
              <span class="counter-label">{{ t.counters?.projects }}</span>
            </div>
            <div class="counter-card">
              <span class="counter-num gradient-text">1+</span>
              <span class="counter-label">{{ t.counters?.exp_years }}</span>
            </div>
            <div class="counter-card">
              <span class="counter-num gradient-text">5+</span>
              <span class="counter-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── ROW 2: Skills Desc + Tech Icons ── -->
      <div class="row align-items-start gy-5 mt-4">
        <div class="col-lg-7">
          <div class="skills-desc-block">
            <p class="section-title mb-1">
              {{ t.favourite }} <span class="text-accent">{{ t.skill }}</span>
            </p>
            <h2 class="section-heading mb-4">{{ t.my_skill }}</h2>
            <ul class="skills-list">
              <li v-for="(desc, idx) in t.skills_desc" :key="idx">
                <i class="bi bi-check-circle-fill"></i>
                <span>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="tech-grid">
            <div class="tech-icon-card" v-for="(tech, i) in techList" :key="i"
              :style="{ animationDelay: (i * 0.06) + 's' }">
              <img :src="tech.src" :alt="tech.name" />
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.about-section {
  background: transparent;
  padding: 120px 0 80px;
}

/* ─── IMAGE ─── */
.about-img-wrapper {
  position: relative;
  display: inline-block;
}

.about-img-wrapper img {
  width: min(320px, 85vw);
  height: min(320px, 85vw);
  object-fit: cover;
  border-radius: 30px;
  border: 2px solid var(--border-color);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px var(--accent-glow);
  transition: 0.4s ease;
  display: block;
}

.about-img-wrapper img:hover {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), 0 0 60px var(--accent-glow);
}

.exp-badge {
  position: absolute;
  bottom: -16px;
  right: -16px;
  background: var(--accent);
  color: #07091e;
  border-radius: 16px;
  padding: 12px 16px;
  text-align: center;
  font-weight: 800;
  box-shadow: 0 8px 24px var(--accent-glow);
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.exp-num {
  font-size: 1.4rem;
}

.exp-txt {
  font-size: 0.65rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ─── CONTENT ─── */
.content {
  animation: fadeInRight 0.9s ease both;
}

.about-desc {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 0.97rem;
}

/* ─── INFO GRID ─── */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 576px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 12px 14px;
  transition: 0.3s;
}

.info-item:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.info-item i {
  font-size: 1.1rem;
  color: var(--accent);
  margin-top: 2px;
  flex-shrink: 0;
}

.info-item>div {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.info-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-link {
  color: var(--accent) !important;
  text-decoration: none;
  font-size: 0.78rem;
}

.available-badge {
  color: var(--accent) !important;
}

/* ─── SKILL BARS ─── */
.skill-bar-item {
  margin-bottom: 14px;
}

.skill-label {
  font-size: 0.85rem;
  color: var(--text-color);
  font-weight: 500;
}

.skill-pct {
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 700;
}

.bar-track {
  height: 5px;
  background: var(--border-color);
  border-radius: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #00cfff);
  border-radius: 10px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ─── COUNTERS ─── */
.counters-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.counter-card {
  flex: 1;
  min-width: 90px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transition: 0.3s;
}

.counter-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--accent-dim);
}

.counter-num {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.counter-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ─── SKILLS DESC ─── */
.skills-desc-block {
  animation: fadeInLeft 0.9s ease both;
}

.text-accent {
  color: var(--accent);
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skills-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.skills-list li i {
  color: var(--accent);
  margin-top: 2px;
  flex-shrink: 0;
  font-size: 0.9rem;
}

/* ─── TECH GRID ─── */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.tech-icon-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  animation: fadeInUp 0.6s ease both;
}

.tech-icon-card:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 12px 30px var(--accent-dim);
}

.tech-icon-card img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  transition: 0.3s;
}

.tech-icon-card:hover img {
  transform: scale(1.15);
}

.tech-icon-card span {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-weight: 500;
  text-align: center;
}

/* ─── ANIMATIONS ─── */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
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

/* ─── RESPONSIVE ─── */
@media (max-width: 991px) {
  .about-section {
    padding: 100px 0 60px;
  }

  .exp-badge {
    right: 8px;
    bottom: -12px;
  }
}
</style>
