<template>
  <div class="experience-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-briefcase gradient-text"></i> Work Experience</h1>
      <p class="page-subtitle">A timeline of my professional roles building large-scale Big Data pipelines, distributed storage services, and cloud migrations.</p>
    </div>

    <div class="timeline-wrapper">
      <div class="timeline-card glass-card" v-for="(exp, idx) in experiences" :key="idx">
        <div class="timeline-indicator">
          <div class="timeline-dot"></div>
          <div class="timeline-line" v-if="idx !== experiences.length - 1"></div>
        </div>

        <div class="experience-body">
          <div class="exp-header">
            <div class="company-logo-box">
              <img :src="exp.logo" :alt="exp.company" class="company-logo" @error="handleImgError">
            </div>
            <div class="exp-title-meta">
              <div class="role-row">
                <h2 class="role-title">{{ exp.role }}</h2>
                <span v-if="idx === 0" class="current-role">Current role</span>
              </div>
              <div class="company-duration">
                <span class="company-name">{{ exp.company }}</span> &bull; 
                <span class="duration-badge">{{ exp.period }}</span>
              </div>
              <div class="location-text"><i class="fa fa-map-marker"></i> {{ exp.location }}</div>
            </div>
          </div>

          <blockquote class="company-quote" v-if="exp.quote">
            "{{ exp.quote }}"
          </blockquote>

          <ul class="bullet-list">
            <li v-for="(bullet, bIdx) in exp.bullets" :key="bIdx" v-html="bullet"></li>
          </ul>

          <div class="tech-stack-row">
            <span class="tech-badge" v-for="(tech, tIdx) in exp.techStack" :key="tIdx">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oracleLogo from '../assets/logo/oracle.png';
import prophecyLogo from '../assets/logo/prophecy.png';
import skyscannerLogo from '../assets/logo/skyscanner.png';
import walmartLogo from '../assets/logo/walmart.jpg';
import dbLogo from '../assets/logo/db.png';
import ieeeLogo from '../assets/logo/ieee.png';
import carwaleLogo from '../assets/logo/carwale.png';

export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          company: 'Oracle',
          role: 'Principal Software Engineer (PMTS)',
          period: 'Jan 2025 - Present',
          location: 'Bengaluru, India',
          logo: oracleLogo,
          quote: 'Oracle enables secure cloud, data, and AI for mission-critical enterprises.',
          bullets: [
            'Building <strong>Oracle Datashare</strong>, a Spark-based data publishing service that moves datasets from Oracle Cloud (OCI) to multiple destinations, including Delta Lake, Iceberg, and Azure, with schema evolution, compaction, partitioning, and job observability through Oracle’s Job Management Console (JMC).',
            'Enabling massive petabyte-scale data movement across Oracle Cloud and external cloud systems including AWS, Azure, Snowflake, and GCP.'
          ],
          techStack: ['Apache Spark', 'Scala', 'Java', 'Delta Lake', 'Iceberg', 'Parquet', 'OCI']
        },
        {
          company: 'Prophecy.io',
          role: 'Senior Software Engineer (Data)',
          period: 'Jan 2023 - Dec 2024',
          location: 'London, UK',
          logo: prophecyLogo,
          quote: 'Prophecy makes all your teams successful & productive on Apache Spark & Apache Airflow with Low-Code Development, Scheduling & Metadata.',
          bullets: [
            'Part of the core engineering team building and deploying high-performance Big Data pipelines and low-code data copilots.',
            'Architected scalable Spark and Airflow extensions for enterprise data teams.'
          ],
          techStack: ['Apache Spark', 'Scala', 'Python', 'PySpark', 'Apache Airflow', 'Databricks', 'dbt']
        },
        {
          company: 'Skyscanner',
          role: 'Senior Software Engineer',
          period: 'Dec 2021 - Jan 2023',
          location: 'London, UK',
          logo: skyscannerLogo,
          quote: 'Skyscanner brings over 100 million users all the options they need to plan and book their perfect trip.',
          bullets: [
            'Part of the Data Platform team, working on revenue aggregation solutions allowing analysts to manage and forecast revenue.',
            'Built high-quality, scalable ETL frameworks powering global flight search analytics.'
          ],
          techStack: ['Apache Spark', 'Python', 'PySpark', 'Apache Airflow', 'Databricks', 'AWS']
        },
        {
          company: 'Walmart Global Tech',
          role: 'Software Engineer III (Big Data)',
          period: 'Feb 2021 - Nov 2021',
          location: 'Bangalore, India',
          logo: walmartLogo,
          quote: 'Walmart Global Tech is the technology arm of Walmart reimagining retail for over 260 million daily shoppers.',
          bullets: [
            'Part of the supply chain technology team, building forecasting solutions to enable Walmart’s Everyday Low-Cost philosophy.',
            'Migrated on-premise Hadoop Clusters to Google Cloud Platform as part of Walmart’s strategic partnership with Google.',
            '<strong>Cost Optimization:</strong> Reduced GCP Dataproc cluster costs by <strong>60%</strong> by optimizing Airflow DAG workflows, sensors, and report tasks.'
          ],
          techStack: ['Apache Spark', 'Java', 'PySpark', 'Apache Airflow', 'GCP DataProc', 'BigQuery', 'Astronomer']
        },
        {
          company: 'Deutsche Bank',
          role: 'Senior Technical Analyst',
          period: 'July 2018 - Jan 2021',
          location: 'Pune, India',
          logo: dbLogo,
          quote: 'Deutsche Bank is a global universal bank with a strong presence in Europe, the Americas, and Asia.',
          bullets: [
            'Developed terabyte-scale reporting batch pipelines across hundreds of Spark and Hadoop ETL jobs in CIB division for Volcker Project.',
            'Optimized end-to-end pipeline execution time to meet strict regulatory SLAs for Volcker 2.0 compliance.',
            'Led strategic migration of on-premise CDH clusters and batch jobs to Google Cloud Platform (GCP).',
            'Simplified Informatica platform legacy jobs using Java 8, Spring + Reactor Framework, and Oracle DB.'
          ],
          techStack: ['Apache Spark', 'Hadoop MapReduce', 'Hive', 'Impala', 'Cloudera CDH', 'Java', 'Spring Boot', 'GCP']
        },
        {
          company: 'MANIT, Bhopal',
          role: 'Research Assistant',
          period: 'Oct 2017 - Feb 2018',
          location: 'Bhopal, India',
          logo: ieeeLogo,
          bullets: [
            'Co-written research paper: <em>"A Comparative Study of Music Recommendation Systems"</em> with Prof. Rajesh Wadhvani.',
            'Evaluated recommendation strategies and trained machine learning models for mobile efficiency.'
          ],
          techStack: ['Recommendation Systems', 'Machine Learning', 'Python', 'IEEE']
        },
        {
          company: 'CarWale',
          role: 'Software Engineering Intern (Big Data)',
          period: 'April 2017 - June 2017',
          location: 'Mumbai, India',
          logo: carwaleLogo,
          quote: 'CarWale has grown to become the largest automotive portal in India.',
          bullets: [
            'Created <strong>CWBigQuery</strong>, an interactive big data querying web engine allowing SQL-like Spark queries over Cassandra storage.'
          ],
          techStack: ['Apache Spark', 'Scala', 'Spark SQL', 'Cassandra', 'Python Flask']
        }
      ]
    };
  },
  methods: {
    handleImgError(e) {
      e.target.style.display = 'none';
    }
  }
};
</script>

<style lang="scss" scoped>
.experience-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
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

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-card {
  padding: 30px;
  display: flex;
  gap: 24px;

  .timeline-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24px;
    flex-shrink: 0;
    padding-top: 6px;

    .timeline-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent-blue);
      box-shadow: 0 0 10px var(--accent-blue);
    }

    .timeline-line {
      width: 2px;
      flex: 1;
      background: linear-gradient(to bottom, var(--accent-blue), transparent);
      margin-top: 10px;
    }
  }

.experience-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.exp-header {
  display: flex;
  align-items: center;
  gap: 18px;
}

.company-logo-box {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  .company-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.exp-title-meta {
  .role-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .role-title {
    font-size: 1.35rem;
    margin: 0 0 4px 0;
  }

  .current-role {
    border: 1px solid rgba(52, 211, 153, 0.3);
    border-radius: 999px;
    background: rgba(52, 211, 153, 0.12);
    color: var(--accent-emerald);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 9px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .company-duration {
    font-size: 0.95rem;
    color: var(--text-secondary);

    .company-name {
      color: var(--accent-blue);
      font-weight: 600;
    }

    .duration-badge {
      color: var(--text-muted);
    }
  }

  .location-text {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 2px;
  }
}

.company-quote {
  font-style: italic;
  font-size: 0.92rem;
  color: var(--text-secondary);
  border-left: 3px solid var(--accent-indigo);
  padding-left: 14px;
  margin: 0;
}

.bullet-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;

    strong {
      color: var(--text-primary);
    }
  }
}

.tech-stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

@media (max-width: 640px) {
  .timeline-card {
    padding: 20px;
    gap: 14px;
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
