<template>
  <div class="projects-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-code-fork gradient-text"></i> Featured Projects</h1>
      <p class="page-subtitle">A collection of Big Data engines, full-stack web applications, and technical tools I've created.</p>
    </div>

    <!-- Filter & Search Controls -->
    <div class="controls-bar glass-card">
      <div class="filter-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat" 
          :class="['filter-btn', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="search-box">
        <i class="fa fa-search"></i>
        <input type="text" v-model="searchQuery" placeholder="Search projects by tech or name...">
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <div class="project-card glass-card" v-for="proj in filteredProjects" :key="proj.id">
        <div class="project-card-header">
          <div class="project-icon-wrapper">
            <i :class="proj.icon || 'fa fa-folder-o'"></i>
          </div>
          <span class="project-category-badge">{{ proj.category }}</span>
        </div>

        <h2 class="project-title">{{ proj.title }}</h2>
        <div class="project-meta-row">
          <span class="project-meta"><i class="fa fa-calendar"></i> {{ proj.period }}</span>
          <span class="project-org">@ {{ proj.org }}</span>
        </div>
        <p class="project-desc">{{ proj.desc }}</p>

        <div class="tech-stack-row">
          <span class="tech-badge" v-for="(tech, tIdx) in proj.techStack" :key="tIdx">
            {{ tech }}
          </span>
        </div>

        <div class="project-card-actions">
          <router-link v-if="proj.route" :to="proj.route" class="btn-primary">
            Know More <i class="fa fa-arrow-right"></i>
          </router-link>
          <a v-if="proj.github" :href="proj.github" target="_blank" class="btn-secondary">
            <i class="fa fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      selectedCategory: 'All',
      searchQuery: '',
      categories: ['All', 'Big Data', 'Machine Learning', 'Web Apps'],
      projects: [
        {
          id: 'bigquery',
          title: 'Cassandra BigQuery (CWBigQuery)',
          category: 'Big Data',
          org: 'CarWale Internship',
          period: 'May - June 2017',
          icon: 'fa fa-database',
          desc: 'Interactive Big Data querying service that executes scheduled Spark SQL jobs over massive Cassandra datasets via a web UI.',
          techStack: ['Python', 'Flask', 'Scala', 'Apache Spark', 'Cassandra'],
          route: '/projects/bigquery'
        },
        {
          id: 'kisanmitra',
          title: 'Kisan Mitra',
          category: 'Machine Learning',
          org: 'MANIT Minor Project',
          period: 'Jan - March 2017',
          icon: 'fa fa-leaf',
          desc: 'Smart agricultural advisory platform leveraging Machine Learning algorithms to predict crop yield and optimal farming recommendations.',
          techStack: ['Laravel', 'Python', 'Scikit-Learn', 'PHP', 'jQuery'],
          route: '/projects/kisanmitra'
        },
        {
          id: 'grabpustak',
          title: 'GrabPustak',
          category: 'Web Apps',
          org: 'Open Web Project',
          period: '2017',
          icon: 'fa fa-book',
          desc: 'Online digital repository and book-sharing platform for students to access lecture notes, reference material, and free e-books.',
          techStack: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript', 'Ajax'],
          route: '/projects/grabpustak'
        },
        {
          id: 'manitmoodle',
          title: 'ManitMoodle',
          category: 'Web Apps',
          org: 'MANIT Academic Project',
          period: '2017',
          icon: 'fa fa-graduation-cap',
          desc: 'Custom educational discussion board and online assignment submission management system built for university coursework.',
          techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
          route: '/projects/manitmoodle'
        },
        {
          id: 'captcha',
          title: 'Captcha Validation System',
          category: 'Web Apps',
          org: 'Security Assignment',
          period: '2017',
          icon: 'fa fa-shield',
          desc: 'Interactive image & text captcha security module for protecting web applications and mobile forms against automated bot scripts.',
          techStack: ['PHP', 'Bootstrap', 'JavaScript'],
          route: '/projects/captcha'
        }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p => {
        const matchesCat = this.selectedCategory === 'All' || p.category === this.selectedCategory;
        const query = this.searchQuery.toLowerCase();
        const matchesQuery = !query || 
          p.title.toLowerCase().includes(query) || 
          p.desc.toLowerCase().includes(query) || 
          p.techStack.some(t => t.toLowerCase().includes(query));
        return matchesCat && matchesQuery;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.projects-page {
  display: flex;
  flex-direction: column;
  gap: 28px;
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

.controls-bar {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 0.88rem;
  cursor: pointer;
  transition: var(--transition-smooth);

  &:hover {
    color: var(--text-primary);
    border-color: var(--accent-blue);
  }

  &.active {
    background: var(--accent-gradient);
    color: #ffffff;
    border-color: transparent;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
  }
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px 14px;
  width: 280px;

  i {
    color: var(--text-muted);
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 0.9rem;
    width: 100%;

    &::placeholder {
      color: var(--text-muted);
    }
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.project-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-icon-wrapper {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }

  .project-category-badge {
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent-purple);
    background: rgba(192, 132, 252, 0.1);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(192, 132, 252, 0.2);
  }

  .project-title {
    font-size: 1.3rem;
    margin: 0;
  }

  .project-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
  }

  .project-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .project-org {
    color: var(--accent-emerald);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .project-desc {
    font-size: 0.94rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  .tech-stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;
    padding-top: 8px;
  }

  .project-card-actions {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-color);
    gap: 10px;
    margin-top: 12px;
    padding-top: 16px;
  }
}

@media (max-width: 640px) {
  .controls-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .search-box {
    width: 100%;
  }
}
</style>
