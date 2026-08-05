<template>
  <div id="app" class="app-container">
    <!-- Top Route Loading Progress Bar -->
    <div class="top-progress-bar" :class="{ loading: isLoading }"></div>

    <!-- Sticky Glassmorphic Header -->
    <header class="header-glass">
      <div class="header-container">
        <router-link to="/" class="brand-logo">
          <span class="logo-text gradient-text">Ashish Patel</span>
          <span class="status-dot" title="Available for technical discussions"></span>
        </router-link>

        <div class="nav-wrapper" :class="{ 'mobile-open': mobileMenuOpen }">
          <ap-nav @nav-click="mobileMenuOpen = false"></ap-nav>
        </div>

        <div class="header-actions">
          <button class="theme-toggle-btn" @click="toggleTheme" :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i :class="theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o'"></i>
            <span class="theme-label">{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
          </button>

          <button class="mobile-toggle-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle navigation menu">
            <i :class="mobileMenuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="footer-glass">
      <div class="footer-container">
        <div class="footer-socials">
          <a target="_blank" title="LinkedIn" href="https://linkedin.com/in/ashishpatel0720" class="social-link linkedin"><i class="fa fa-linkedin"></i></a>
          <a target="_blank" title="GitHub" href="https://github.com/pateash" class="social-link github"><i class="fa fa-github"></i></a>
          <a target="_blank" title="Twitter" href="https://twitter.com/ashishpatel0720" class="social-link twitter"><i class="fa fa-twitter"></i></a>
          <a target="_blank" title="StackOverflow" href="https://stackoverflow.com/users/6178783/ashish-patel" class="social-link stackoverflow"><i class="fa fa-stack-overflow"></i></a>
          <a target="_blank" title="Email" href="mailto:ashishpatel0720@gmail.com" class="social-link email"><i class="fa fa-envelope-o"></i></a>
        </div>
        <p class="footer-text">
          Crafted with <i class="fa fa-heart text-rose"></i> by <strong>Ashish Patel</strong> &bull; {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import apNav from '@/components/apnav.vue';

export default {
  name: 'App',
  components: { apNav },
  data() {
    return {
      theme: 'dark',
      mobileMenuOpen: false,
      isLoading: false
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('portfolio-theme', this.theme);
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    this.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', this.theme);

    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true;
      this.mobileMenuOpen = false;
      next();
    });

    this.$router.afterEach(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    });
  }
};
</script>


<style lang="scss">
  @import "./assets/styles/design-system.scss";

  .top-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: var(--accent-gradient);
    z-index: 9999;
    transition: width 0.3s ease, opacity 0.3s ease;
    opacity: 0;

    &.loading {
      width: 75%;
      opacity: 1;
    }
  }

  /* Header Glass Styles */

  .header-glass {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 1000;
    background: var(--bg-surface);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid var(--border-color);
    box-shadow: var(--glass-shadow);
  }

  .header-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.3rem;
    font-weight: 800;

    .logo-text {
      font-family: 'Outfit', sans-serif;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent-emerald);
      box-shadow: 0 0 10px var(--accent-emerald);
    }
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mobile-toggle-btn {
    display: none;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }

  /* Transition Effects */
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .fade-slide-enter {
    opacity: 0;
    transform: translateY(12px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }

  /* Footer Glass */
  .footer-glass {
    background: var(--bg-surface);
    border-top: 1px solid var(--border-color);
    padding: 30px 24px;
    margin-top: auto;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .footer-socials {
    display: flex;
    gap: 16px;

    .social-link {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: var(--transition-smooth);

      &:hover {
        color: #ffffff;
        background: var(--accent-blue);
        border-color: var(--accent-blue);
        transform: translateY(-3px);
      }
    }
  }

  .footer-text {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
    
    .text-rose {
      color: var(--accent-rose);
    }
  }

  @media (max-width: 880px) {
    .mobile-toggle-btn {
      display: flex;
    }

    .theme-label {
      display: none;
    }

    .nav-wrapper {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-color);
      padding: 20px;
      transform: translateY(-150%);
      opacity: 0;
      pointer-events: none;
      transition: var(--transition-smooth);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

      &.mobile-open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
</style>

