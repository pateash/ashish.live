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
          <h1 class="project-title gradient-text">RegExplore</h1>
          <a href="https://regexplore.github.io" target="_blank" class="btn-primary btn-sm">
            <i class="fa fa-external-link"></i> Launch Web App
          </a>
        </div>
        <div class="tech-stack-row">
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">Angular</span>
          <span class="tech-badge">Angular Material</span>
        </div>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-search"></i> About RegExplore</h2>
        <p>
          RegExplore is a lightweight, interactive Regular Expression tester built with Angular and Angular Material. It allows developers to test regex patterns in real time with visual highlight match results.
        </p>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-desktop"></i> Screenshot Preview</h2>
        <img src="/static/images/regexplore-big.png" class="preview-img" alt="RegExplore Preview">
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegExplore'
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

.preview-img {
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
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

