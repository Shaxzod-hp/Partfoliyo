<script setup>
import { computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.about || {});
const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- IMAGE -->
        <div class="col-lg-5 image ">
          <div class="image-wrapper">
            <img :src="`${baseUrl}image/ozim.jpg`" alt="Profile" />
          </div>
        </div>

        <!-- CONTENT -->
        <div class="col-lg-7 content">
          <h6 class="text-success mb-3">{{ t.title }}</h6>
          <h2 class="fw-bold display-5 mb-4 text-color">
            <span>{{ t.subtitle }}</span><br />
            {{ t.role }}
          </h2>

          <p class="lead mb-4 text-color">
            {{ t.desc }}
          </p>

          <!-- INFO -->
          <div class="row mb-4 small-info">
            <div class="col-md-6">
              <p><strong>{{ t.experience }}:</strong> 1+ Year</p>
              <p><strong>{{ t.location }}:</strong> {{ t.uzbekistan }}</p>
            </div>
            <div class="col-md-6">
              <p>
                <strong>{{ t.email }}:</strong>
                <a href="mailto:isomiddinovshaxzod007@gmail.com"
                  class="text-decoration-none text-white ms-3">isomiddinovshaxzod007@gmail.com</a>
              </p>
              <p><strong class="me-2">{{ t.freelance }}:</strong>{{ t.available }}</p>
            </div>
          </div>

          <!-- SKILLS -->
          <div class="skills mb-4">
            <div class="skill-item">
              <div class="d-flex justify-content-between text-color">
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 100%"></div>
              </div>
            </div>

            <div class="skill-item">
              <div class="d-flex justify-content-between text-color">
                <span>CSS / Bootstrap</span>
                <span>100%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 100%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between text-color">
                <span>ElementPlus + Tailwind CSS</span>
                <span>100%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 100%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between text-color">
                <span>JavaScript</span>
                <span>50%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 50%"></div>
              </div>
            </div>

            <div class="skill-item">
              <div class="d-flex justify-content-between text-color">
                <span>Vue.js + Vuex + Pinia</span>
                <span>80%</span>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" style="width: 80%"></div>
              </div>
            </div>
          </div>

          <!-- COUNTERS -->
          <div class="row text-center mb-4">
            <div class="col">
              <h3 class="text-success fw-bold">3+</h3>
              <p class="text-color">{{ t.counters.projects }}</p>
            </div>
            <div class="col">
              <h3 class="text-success fw-bold">1+</h3>
              <p class="text-color">{{ t.counters.exp_years }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center gy-5 mt-5">
        <div class="col-lg-7">
          <div class="skill mt-5">
            <p class="fs-5 text-color">
              {{ t.favourite }} <span class="text-success">{{ t.skill }}</span>
            </p>
            <h1 class="mb-4 text-color">{{ t.my_skill }}</h1>
            <p v-for="(desc, idx) in t.skills_desc" :key="idx" class="text-muted-custom">
              {{ desc }}
            </p>
          </div>
        </div>
        <div class="col-5 skill-image">
          <div class="skills-grid">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=""
              class="bg-white rounded-pill p-1" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: transparent;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.image-wrapper img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #198754;
  box-shadow: 0 0 40px rgba(25, 135, 84, 0.6);
  transition: 0.4s;
}

.image-wrapper img:hover {
  transform: scale(1.05);
}

.progress {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
}

.progress-bar {
  transition: 1s ease;
}

.skill-item {
  margin-bottom: 15px;
}

.small-info p {
  margin-bottom: 5px;
  color: var(--text-color);
}

.text-color {
  color: var(--text-color);
}

.text-muted-custom {
  color: var(--text-muted);
}

.skill-image img {
  width: 100px;
  height: auto;
  border-radius: 10px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 30px;
  max-width: 500px;
  margin: auto;
}

.skills-grid img {
  width: 60px;
  transition: 0.3s;
}

.skills-grid img:hover {
  transform: scale(1.2);
}

.content {
  animation: fadeInUp 1s ease;
}

.image {
  animation: fadeIn 1s ease;
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .image-wrapper img {
    width: 250px;
    height: 250px;
  }
}
</style>
