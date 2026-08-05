<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section glass-card">
      <div class="data-flow-visual" aria-hidden="true">
        <span class="flow-node flow-node-source"><i class="fa fa-database"></i></span>
        <span class="flow-track"></span>
        <span class="flow-packet packet-one"></span>
        <span class="flow-packet packet-two"></span>
        <span class="flow-node flow-node-destination"><i class="fa fa-cloud"></i></span>
      </div>
      <div class="hero-content">
        <div class="profile-avatar-wrapper">
          <img src="/static/images/ashish.jpg" alt="Ashish Patel" class="profile-avatar">
          <div class="avatar-backdrop"></div>
        </div>

        <div class="hero-text">
          <div class="role-pill glass-pill">
            <span class="pulse-dot"></span>
            Principal Software Engineer @ <span class="company-link">Oracle</span>
          </div>

          <p class="hero-eyebrow"><i class="fa fa-exchange" aria-hidden="true"></i> Distributed systems · cross-cloud data movement · developer tools</p>

          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">Ashish Patel</span>
          </h1>

          <p class="hero-subtitle">
            Principal Software Engineer building resilient data publishing systems, specializing in <strong>Apache Spark, Scala, Java, Delta Lake, Iceberg</strong>, and <strong>Cloud</strong> data infrastructure.
          </p>

          <div class="hero-cta">
            <router-link to="/experience" class="btn-primary">
              <i class="fa fa-briefcase"></i> View Experience
            </router-link>
            <router-link to="/projects" class="btn-secondary">
              <i class="fa fa-code"></i> Explore Projects
            </router-link>
            <a href="mailto:ashishpatel0720@gmail.com" class="btn-secondary">
              <i class="fa fa-envelope-o"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Grid Section -->
    <section class="section-container">
      <h2 class="section-title"><i class="fa fa-cubes gradient-text"></i> Core Expertise & Tech Stack</h2>
      <div class="tech-grid">
        <div class="tech-card glass-card" v-for="skill in skills" :key="skill.name">
          <div class="tech-icon" :style="{ color: skill.color }">
            <i :class="skill.icon"></i>
          </div>
          <div class="tech-info">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Snapshot & Highlights -->
    <section class="section-container">
      <h2 class="section-title"><i class="fa fa-bolt gradient-text"></i> Career Highlights & Achievements</h2>

      <div class="grid-2">
        <!-- Experience Snapshot -->
        <div class="glass-card highlight-card">
          <div class="card-header-icon">
            <i class="fa fa-building-o"></i>
          </div>
          <h3>Industry Experience</h3>
          <p>
            Over <strong>5+ years</strong> of software engineering experience handling terabyte-scale distributed ETL pipelines, batch computing, and cloud migrations.
          </p>
          <ul class="company-list">
            <li><strong class="text-gradient">Oracle:</strong> Principal Software Engineer building cross-cloud data publishing and observability services.</li>
            <li><strong>Prophecy:</strong> Former Senior Software Engineer building data copilot & pipeline builder tooling.</li>
            <li><strong>Skyscanner:</strong> Senior Software Engineer scaling search & analytics data systems.</li>
            <li><strong>Walmart Global Tech:</strong> Software Engineer III building resilient retail data infrastructure.</li>
            <li><strong>Deutsche Bank:</strong> Senior Technical Analyst driving DB-to-GCP cloud migration & Spark batch ETLs.</li>
          </ul>
          <router-link to="/experience" class="card-link">
            Detailed Work History <i class="fa fa-arrow-right"></i>
          </router-link>
        </div>

        <!-- Research & Projects Snapshot -->
        <div class="glass-card highlight-card">
          <div class="card-header-icon orange">
            <i class="fa fa-flask"></i>
          </div>
          <h3>Research & Open Source</h3>
          <p>
            Passionate about recommendation algorithms and stream processing applications.
          </p>
          <div class="mini-highlight">
            <h4><i class="fa fa-book"></i> Academic Research Paper</h4>
            <p>Co-authored <em>"A Comparative Study of Music Recommendation Systems"</em> with Prof. Rajesh Wadhvani.</p>
            <router-link to="/research" class="card-link">Read Research Paper <i class="fa fa-arrow-right"></i></router-link>
          </div>
          <div class="mini-highlight" style="margin-top: 16px;">
            <h4><i class="fa fa-line-chart"></i> Stream Processing & CWBigQuery</h4>
            <p>Developed Spark Streaming & Scala big data processing engine during CarWale internship.</p>
            <router-link to="/projects/bigquery" class="card-link">Explore CWBigQuery <i class="fa fa-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      skills: [
        { name: 'Apache Spark', desc: 'Distributed Data Processing & Streaming', icon: 'fa fa-fire', color: '#e25507' },
        { name: 'Databricks', desc: 'Unified Data & Analytics Platform', icon: 'fa fa-cloud', color: '#ff3621' },
        { name: 'Google Cloud Platform', desc: 'BigQuery, DataProc & GCP Ecosystem', icon: 'fa fa-google', color: '#4285f4' },
        { name: 'Java & Scala', desc: 'High-performance Object & Functional Coding', icon: 'fa fa-code', color: '#f89820' },
        { name: 'Python & Airflow', desc: 'ETL Pipeline Automation & Data Orchestration', icon: 'fa fa-cogs', color: '#3776ab' },
        { name: 'Docker & Microservices', desc: 'Containerized Deployment & Spring Framework', icon: 'fa fa-cubes', color: '#2496ed' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Hero Section */
.hero-section {
  padding: 48px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%);
}

.data-flow-visual {
  align-items: center;
  display: flex;
  gap: 14px;
  opacity: 0.68;
  pointer-events: none;
  position: absolute;
  right: 34px;
  top: 28px;
}

.flow-node {
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  border-radius: 10px;
  color: var(--accent-blue);
  display: flex;
  font-size: 0.85rem;
  height: 30px;
  justify-content: center;
  width: 30px;
}

.flow-node-destination { color: var(--accent-emerald); }

.flow-track {
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-emerald));
  height: 1px;
  position: relative;
  width: 104px;
}

.flow-packet {
  background: var(--accent-emerald);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-emerald);
  height: 6px;
  left: 48px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 6px;
}

.packet-one { animation: flow-packet 2.6s ease-in-out infinite; }
.packet-two { animation: flow-packet 2.6s ease-in-out 1.3s infinite; }

@keyframes flow-packet {
  0% { opacity: 0; transform: translate(0, -50%) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; transform: translate(104px, -50%) scale(0.5); }
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 44px;
}

.profile-avatar-wrapper {
  position: relative;
  flex-shrink: 0;

  .profile-avatar {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border-glow);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 2;
  }

  .avatar-backdrop {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: var(--accent-gradient);
    opacity: 0.25;
    filter: blur(15px);
    z-index: 1;
  }
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.hero-eyebrow {
  margin: -6px 0 0;
  color: var(--accent-emerald);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.role-pill {
  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-emerald);
    box-shadow: 0 0 8px var(--accent-emerald);
    animation: pulse 2s infinite;
  }

  .company-link {
    color: var(--accent-blue);
    font-weight: 600;
  }
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .packet-one,
  .packet-two,
  .role-pill .pulse-dot {
    animation: none;
  }
}

.hero-title {
  font-size: 2.8rem;
  line-height: 1.15;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0;
  line-height: 1.6;

  strong {
    color: var(--text-primary);
  }
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 8px;
}

/* Section Title */
.section-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

/* Tech Stack Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.tech-card {
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 18px;

  .tech-icon {
    font-size: 1.8rem;
    padding: 12px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.08);
    border: 1px solid rgba(56, 189, 248, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .tech-info {
    h3 {
      font-size: 1.15rem;
      margin: 0 0 4px 0;
    }
    p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.4;
    }
  }
}

/* Highlight Cards */
.highlight-card {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .card-header-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;

    &.orange {
      background: rgba(251, 146, 60, 0.15);
      color: var(--accent-orange);
    }
  }

  h3 {
    font-size: 1.35rem;
    margin: 0;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 0.95rem;
  }

  .company-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: 0.92rem;
      color: var(--text-secondary);
      padding-left: 16px;
      position: relative;

      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--accent-blue);
      }
    }
  }

  .mini-highlight {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;

    h4 {
      font-size: 0.95rem;
      margin: 0 0 6px 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    p {
      font-size: 0.88rem;
    }
  }

  .card-link {
    margin-top: auto;
    font-weight: 600;
    font-size: 0.92rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
}

@media (max-width: 768px) {
  .data-flow-visual {
    display: none;
  }

  .hero-section {
    padding: 28px 20px;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-title {
    font-size: 2.1rem;
  }

  .hero-cta {
    justify-content: center;
  }
}
</style>
