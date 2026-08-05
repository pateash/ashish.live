<template>
  <div class="education-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-graduation-cap gradient-text"></i> Academic Background</h1>
      <p class="page-subtitle">Degrees, certifications, and educational milestones in Computer Science & Engineering.</p>
    </div>

    <div class="grid-2">
      <div class="glass-card edu-card" v-for="(edu, idx) in degrees" :key="idx">
        <div class="edu-card-header">
          <div class="edu-icon-box" :style="{ color: edu.color }">
            <i :class="edu.icon" aria-hidden="true"></i>
          </div>
          <span class="score-badge">
            <i :class="edu.scoreIcon" aria-hidden="true"></i> {{ edu.score }}
          </span>
        </div>

        <h2 class="edu-degree">
          <i :class="edu.degreeIcon" class="meta-icon" aria-hidden="true"></i> {{ edu.degree }}
        </h2>
        <div class="edu-field">{{ edu.field }}</div>
        <p class="edu-institution"><i :class="edu.instIcon" class="meta-icon" aria-hidden="true"></i> {{ edu.institution }}</p>
        <p class="edu-period"><i :class="edu.periodIcon" class="meta-icon" aria-hidden="true"></i> {{ edu.period }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      degrees: [
        {
          degree: 'Bachelor of Technology (B.Tech)',
          field: 'Computer Science & Engineering',
          institution: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
          period: '2014 - 2018',
          score: 'CGPA: 8.4 / 10',
          icon: 'fa fa-graduation-cap',
          degreeIcon: 'fa fa-certificate',
          instIcon: 'fa fa-university',
          periodIcon: 'fa fa-calendar',
          scoreIcon: 'fa fa-trophy',
          color: 'var(--accent-blue)'
        },
        {
          degree: 'Higher Secondary (XII)',
          field: 'Science & Mathematics',
          institution: 'I.P.S. Academy, Bhind, M.P., India',
          period: '2012 - 2013',
          score: '90.20%',
          icon: 'fa fa-flask',
          degreeIcon: 'fa fa-certificate',
          instIcon: 'fa fa-institution',
          periodIcon: 'fa fa-calendar-check-o',
          scoreIcon: 'fa fa-percent',
          color: 'var(--accent-indigo)'
        },
        {
          degree: 'High School (X)',
          field: 'General Science & Mathematics',
          institution: 'I.P.S. Academy, Bhind, M.P., India',
          period: '2010 - 2011',
          score: '81.30%',
          icon: 'fa fa-book',
          degreeIcon: 'fa fa-certificate',
          instIcon: 'fa fa-institution',
          periodIcon: 'fa fa-clock-o',
          scoreIcon: 'fa fa-percent',
          color: 'var(--accent-purple)'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.education-page {
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

.edu-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .edu-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .edu-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }

  .score-badge {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--accent-amber);
    background: rgba(251, 191, 36, 0.1);
    padding: 4px 14px;
    border-radius: 999px;
    border: 1px solid rgba(251, 191, 36, 0.25);
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .meta-icon {
    margin-right: 6px;
    opacity: 0.85;
  }

  .edu-degree {
    font-size: 1.3rem;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .edu-field {
    font-size: 0.95rem;
    color: var(--accent-blue);
    font-weight: 600;
  }

  .edu-institution {
    font-size: 0.92rem;
    color: var(--text-secondary);
    margin: 0;
    display: flex;
    align-items: center;
  }

  .edu-period {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
    display: flex;
    align-items: center;
  }
}
</style>

