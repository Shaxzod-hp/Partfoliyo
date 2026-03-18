<script setup>
import { computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.services || { items: [] });

const getIcon = (index) => {
  const icons = [
    "bi-code-slash",
    "bi-phone",
    "bi-palette",
    "bi-lightning-charge",
    "bi-diagram-3",
    "bi-speedometer2",
  ];
  return icons[index];
};
</script>

<template>
  <section id="services" class="services-section">
    <div class="container content">
      <!-- TITLE -->
      <div class="text-center mb-5">
        <p class="text-success mb-2 fs-5">{{ t.title }}</p>
        <h2 class="fw-bold text-color">{{ t.subtitle }}</h2>
      </div>

      <!-- SERVICES -->
      <div class="row g-4">
        <div v-for="(service, index) in t.items" :key="index" class="col-lg-4 col-md-6">
          <div class="service-card text-center">
            <i :class="['bi', getIcon(index)]"></i>
            <h4 class="text-color">{{ service.title }}</h4>
            <p class="text-muted-custom">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: transparent;
  padding-top: 100px;
  padding-bottom: 100px;
}

.service-card {
  background: var(--card-bg);
  padding: 40px 25px;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  transition: 0.4s;
  height: 100%;
  animation: fadeInUp 0.8s ease backwards;
}

/* Staggered animation delays */
.col-lg-4:nth-child(1) .service-card {
  animation-delay: 0.1s;
}

.col-lg-4:nth-child(2) .service-card {
  animation-delay: 0.2s;
}

.col-lg-4:nth-child(3) .service-card {
  animation-delay: 0.3s;
}

.col-lg-4:nth-child(4) .service-card {
  animation-delay: 0.4s;
}

.col-lg-4:nth-child(5) .service-card {
  animation-delay: 0.5s;
}

.col-lg-4:nth-child(6) .service-card {
  animation-delay: 0.6s;
}

.service-card i {
  font-size: 40px;
  color: #198754;
  margin-bottom: 20px;
  display: block;
}

.text-color {
  color: var(--text-color);
}

.text-muted-custom {
  color: var(--text-muted);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #198754;
  box-shadow: 0 0 30px rgba(25, 135, 84, 0.3);
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
