<template>
  <div class="project-detail-page">
    <div class="back-nav">
      <router-link to="/projects" class="btn-secondary">
        <i class="fa fa-arrow-left"></i> Back to Projects
      </router-link>
    </div>

    <div class="glass-card detail-card">
      <div class="detail-header">
        <div class="title-row">
          <h1 class="project-title gradient-text">MyCaptcha</h1>
          <a href="https://github.com/pateash/mycaptcha" target="_blank" class="btn-primary btn-sm">
            <i class="fa fa-github"></i> View GitHub
          </a>
        </div>
        <div class="tech-stack-row">
          <span class="tech-badge">PHP</span>
          <span class="tech-badge">GD Library</span>
          <span class="tech-badge">JavaScript</span>
        </div>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-shield"></i> About MyCaptcha</h2>
        <p>
          MyCaptcha is a custom PHP security verification platform implementing Text, Puzzle, and Identipic CAPTCHA challenges to prevent bot automation and spam form submissions.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Captcha'
};
</script>

<style lang="scss" scoped>
.project-detail-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-card {
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.project-title {
  font-size: 2.2rem;
  margin: 0;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.9rem;
}

.detail-section {
  h2 {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.98rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}
</style>

