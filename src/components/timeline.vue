<template>
  <div class="timeline-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-clock-o gradient-text"></i> Milestones & Career Timeline</h1>
      <p class="page-subtitle">A chronological record of key academic achievements, hackathons, research publications, and career progression.</p>
    </div>

    <div class="timeline-container">
      <div class="timeline-spine"></div>

      <div 
        v-for="(item, index) in items" 
        :key="index" 
        :class="['timeline-row', index % 2 === 0 ? 'left' : 'right']"
      >
        <div class="timeline-node">
          <i class="fa fa-star"></i>
        </div>

        <div class="timeline-content glass-card">
          <div class="time-pill glass-pill">{{ item.date }}</div>
          <h2 class="milestone-title">{{ item.title }}</h2>
          <p class="milestone-desc" v-html="item.desc"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      items: [
        { title: "Principal Software Engineer @ Oracle", date: "Jan 2025", desc: "Joined Oracle Cloud Infrastructure (OCI) Datashare engineering team in Bengaluru." },
        { title: "Senior Software Engineer @ Prophecy.io", date: "Jan 2023", desc: "Joined Prophecy.io to build enterprise low-code Spark & Airflow data pipeline tooling." },
        { title: "Senior Software Engineer @ Skyscanner", date: "Dec 2021", desc: "Relocated to London, UK to join Skyscanner's Data Platform & Revenue Aggregation team." },
        { title: "Software Engineer III @ Walmart Global Tech", date: "Feb 2021", desc: "Joined Supply Chain Technology team at Walmart Labs, driving GCP Dataproc cost reduction." },
        { title: "Promoted to Senior Technical Analyst @ Deutsche Bank", date: "July 2019", desc: "Led Volcker regulatory reporting batch pipelines handling terabyte-scale Spark jobs." },
        { title: "Joined Deutsche Bank", date: "July 2018", desc: "Started full-time role as Technical Analyst at Deutsche Bank Pune." },
        { title: "HackInTheNorth 2018", date: "March 2018", desc: "Placed in Top 20 out of 50+ teams in IIIT Allahabad's Ethereum blockchain hackathon with ReviewDeck." },
        { title: "IEEE Research Paper Publication", date: "Feb 2018", desc: "Published co-written research paper on <i>Music Recommendation Systems</i> in IEEE." },
        { title: "Deutsche Bank Offer & Appointy Hackathon", date: "July 2017", desc: "Secured placement at Deutsche Bank & 2nd Prize in Appointy Hackathon." },
        { title: "CarWale Big Data Internship", date: "April 2017", desc: "Developed Spark SQL & Cassandra stream processing application <b>CWBigQuery</b> at CarWale Mumbai." },
        { title: "Completed Higher Secondary (90.0%)", date: "April 2013", desc: "Graduated with 90% in Higher Secondary Education at Ideal Public School." },
        { title: "Completed High School (81.3%)", date: "April 2011", desc: "Graduated High School with distinction." }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.timeline-page {
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

.timeline-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 0;
}

.timeline-spine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  background: linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-row {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 30px;
  position: relative;
  width: 50%;

  &.right {
    align-self: flex-end;
    margin-left: 50%;
    justify-content: flex-start;
  }

  &.left {
    margin-right: 50%;

    .timeline-content {
      text-align: right;

      .time-pill {
        margin-left: auto;
      }
    }
  }
}

.timeline-node {
  position: absolute;
  top: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--accent-blue);
  box-shadow: 0 0 12px var(--accent-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  font-size: 0.8rem;
  z-index: 10;
}

.timeline-row.left .timeline-node {
  right: -16px;
}

.timeline-row.right .timeline-node {
  left: -16px;
}

.timeline-content {
  padding: 22px;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.milestone-title {
  font-size: 1.15rem;
  margin: 0;
}

.milestone-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .timeline-spine {
    left: 20px;
  }

  .timeline-row {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 50px;

    &.left .timeline-content {
      text-align: left;
      .time-pill {
        margin-left: 0;
      }
    }

    .timeline-node {
      left: 4px !important;
    }
  }
}
</style>

