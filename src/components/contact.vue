<template>
  <div class="contact-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-envelope gradient-text"></i> Get In Touch</h1>
      <p class="page-subtitle">Have a technical discussion, big data inquiry, or project proposal? Feel free to connect directly!</p>
    </div>

    <div class="contact-container glass-card">
      <h2 class="card-heading">Connect Across Platforms</h2>
      <p class="card-subtext">You can reach out directly via email or connect with me across developer & social networks.</p>

      <div class="email-direct-box">
        <i class="fa fa-envelope-open-o"></i>
        <div class="email-details">
          <div class="box-label">Direct Email</div>
          <a href="mailto:ashishpatel0720@gmail.com" class="box-val">ashishpatel0720@gmail.com</a>
        </div>
        <a href="mailto:ashishpatel0720@gmail.com" class="btn-primary email-btn">
          <i class="fa fa-paper-plane"></i> Send Email
        </a>
      </div>

      <div class="platforms-grid">
        <a v-for="p in platforms" :key="p.name" :href="p.link" target="_blank" class="platform-card" :style="{ '--hover-color': p.color }">
          <i :class="p.icon"></i>
          <span>{{ p.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      platforms: [
        { name: 'LinkedIn', link: 'https://linkedin.com/in/ashishpatel0720', icon: 'fa fa-linkedin', color: '#0077b5' },
        { name: 'GitHub', link: 'https://github.com/pateash', icon: 'fa fa-github', color: '#805ad5' },
        { name: 'Twitter', link: 'https://twitter.com/ashishpatel0720', icon: 'fa fa-twitter', color: '#1da1f2' },
        { name: 'StackOverflow', link: 'https://stackoverflow.com/users/6178783/ashish-patel', icon: 'fa fa-stack-overflow', color: '#f48024' },
        { name: 'Facebook', link: 'https://facebook.com/ashishpatel0720', icon: 'fa fa-facebook', color: '#1877f2' },
        { name: 'Instagram', link: 'https://instagram.com/ashishpatel0720', icon: 'fa fa-instagram', color: '#e1306c' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.page-header {
  text-align: center;
  max-width: 650px;
  
  .page-title {
    font-size: 2.3rem;
    margin-bottom: 10px;
  }
  .page-subtitle {
    color: var(--text-secondary);
    font-size: 1.05rem;
    margin: 0;
    line-height: 1.6;
  }
}

.contact-container {
  width: 100%;
  max-width: 760px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-heading {
  font-size: 1.5rem;
  margin: 0;
}

.card-subtext {
  font-size: 0.98rem;
  color: var(--text-secondary);
  margin: 0;
}

.email-direct-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 20px 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 6px;

  i {
    font-size: 2rem;
    color: var(--accent-blue);
    flex-shrink: 0;
  }

  .email-details {
    flex: 1;

    .box-label {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 2px;
    }

    .box-val {
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--text-primary);
    }
  }

  .email-btn {
    flex-shrink: 0;
  }
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 10px;
}

.platform-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-secondary);
  font-weight: 600;
  transition: var(--transition-smooth);

  i {
    font-size: 1.25rem;
  }

  &:hover {
    color: #ffffff;
    background: var(--hover-color);
    border-color: var(--hover-color);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
}

@media (max-width: 640px) {
  .contact-container {
    padding: 24px 18px;
  }

  .email-direct-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;

    .email-btn {
      width: 100%;
    }
  }

  .platforms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

