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
          <h1 class="project-title gradient-text">Kisanmitra</h1>
          <a href="https://github.com/pateash/kisanmitra" target="_blank" class="btn-primary btn-sm">
            <i class="fa fa-github"></i> View GitHub
          </a>
        </div>
        <div class="tech-stack-row">
          <span class="tech-badge">Python</span>
          <span class="tech-badge">Scikit-Learn</span>
          <span class="tech-badge">PHP</span>
          <span class="tech-badge">Laravel</span>
        </div>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-leaf"></i> About Kisanmitra</h2>
        <p>
          Kisanmitra is an intelligent machine learning web platform providing crop yield predictions and intuitive agricultural data visualization for farmers to make data-driven planting decisions.
        </p>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-code"></i> Repository Links</h2>
        <div class="repo-links">
          <a href="https://github.com/pateash/kisanmitra" target="_blank" class="repo-card">
            <i class="fa fa-globe"></i>
            <div>
              <strong>Web Application (Laravel)</strong>
              <p>Web portal and interactive visualization engine</p>
            </div>
          </a>
          <a href="https://github.com/pateash/kisanmitra-python" target="_blank" class="repo-card">
            <i class="fa fa-line-chart"></i>
            <div>
              <strong>Machine Learning Backend (Python)</strong>
              <p>Scikit-Learn ML models for yield forecasting</p>
            </div>
          </a>
        </div>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-file-text-o"></i> Open Source License</h2>
        <p>Kisanmitra is open-source software licensed under the MIT License.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kisanmitra'
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
  gap: 28px;
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

.repo-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 10px;
}

.repo-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--text-primary);
  transition: var(--transition-smooth);

  i {
    font-size: 1.8rem;
    color: var(--accent-blue);
  }

  strong {
    font-size: 1.05rem;
    display: block;
  }

  p {
    font-size: 0.85rem !important;
    color: var(--text-muted) !important;
  }

  &:hover {
    border-color: var(--accent-blue);
    transform: translateY(-2px);
  }
}
</style>
e>
