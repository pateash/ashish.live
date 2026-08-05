<template>
  <nav class="nav-menu">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" exact @click="$emit('nav-click')">
          <i class="fa fa-home"></i> <span>Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/experience" @click="$emit('nav-click')">
          <i class="fa fa-briefcase"></i> <span>Experience</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects" @click="$emit('nav-click')">
          <i class="fa fa-code-fork"></i> <span>Projects</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/opensource" @click="$emit('nav-click')">
          <i class="fa fa-github-alt"></i> <span>Open Source</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/research" @click="$emit('nav-click')">
          <i class="fa fa-flask"></i> <span>Research</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/education" @click="$emit('nav-click')">
          <i class="fa fa-graduation-cap"></i> <span>Education</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/timeline" @click="$emit('nav-click')">
          <i class="fa fa-clock-o"></i> <span>Timeline</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" @click="$emit('nav-click')">
          <i class="fa fa-envelope"></i> <span>Contact</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'ap-nav'
  }
</script>

<style lang="scss" scoped>
  .nav-menu {
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 6px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    a {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      transition: var(--transition-smooth);

      i {
        font-size: 0.95rem;
        opacity: 0.8;
      }

      &:hover {
        color: var(--text-primary);
        background: var(--bg-card);
      }

      &.selected, &.router-link-active {
        color: #ffffff;
        background: var(--accent-gradient);
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);

        i {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 880px) {
    .nav-list {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .nav-item a {
      padding: 12px 16px;
      font-size: 1rem;
    }
  }
</style>


