<script setup>
import { useSettingsStore } from "../../stores/settings";
import { translations } from "../../constants/translations";
import { computed, ref, onMounted, onUnmounted } from "vue";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.nav || {});

// Active section tracking for nav highlight
const activeSection = ref("home");

function onScroll() {
  const sections = ["home", "about", "services", "project", "contact"];
  let current = "home";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) {
      current = id;
    }
  }
  activeSection.value = current;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top py-0">
    <div class="container">
      <!-- BRAND -->
      <a href="#home" class="navbar-brand">
        <span class="brand-bracket">&lt;</span>
        <span class="brand-name">Shaxzod</span>
        <span class="brand-dot">.dev</span>
        <span class="brand-bracket">/&gt;</span>
      </a>

      <!-- TOGGLER -->
      <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false">
        <span class="toggler-bar"></span>
        <span class="toggler-bar"></span>
        <span class="toggler-bar"></span>
      </button>

      <!-- NAV LINKS -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-1 align-items-center">
          <li class="nav-item" v-for="link in [
            { href: '#home', label: t.home, id: 'home' },
            { href: '#about', label: t.about, id: 'about' },
            { href: '#services', label: t.services, id: 'services' },
            { href: '#project', label: t.project, id: 'project' },
            { href: '#contact', label: t.contact, id: 'contact' },
          ]" :key="link.id">
            <a :href="link.href" class="nav-link" :class="{ 'nav-link-active': activeSection === link.id }">
              {{ link.label }}
            </a>
          </li>

          <li class="nav-item ms-2">
            <button class="icon-btn" @click="settings.toggleTheme"
              :title="settings.theme === 'dark' ? 'Light mode' : 'Dark mode'">
              <i :class="settings.theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
            </button>
          </li>

          <!-- LANGUAGE DROPDOWN -->
          <li class="nav-item dropdown">
            <button class="icon-btn dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-globe"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-lg">
              <li>
                <button class="dropdown-item" @click="settings.setLanguage('en')"
                  :class="{ active: settings.lang === 'en' }">🇺🇸 English</button>
              </li>
              <li>
                <button class="dropdown-item" @click="settings.setLanguage('uz')"
                  :class="{ active: settings.lang === 'uz' }">🇺🇿 O'zbek</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ─── NAVBAR ─── */
.navbar {
  background: var(--navbar-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  height: 68px;
  transition: background 0.35s ease;
}

/* ─── BRAND ─── */
.navbar-brand {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.brand-bracket {
  color: var(--accent);
  font-weight: 800;
}

.brand-name {
  color: var(--text-color);
}

.brand-dot {
  color: var(--accent);
}

/* ─── NAV LINK ─── */
.nav-link {
  color: var(--text-muted) !important;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 12px !important;
  border-radius: 8px;
  transition: 0.25s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transition: transform 0.25s ease;
}

.nav-link:hover {
  color: var(--text-color) !important;
  background: var(--accent-dim);
}

.nav-link:hover::after,
.nav-link-active::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-link-active {
  color: var(--accent) !important;
  background: var(--accent-dim);
}

/* ─── ICON BUTTONS ─── */
.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-muted);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
}

.icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

.no-caret::after {
  display: none !important;
}

/* ─── DROPDOWN ─── */
.dropdown-menu {
  background: var(--bg-secondary, #0c1033);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 6px;
  min-width: 140px;
  overflow: hidden;
}

.dropdown-item {
  color: var(--text-muted);
  border-radius: 8px;
  font-size: 0.88rem;
  padding: 8px 12px;
  transition: 0.2s;
  background: transparent;
}

.dropdown-item:hover,
.dropdown-item.active {
  background: var(--accent-dim);
  color: var(--accent);
}

/* ─── CUSTOM HAMBURGER ─── */
.custom-toggler {
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.custom-toggler:focus {
  box-shadow: none;
}

.toggler-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-color);
  border-radius: 2px;
  transition: 0.3s;
}

/* ─── MOBILE COLLAPSE ─── */
@media (max-width: 991px) {
  .navbar-collapse {
    background: var(--navbar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 16px;
    margin-top: 8px;
  }

  .navbar-nav {
    gap: 4px !important;
  }

  .nav-link {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
