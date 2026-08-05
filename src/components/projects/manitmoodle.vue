<template>
  <div class="project-detail-page">
    <div class="back-nav">
      <router-link to="/projects" class="btn-secondary">
        <i class="fa fa-arrow-left"></i> Back to Projects
      </router-link>
    </div>

    <div class="glass-card detail-card">
      <div class="detail-header">
        <h1 class="project-title gradient-text">MANIT Moodle</h1>
        <div class="tech-stack-row">
          <span class="tech-badge">PHP</span>
          <span class="tech-badge">MySQL</span>
          <span class="tech-badge">HTML/CSS</span>
          <span class="tech-badge">JavaScript</span>
        </div>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-graduation-cap"></i> About MANIT Moodle</h2>
        <p>
          MANIT Moodle is a web-based learning management system and assignment discussion portal created for MANIT Bhopal campus students and professors.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManitMoodle'
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

.project-title {
  font-size: 2.2rem;
  margin: 0 0 10px 0;
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

