<script setup>
import { ref, computed } from "vue";
import { useSettingsStore } from "../stores/settings";
import { translations } from "../constants/translations";

const settings = useSettingsStore();
const t = computed(() => translations[settings.lang].contact);

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

function sendMessage() {
  if (!name.value || !email.value || !message.value) {
    alert(t.value.error);
    return;
  }

  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Subject:", subject.value);
  console.log("Message:", message.value);

  alert(t.value.success);

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
</script>

<template>
  <section id="contact" class="contact-section py-5">
    <div class="container content">
      <!-- TITLE -->
      <div class="text-center mb-5">
        <p class="text-success">{{ t.title }}</p>
        <h2 class="fw-bold text-color">{{ t.subtitle }}</h2>
      </div>

      <div class="row g-5 align-items-center mb-5">
        <!-- CONTACT INFO -->
        <div class="col-lg-5 text-color">
          <div class="contact-info mb-4">
            <i class="bi bi-envelope"></i>
            <div>
              <h5>{{ t.email }}</h5>
              <p class="text-muted-custom">isomiddinovshaxzod007@gmail.com</p>
            </div>
          </div>

          <div class="contact-info mb-4">
            <i class="bi bi-geo-alt"></i>
            <div>
              <h5>{{ t.location }}</h5>
              <p class="text-muted-custom">Uzbekistan</p>
            </div>
          </div>

          <div class="contact-info mb-4">
            <i class="bi bi-telephone"></i>
            <div>
              <h5>{{ t.phone }}</h5>
              <p class="text-muted-custom">+998 94 007 39 89</p>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="col-lg-7">
          <form class="contact-form" @submit.prevent="sendMessage">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" :placeholder="t.form.name" v-model="name" required />
              </div>

              <div class="col-md-6">
                <input type="email" class="form-control" :placeholder="t.form.email" v-model="email" required />
              </div>

              <div class="col-12">
                <input type="text" class="form-control" :placeholder="t.form.subject" v-model="subject" required />
              </div>

              <div class="col-12">
                <textarea rows="5" class="form-control" :placeholder="t.form.message" v-model="message"
                  required></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-success px-4 py-2">{{ t.form.submit }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="location mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d22766.439149676986!2d69.28636!3d41.37533!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x38ae8d6c57617373%3A0x4b0f7e76dfec5113!2s3A%2C%20100190%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.3782114!2d69.2812453!4m0!5e1!3m2!1sen!2sus!4v1772735412579!5m2!1sen!2sus"
          width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: transparent;
}

.text-color {
  color: var(--text-color);
}

.text-muted-custom {
  color: var(--text-muted);
}

.contact-info {
  display: flex;
  gap: 15px;
  align-items: center;
  animation: fadeInLeft 1s ease backwards;
}

.contact-info:nth-child(2) {
  animation-delay: 0.2s;
}

.contact-info:nth-child(3) {
  animation-delay: 0.4s;
}

.contact-info i {
  font-size: 28px;
  color: #198754;
}

.contact-info h5 {
  margin: 0;
}

.contact-info p {
  margin: 0;
}

.contact-form {
  animation: fadeInRight 1s ease backwards;
}

.contact-form .form-control {
  padding: 12px 15px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.contact-form .form-control::placeholder {
  color: var(--text-muted);
}

.contact-form .form-control:focus {
  background: var(--card-bg);
  border-color: #198754;
  box-shadow: none;
}

.location {
  animation: fadeInUp 1s ease backwards;
  animation-delay: 0.5s;
}

.content {
  animation: fadeInDown 1s ease;
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
