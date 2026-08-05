<template>
  <div class="opensource-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-github-alt gradient-text"></i> Open Source Contributions</h1>
      <p class="page-subtitle">Open-source packages, CLI developer tools, and framework contributions I actively maintain or contribute to.</p>
    </div>

    <div class="grid-2 opensource-grid">
      <div class="glass-card os-card" v-for="item in contributions" :key="item.name">
        <div class="os-card-header">
          <div class="os-icon-box" :style="{ '--icon-color': item.color }" :title="item.iconLabel">
            <img :src="item.image" :alt="item.iconLabel" class="os-project-logo">
          </div>
          <div class="os-meta-badges">
            <span class="os-role-badge">{{ item.role }}</span>
            <span class="os-period-badge"><i class="fa fa-clock-o"></i> {{ item.period }}</span>
          </div>
        </div>

        <h2 class="os-title">{{ item.name }}</h2>
        <p class="os-desc">{{ item.description }}</p>

        <div class="os-actions">
          <a :href="item.link" target="_blank" class="btn-primary" v-if="item.link">
            <i class="fa fa-github"></i> View Repo
          </a>
          <router-link :to="item.internalRoute" class="btn-secondary" v-if="item.internalRoute">
            Details <i class="fa fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenSource',
  data() {
    return {
      contributions: [
        {
          name: 'Apache Airflow',
          role: 'Contributor',
          period: 'April 2021 - Present',
          icon: 'fa fa-cogs',
          iconLabel: 'Apache Airflow workflow icon',
          color: '#017cee',
          image: '/static/images/opensource/apache-airflow.png',
          description: 'A platform created by the Apache Software Foundation to programmatically author, schedule, and monitor data workflows.',
          link: 'https://github.com/apache/airflow'
        },
        {
          name: '@codingtools/cdt',
          role: 'Creator & Maintainer',
          period: 'October 2019 - Present',
          icon: 'fa fa-terminal',
          iconLabel: 'Command-line tools icon',
          color: '#0ea5e9',
          image: '/static/images/opensource/codingtools.png',
          description: 'A suite of lightning-fast command-line developer tools designed to streamline everyday software engineering workflows.',
          link: 'https://github.com/codingtools/cdt'
        },
        {
          name: 'RegExplore',
          role: 'Creator & Maintainer',
          period: 'October 2017 - Present',
          icon: 'fa fa-code',
          iconLabel: 'Regular expression code icon',
          color: '#8b5cf6',
          image: '/static/images/regexplore-img.png',
          description: 'An interactive regular expression matcher and visualizer for testing complex regex patterns in real-time.',
          link: 'https://github.com/pateash/RegExplore',
          internalRoute: '/projects/regexplore'
        },
        {
          name: 'ReviewDeck',
          role: 'Hackathon Project',
          period: 'March 2018',
          icon: 'fa fa-cubes',
          iconLabel: 'ReviewDeck blockchain icon',
          color: '#10b981',
          image: '/static/images/opensource/reviewdeck.png',
          description: 'Decentralized review ledger platform built on the Ethereum blockchain during HackInTheNorth at IIIT Allahabad.',
          link: 'https://github.com/ReviewDeck'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.opensource-page {
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

.os-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .os-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .os-meta-badges {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 6px;
  }

  .os-icon-box {
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: color-mix(in srgb, var(--icon-color) 14%, transparent);
    border: 1px solid color-mix(in srgb, var(--icon-color) 24%, transparent);
    color: var(--icon-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.45rem;
  }

  .os-project-logo {
    display: block;
    height: 40px;
    object-fit: contain;
    width: 40px;
  }

  .os-role-badge {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent-emerald);
    background: rgba(52, 211, 153, 0.1);
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid rgba(52, 211, 153, 0.2);
  }

  .os-period-badge {
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 600;
  }

  .os-title {
    font-size: 1.35rem;
    margin: 0;
  }

  .os-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  .os-actions {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-color);
    gap: 10px;
    margin-top: auto;
    padding-top: 16px;
  }
}

</style>
