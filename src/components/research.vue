<template>
  <div class="research-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-flask gradient-text"></i> Research & Publications</h1>
      <p class="page-subtitle">Academic research papers, recommendation algorithm benchmarking, and conference publications.</p>
    </div>

    <div class="glass-card paper-card">
      <div class="paper-header-row">
        <div class="ieee-badge-box">
          <img :src="ieeeLogo" alt="IEEE logo" class="ieee-logo">
        </div>
        <div class="paper-meta">
          <span class="pub-tag">IEEE Xplore Published</span>
          <span class="pub-date"><i class="fa fa-calendar"></i> 24–25 February 2018</span>
        </div>
      </div>

      <h2 class="paper-title">A Comparative Study of Music Recommendation Systems</h2>
      <p class="paper-venue"><i class="fa fa-university"></i> Maulana Azad National Institute of Technology (MANIT), Bhopal</p>

      <div class="authors-box">
        <strong>Authors:</strong> Ashish Patel, Prof. Rajesh Wadhvani
      </div>

      <p class="paper-abstract">
        This research paper systematically analyzes and evaluates various collaborative filtering, content-based, and hybrid recommendation algorithms for music streaming applications, assessing algorithmic accuracy, computation overhead, and feasibility for real-time mobile environments.
      </p>

      <div class="paper-actions">
        <a href="https://ieeexplore.ieee.org/document/8546852" target="_blank" class="btn-primary">
          <i class="fa fa-external-link"></i> Find on IEEE Xplore
        </a>
        <a href="https://drive.google.com/open?id=1FtE5E-PCF5_PP_AAh5qaPOKs2n1LOmlO" target="_blank" class="btn-secondary">
          <i class="fa fa-download"></i> Download PDF
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ieeeLogo from '../assets/logo/ieee.png';

export default {
  name: 'Research',
  data() {
    return { ieeeLogo };
  }
};
</script>

<style lang="scss" scoped>
.research-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.page-header {
  .page-title {
    font-size: 2.2rem;
    margin-bottom: 8px;
  }
  .page-subtitle {
    color: var(--text-secondary);
    font-size: 1.05rem;
    margin: 0;
  }
}

.paper-card {
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .paper-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ieee-badge-box {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ieee-logo {
    display: block;
    height: 38px;
    object-fit: contain;
    width: 38px;
  }

  .pub-tag {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--accent-amber);
    background: rgba(251, 191, 36, 0.1);
    padding: 4px 14px;
    border-radius: 999px;
    border: 1px solid rgba(251, 191, 36, 0.25);
  }

  .pub-date {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-left: 10px;
  }

  .paper-title {
    font-size: 1.6rem;
    margin: 0;
    line-height: 1.3;
  }

  .paper-venue {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .authors-box {
    font-size: 0.95rem;
    color: var(--accent-blue);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 10px 16px;
    border-radius: 10px;
  }

  .paper-abstract {
    font-size: 0.98rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .paper-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }
}
</style>
