<script setup>
import { computed, onMounted, ref } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang]?.services || { items: [], skills: [] });

const skills = computed(() => t.value.skills || [
  { name: 'PHP', desc: 'Server-side Development', link: 'https://www.php.net' },
  { name: 'LARAVEL', desc: 'Backend Architecture', link: 'https://laravel.com' },
  { name: 'VUE.JS', desc: 'Interactive Interfaces', link: 'https://vuejs.org' },
  { name: 'JAVASCRIPT', desc: 'Frontend Logic', link: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'HTML & CSS', desc: 'Semantic Structure & Style', link: 'https://developer.mozilla.org/docs/Web' },
  { name: 'MYSQL', desc: 'Database Design', link: 'https://www.mysql.com' }
]);

const hoveredIndex = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="skills-section">

    <div class="container pb-5">
      <!-- TITLE -->
      <div class="section-header animate-up mb-5">
        <p class="section-title mb-2">{{ t.title || 'CORE CAPABILITIES' }}</p>
        <h2 class="section-heading m-0">{{ t.subtitle || 'Technologies' }}</h2>
      </div>

      <!-- INTERACTIVE LIST -->
      <div class="skills-list-container animate-up" style="--delay: 0.2s">
        <a
          v-for="(skill, i) in skills"
          :key="i"
          :href="skill.link || '#'"
          target="_blank"
          rel="noopener noreferrer"
          class="skill-row"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
          :class="{ 'dimmed': hoveredIndex !== null && hoveredIndex !== i }"
        >
          <div class="skill-row-inner">
            <h3 class="skill-name">{{ skill.name }}</h3>
            <span class="skill-desc">{{ skill.desc }}</span>
            <i class="bi bi-arrow-up-right skill-arrow"></i>
          </div>
        </a>
      </div>
    </div>

    <!-- MARQUEE -->
    <div class="marquee-wrapper mt-5 pt-5">
      <div class="marquee">
        <div class="marquee-content">
          <span>PHP</span>
          <span class="separator">—</span>
          <span>LARAVEL</span>
          <span class="separator">—</span>
          <span>VUE.JS</span>
          <span class="separator">—</span>
          <span>JAVASCRIPT</span>
          <span class="separator">—</span>
          <span>MYSQL</span>
          <span class="separator">—</span>
          <span>API</span>
          <span class="separator">—</span>
          <span>UI/UX</span>
          <span class="separator">—</span>
          <span>DEVELOPMENT</span>
          <span class="separator">—</span>
        </div>
        <div class="marquee-content" aria-hidden="true">
          <a href="https://www.php.net/"><span>PHP</span></a>
          <span class="separator">—</span>
          <a href="https://laravel.com/"><span>LARAVEL</span></a>
          <span class="separator">—</span>
          <a href="https://vuejs.org/"><span>VUE.JS</span></a>
          <span class="separator">—</span>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><span>JAVASCRIPT</span></a>
          <span class="separator">—</span>
          <a href="https://www.mysql.com/"><span>MYSQL</span></a>
          <span class="separator">—</span>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API"><span>API</span></a>
          <span class="separator">—</span>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><span>UI/UX</span></a>
          <span class="separator">—</span>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><span>DEVELOPMENT</span></a>
          <span class="separator">—</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* ─── SECTION ─── */
.skills-section {
  padding: 120px 0;
  background: transparent;
  overflow: hidden;
}

/* ─── INTERACTIVE LIST ─── */
.skills-list-container {
  border-top: 1px solid var(--border-color);
}

.skill-row {
  display: block;
  text-decoration: none;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.skill-row.dimmed {
  opacity: 0.3;
}

.skill-row-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-row:hover .skill-row-inner {
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.02);
}

.skill-name {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--text-color);
  margin: 0;
  letter-spacing: -0.02em;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s;
}

.skill-row:hover .skill-name {
  color: var(--accent);
  transform: translateX(10px);
}

.skill-desc {
  font-size: 1.1rem;
  color: var(--text-muted);
  flex: 1;
  text-align: right;
  padding-right: 40px;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-row:hover .skill-desc {
  opacity: 1;
  transform: translateX(0);
}

.skill-arrow {
  font-size: 2rem;
  color: var(--accent);
  opacity: 0;
  transform: translateX(-20px) rotate(-45deg);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-row:hover .skill-arrow {
  opacity: 1;
  transform: translateX(0) rotate(-45deg);
}

/* ─── MARQUEE ─── */
.marquee-wrapper {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 24px 0;
  background: rgba(255, 255, 255, 0.02);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
}

.marquee {
  display: flex;
  white-space: nowrap;
}

.marquee:hover .marquee-content {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
  align-items: center;
  animation: scrollMarquee 20s linear infinite;
}

.marquee-content span {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-muted);
  text-transform: uppercase;
  transition: color 0.3s, -webkit-text-stroke 0.3s;
}

.marquee-content span:hover {
  color: var(--accent);
  -webkit-text-stroke: 1px var(--accent);
}

.separator {
  margin: 0 40px;
  color: var(--accent) !important;
  -webkit-text-stroke: 0px !important;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

/* ─── ANIMATIONS ─── */
.animate-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay, 0s);
}

.animate-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .skills-section {
    padding: 60px 0;
  }

  .skill-row-inner {
    flex-wrap: wrap;
    padding: 20px 0;
  }

  .skill-row:hover .skill-row-inner {
    padding: 20px 12px;
  }

  .skill-name {
    font-size: clamp(1.5rem, 7vw, 2.5rem);
  }

  .skill-desc {
    flex: 100%;
    text-align: left;
    padding-right: 0;
    margin-top: 8px;
    font-size: 0.85rem;
    opacity: 1;
    transform: none;
  }

  .skill-arrow {
    display: none;
  }

  .marquee-content span {
    font-size: clamp(1.5rem, 6vw, 2.2rem);
  }

  .separator {
    margin: 0 20px;
  }
}
</style>
