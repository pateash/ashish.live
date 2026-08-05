<template>
  <div class="project-detail-page">
    <div class="back-nav">
      <router-link to="/projects" class="btn-secondary">
        <i class="fa fa-arrow-left"></i> Back to Projects
      </router-link>
    </div>

    <div class="glass-card detail-card">
      <div class="detail-header">
        <h1 class="project-title gradient-text">GrabPustak</h1>
        <div class="tech-stack-row">
          <span class="tech-badge">PHP</span>
          <span class="tech-badge">CodeIgniter</span>
          <span class="tech-badge">MySQL</span>
          <span class="tech-badge">jQuery</span>
        </div>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-book"></i> About GrabPustak</h2>
        <p>
          GrabPustak is an online educational repository and digital note-sharing platform for students and faculty. It includes assignment submission portals and teacher-student collaboration tools.
        </p>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-users"></i> Collaboration workflow</h2>
        <ul class="feature-list">
          <li>Students can share notes with other students.</li>
          <li>Teachers can publish class assignments through their own accounts.</li>
          <li>Students can view and submit assignments online.</li>
        </ul>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-wrench"></i> Technology used</h2>
        <p>Built with <a href="https://codeigniter.com/" target="_blank" rel="noreferrer">CodeIgniter</a>, <a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>, PHP, MySQL, JavaScript, and Ajax.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrabPustak'
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

.feature-list { color: var(--text-secondary); margin: 0; padding-left: 20px; }
.feature-list li { margin-bottom: 8px; }
</style>
