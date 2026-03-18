<script setup>
import { useSettingsStore } from "../../stores/settings";
import { translations } from "../../constants/translations";
import { computed } from "vue";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.nav || {});
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3">
    <div class="container p-0">
      <a href="#home" class="navbar-brand fw-bold fs-3 m-0 p-0 text-color"> Shaxzod.dev </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-3 align-items-center">
          <li class="nav-item">
            <a href="#home" class="nav-link">{{ t.home }}</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">{{ t.about }}</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link">{{ t.services }}</a>
          </li>
          <li class="nav-item">
            <a href="#project" class="nav-link">{{ t.project }}</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">{{ t.contact }}</a>
          </li>

          <!-- THEME TOGGLE -->
          <li class="nav-item ms-lg-3">
            <button class="btn theme-btn" @click="settings.toggleTheme">
              <i :class="settings.theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
            </button>
          </li>

          <!-- LANGUAGE DROPDOWN -->
          <li class="nav-item dropdown">
            <button class="btn p-0 dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-globe fs-5"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow">
              <li>
                <button class="dropdown-item" @click="settings.setLanguage('en')"
                  :class="{ active: settings.lang === 'en' }">
                  English
                </button>
              </li>
              <li>
                <button class="dropdown-item" @click="settings.setLanguage('uz')"
                  :class="{ active: settings.lang === 'uz' }">
                  O'zbek
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.text-color {
  color: var(--text-color) !important;
}

.navbar {
  background: var(--navbar-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--border-color);
  height: 70px;
}

.nav-link {
  transition: 0.3s;
  color: var(--text-color) !important;
}

.nav-link:hover {
  color: #04dc04 !important;
}

.theme-btn,
.nav-item .bi-globe {
  color: var(--text-color);
  font-size: 1.2rem;
  transition: 0.3s;
  background: transparent;
  border: none;
}

.no-caret::after {
  display: none !important;
}

.dropdown-menu {
  min-width: 120px !important;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 0;
}

.dropdown-item {
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  transition: 0.2s;
  background: transparent;
}

.dropdown-item:hover,
.dropdown-item.active {
  background: rgba(4, 220, 4, 0.1);
  color: #198754;
}

@media (max-width: 991px) {
  .navbar-collapse {
    background: var(--bg-primary);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
  }
}
</style>
