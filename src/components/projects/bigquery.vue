<template>
  <div class="project-detail-page">
    <div class="back-nav">
      <router-link to="/projects" class="btn-secondary back-btn" aria-label="Back to Projects">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>Back to Projects</span>
      </router-link>
    </div>

    <div class="glass-card detail-card">
      <!-- Vue 3 Glassmorphic Lightbox Modal -->
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
        <h1 class="project-title gradient-text">CarWale BigQuery</h1>
        <div class="tech-stack-row">
          <span class="tech-badge">Python</span>
          <span class="tech-badge">Flask</span>
          <span class="tech-badge">Scala</span>
          <span class="tech-badge">Apache Spark</span>
          <span class="tech-badge">Cassandra</span>
        </div>
      </div>

      <div class="image-gallery-preview" v-if="images.length">
        <img :src="images[0]" @click="activeImageIndex = 0" @keydown.enter="activeImageIndex = 0" @keydown.space.prevent="activeImageIndex = 0" alt="CarWale BigQuery Architecture" class="gallery-thumb" role="button" tabindex="0">
      </div>

      <section class="detail-section">
        <h2><i class="fa fa-info-circle"></i> About the Project</h2>
        <p>
          CW BigQuery is a distributed data querying service that enables interactive analysis of massively large datasets stored in Cassandra Storage. It allows engineers and analysts to submit and schedule Spark jobs using SQL-like syntax.
        </p>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-sitemap"></i> Architecture</h2>
        <p>The Architecture of BigQuery consists of three core components:</p>
        <ul class="feature-list">
          <li><strong>ProxyQuery:</strong> Acts as the mediator between the Web Application and the Mist Server.</li>
          <li><strong>Mist Server:</strong> Spark job server managing execution and API endpoints.</li>
          <li><strong>Spark Engine:</strong> Distributed batch and stream processing engine.</li>
        </ul>
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-random"></i> Query Proxy</h2>
        <p>
          Query Proxy is the system mediator between the web application and Mist Server. It validates a request, assigns and returns a job ID, queues the query for an available Mist context, stores the response by job ID, and returns results through pagination. Response files are cleaned after a defined retention period.
        </p>
        <img :src="images[1]" @click="activeImageIndex = 1" @keydown.enter="activeImageIndex = 1" @keydown.space.prevent="activeImageIndex = 1" alt="Query Proxy flow" class="gallery-thumb detail-image" role="button" tabindex="0">
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-server"></i> Mist Server</h2>
        <p>
          MistServer is a full-featured, next-generation streaming-media toolkit for OTT (internet streaming). It is written in C++, exposes an easy-to-integrate JSON API, and serves as the job-service layer that coordinates Spark requests passed to it by Query Proxy.
        </p>
        <p class="detail-link-line">Learn more in the <a href="https://mistserver.org/mistserver" target="_blank" rel="noreferrer">MistServer documentation</a>.</p>
        <img :src="images[2]" @click="activeImageIndex = 2" @keydown.enter="activeImageIndex = 2" @keydown.space.prevent="activeImageIndex = 2" alt="Mist Server flow" class="gallery-thumb detail-image" role="button" tabindex="0">
      </section>

      <section class="detail-section">
        <h2><i class="fa fa-bolt"></i> Spark</h2>
        <p>Apache Spark is the fast, general engine that performs the large-scale data processing for submitted jobs. It can run programs up to 100× faster than Hadoop MapReduce in memory or 10× faster on disk, and supports interactive work from Scala, Python, and R shells along with high-level parallel processing operators.</p>
        <p class="detail-link-line">Read the Spark <a href="https://spark.apache.org/docs/latest/quick-start.html" target="_blank" rel="noreferrer">quick-start guide</a>.</p>
        <img :src="images[3]" @click="activeImageIndex = 3" @keydown.enter="activeImageIndex = 3" @keydown.space.prevent="activeImageIndex = 3" alt="Apache Spark execution flow" class="gallery-thumb detail-image" role="button" tabindex="0">
      </section>

      <div class="detail-actions">
        <router-link to="/projects/bigquery/project" class="btn-primary">
          <i class="fa fa-cogs"></i> View Detailed Components
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigQuery',
  data() {
    return {
      images: [
        'https://imgd.aeplcdn.com/0x0/bigquery/bigquery_architecture.png',
        '/static/images/ProxyQuery.jpg',
        '/static/images/mist.png',
        '/static/images/spark.png'
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
  gap: 24px;
}

.project-title {
  font-size: 2.2rem;
  margin: 0 0 10px 0;
}

.gallery-thumb {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  background: var(--bg-card);
}

.detail-image {
  margin-top: 14px;
}

.detail-link-line {
  margin-top: 10px;

  a {
    color: var(--accent-blue);
    font-weight: 700;
  }
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
  }
}

.feature-list {
  padding-left: 20px;
  color: var(--text-secondary);

  li {
    margin-bottom: 6px;
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
