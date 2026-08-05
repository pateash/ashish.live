<template>
  <div class="opensource-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-github-alt gradient-text"></i> Open Source Contributions</h1>
      <p class="page-subtitle">Open-source packages, CLI developer tools, and framework contributions I actively maintain or contribute to.</p>
    </div>

    <div class="grid-2">
      <div class="glass-card os-card" v-for="item in contributions" :key="item.name">
        <div class="os-card-header">
          <div class="os-icon-box">
            <i :class="item.icon || 'fa fa-github'"></i>
          </div>
          <span class="os-role-badge">{{ item.role }}</span>
        </div>

        <h2 class="os-title">{{ item.name }}</h2>
        <p class="os-period"><i class="fa fa-clock-o"></i> {{ item.period }}</p>
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
          description: 'A platform created by the Apache Software Foundation to programmatically author, schedule, and monitor data workflows.',
          link: 'https://github.com/apache/airflow'
        },
        {
          name: '@codingtools/cdt',
          role: 'Creator & Maintainer',
          period: 'October 2019 - Present',
          icon: 'fa fa-terminal',
          description: 'A suite of lightning-fast command-line developer tools designed to streamline everyday software engineering workflows.',
          link: 'https://github.com/codingtools/cdt'
        },
        {
          name: 'RegExplore',
          role: 'Creator & Maintainer',
          period: 'October 2017 - Present',
          icon: 'fa fa-code',
          description: 'An interactive regular expression matcher and visualizer for testing complex regex patterns in real-time.',
          link: 'https://github.com/pateash/RegExplore',
          internalRoute: '/projects/regexplore'
        },
        {
          name: 'ReviewDeck',
          role: 'Hackathon Project',
          period: 'March 2018',
          icon: 'fa fa-cubes',
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

  .os-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
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

  .os-title {
    font-size: 1.35rem;
    margin: 0;
  }

  .os-period {
    font-size: 0.85rem;
    color: var(--text-muted);
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
    gap: 10px;
    margin-top: auto;
    padding-top: 10px;
  }
}
</style>

