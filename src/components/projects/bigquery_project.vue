<template>
  <div class="project-detail-page">
    <div class="back-nav">
      <router-link to="/projects/bigquery/architecture" class="btn-secondary back-btn" aria-label="Back to Architecture">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>Back to Architecture</span>
      </router-link>
    </div>

    <div class="glass-card detail-card">
      <!-- Vue 3 Lightbox Modal -->
      <teleport to="body">
        <div v-if="activeImageIndex !== null" class="lightbox-modal" @click.self="activeImageIndex = null">
          <button class="lightbox-close" @click="activeImageIndex = null" aria-label="Close lightbox">&times;</button>
          <img :src="images[activeImageIndex]" class="lightbox-img" alt="Gallery Preview">
          <div class="lightbox-nav">
            <button @click.stop="prevImage" class="lightbox-btn" aria-label="Previous image"><i class="fa fa-chevron-left"></i></button>
            <span>{{ activeImageIndex + 1 }} / {{ images.length }}</span>
            <button @click.stop="nextImage" class="lightbox-btn" aria-label="Next image"><i class="fa fa-chevron-right"></i></button>
          </div>
        </div>
      </teleport>

      <div class="detail-header">
        <h1 class="project-title gradient-text">CarWale BigQuery - System Features</h1>
        <p class="project-subtitle">Interactive Web Portal & Job Management Components</p>
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-tachometer"></i> User Dashboard</h2>
        <p>The Dashboard displays real-time statistics regarding your active, scheduled, and completed Spark jobs.</p>
        <img :src="images[0]" @click="activeImageIndex = 0" @keydown.enter="activeImageIndex = 0" @keydown.space.prevent="activeImageIndex = 0" class="gallery-thumb" alt="Dashboard" role="button" tabindex="0">
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-plus-circle"></i> Submit Job</h2>
        <p>Submit Job Page allows users to run Spark SQL queries interactively against Cassandra storage clusters with custom limit parameters.</p>
        <img :src="images[1]" @click="activeImageIndex = 1" @keydown.enter="activeImageIndex = 1" @keydown.space.prevent="activeImageIndex = 1" class="gallery-thumb" alt="Submit Job" role="button" tabindex="0">
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-calendar"></i> Schedule Job</h2>
        <p>Schedule long-running batch jobs for automated execution. Results are saved directly into persistent MySQL / JSON sinks for automated daily and weekly report generation.</p>
        <img :src="images[2]" @click="activeImageIndex = 2" @keydown.enter="activeImageIndex = 2" @keydown.space.prevent="activeImageIndex = 2" class="gallery-thumb" alt="Schedule Job" role="button" tabindex="0">
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-history"></i> Job History & Filtering</h2>
        <p>Explore full query history, re-execute past jobs with one click, and filter executions by status (SUCCESS, RUNNING, FAILED).</p>
        <img :src="images[4]" @click="activeImageIndex = 4" @keydown.enter="activeImageIndex = 4" @keydown.space.prevent="activeImageIndex = 4" class="gallery-thumb" alt="Job History" role="button" tabindex="0">
      </section>

      <div class="detail-actions">
        <router-link to="/projects/bigquery/architecture" class="btn-primary">
          <i class="fa fa-sitemap"></i> View BigQuery Architecture
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigQueryProject',
  data() {
    return {
      images: [
        'https://imgd.aeplcdn.com/0x0/bigquery/dashboard.png',
        'https://imgd.aeplcdn.com/0x0/bigquery/submit_job.png',
        'https://imgd.aeplcdn.com/0x0/bigquery/schedule_job.png',
        'https://imgd.aeplcdn.com/0x0/bigquery/job_result.png',
        'https://imgd.aeplcdn.com/0x0/bigquery/job_history.png'
      ],
      activeImageIndex: null
    };
  },
  methods: {
    nextImage() {
      if (this.activeImageIndex !== null) {
        this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
      }
    },
    prevImage() {
      if (this.activeImageIndex !== null) {
        this.activeImageIndex = (this.activeImageIndex - 1 + this.images.length) % this.images.length;
      }
    }
  }
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

.project-title {
  font-size: 2rem;
  margin: 0 0 6px 0;
}

.project-subtitle {
  color: var(--text-secondary);
  margin: 0;
  font-size: 1.05rem;
}

.gallery-thumb {
  width: 100%;
  max-height: 380px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  background: var(--bg-card);
  margin-top: 12px;
}

.detail-section {
  h2 {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  p {
    font-size: 0.96rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 15, 25, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 2.5rem;
  cursor: pointer;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

.lightbox-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  color: #ffffff;

  .lightbox-btn {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: #ffffff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;

    &:hover {
      background: var(--accent-blue);
    }
  }
}
</style>