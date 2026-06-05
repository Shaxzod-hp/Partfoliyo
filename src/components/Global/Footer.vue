<template>
  <footer class="footer-section">
    <!-- Top gradient line -->
    <div class="footer-topline"></div>

    <div class="container">
      <div class="row g-5 py-5">

        <!-- BRAND COL -->
        <div class="col-lg-4 col-md-6">
          <a href="#home" class="footer-brand">
            <span class="brand-bracket">&lt;</span>Shaxzod<span class="brand-dot">.dev</span><span
              class="brand-bracket">/&gt;</span>
          </a>
          <p class="footer-desc mt-3">
            Frontend developer crafting modern, responsive, and user-friendly web experiences with Vue.js and clean
            code.
          </p>
          <div class="footer-socials mt-3">
            <a href="https://www.linkedin.com/in/shaxzod-isomiddinov-52922b366/" target="_blank" class="footer-social"
              title="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="https://t.me/Shaxzod_Isomiddinov" target="_blank" class="footer-social" title="Telegram"><i
                class="bi bi-telegram"></i></a>
            <a href="https://github.com/Shaxzod-hp" target="_blank" class="footer-social" title="GitHub"><i
                class="bi bi-github"></i></a>
            <a href="https://www.instagram.com/isomiddinov__sh" target="_blank" class="footer-social"
              title="Instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <!-- QUICK LINKS -->
        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="footer-heading">Links</h6>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- SERVICES -->
        <div class="col-lg-3 col-md-6 col-6">
          <h6 class="footer-heading">Services</h6>
          <ul class="footer-links">
            <li><a href="#services">Frontend Dev</a></li>
            <li><a href="#services">Responsive Design</a></li>
            <li><a href="#services">Vue.js Apps</a></li>
            <li><a href="#services">API Integration</a></li>
            <li><a href="#services">UI Implementation</a></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="col-lg-3 col-md-6">
          <h6 class="footer-heading">Contact</h6>
          <ul class="footer-contact-list">
            <li>
              <i class="bi bi-envelope"></i>
              <a href="mailto:isomiddinovshaxzod007@gmail.com">isomiddinovshaxzod007@gmail.com</a>
            </li>
            <li>
              <i class="bi bi-telephone"></i>
              <a href="tel:+998940073989">+998 94 007 39 89</a>
            </li>
            <li>
              <i class="bi bi-geo-alt"></i>
              <span>Tashkent, Uzbekistan</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom">
      <div class="container d-flex flex-wrap justify-content-between align-items-center py-3 gap-2">
        <p class="mb-0 footer-copy">
          &copy; 2025 <span class="accent">Shaxzod Isomiddinov</span>. All rights reserved.
        </p>
        <p class="mb-0 footer-made">
          Made with <span class="heart">♥</span> using Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-section {
  background: var(--bg-secondary, #0c1033);
  position: relative;
  z-index: 1;
}

/* gradient top border */
.footer-topline {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), #00cfff, transparent);
}

/* ─── BRAND ─── */
.footer-brand {
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--text-color);
  letter-spacing: 0.5px;
}

.brand-bracket {
  color: var(--accent);
}

.brand-dot {
  color: var(--accent);
}

.footer-desc {
  font-size: 0.87rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 280px;
}

/* socials */
.footer-socials {
  display: flex;
  gap: 8px;
}

.footer-social {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.25s ease;
}

.footer-social:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-3px);
}

/* ─── HEADINGS ─── */
.footer-heading {
  color: var(--text-color);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
  position: relative;
  padding-bottom: 10px;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

/* ─── LINKS ─── */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  font-size: 0.87rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-links a::before {
  content: '';
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.2s ease;
}

.footer-links a:hover {
  color: var(--accent);
  padding-left: 4px;
}

.footer-links a:hover::before {
  width: 8px;
}

/* ─── CONTACT LIST ─── */
.footer-contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-contact-list i {
  color: var(--accent);
  font-size: 1rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.footer-contact-list a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
  word-break: break-all;
}

.footer-contact-list a:hover {
  color: var(--accent);
}

/* ─── BOTTOM BAR ─── */
.footer-bottom {
  border-top: 1px solid var(--border-color);
}

.footer-copy {
  font-size: 0.83rem;
  color: var(--text-muted);
}

.footer-copy .accent {
  color: var(--accent);
  font-weight: 600;
}

.footer-made {
  font-size: 0.83rem;
  color: var(--text-muted);
}

.heart {
  color: #ff4d6d;
  animation: heartBeat 1.5s ease infinite;
  display: inline-block;
}

@keyframes heartBeat {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 576px) {
  .footer-desc {
    max-width: 100%;
  }

  .footer-bottom .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
