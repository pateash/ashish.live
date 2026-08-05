<template>
  <div class="contact-page">
    <div class="page-header">
      <h1 class="page-title"><i class="fa fa-envelope gradient-text"></i> Get In Touch</h1>
      <p class="page-subtitle">Have a technical discussion, big data inquiry, or project proposal? Feel free to send a message!</p>
    </div>

    <div class="grid-2">
      <!-- Contact Info & Channels -->
      <div class="glass-card contact-info-card">
        <h2 class="card-heading">Connect Across Platforms</h2>
        <p class="card-subtext">You can reach out directly via email or connect with me on developer & social networks.</p>

        <div class="email-direct-box">
          <i class="fa fa-envelope-open-o"></i>
          <div>
            <div class="box-label">Direct Email</div>
            <a href="mailto:ashishpatel0720@gmail.com" class="box-val">ashishpatel0720@gmail.com</a>
          </div>
        </div>

        <div class="platforms-grid">
          <a v-for="p in platforms" :key="p.name" :href="p.link" target="_blank" class="platform-card" :style="{ '--hover-color': p.color }">
            <i :class="p.icon"></i>
            <span>{{ p.name }}</span>
          </a>
        </div>
      </div>

      <!-- Formspree Glassmorphic Form -->
      <div class="glass-card contact-form-card">
        <h2 class="card-heading">Send a Message</h2>
        
        <form action="https://formspree.io/f/xbjqjjwz" method="POST" class="custom-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <div class="input-wrapper">
              <i class="fa fa-user"></i>
              <input id="name" name="name" type="text" placeholder="John Doe" required v-model="name">
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <i class="fa fa-envelope"></i>
              <input id="email" name="_replyto" type="email" placeholder="john@example.com" required v-model="email">
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <div class="input-wrapper text-area-wrapper">
              <i class="fa fa-comment"></i>
              <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required v-model="message"></textarea>
            </div>
          </div>

          <input type="hidden" name="_next" value="/contact" />

          <button type="submit" class="btn-primary submit-btn">
            <i class="fa fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
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

.contact-info-card, .contact-form-card {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-heading {
  font-size: 1.4rem;
  margin: 0;
}

.card-subtext {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.email-direct-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;

  i {
    font-size: 1.6rem;
    color: var(--accent-blue);
  }

  .box-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .box-val {
    font-weight: 600;
    font-size: 1.05rem;
  }
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.platform-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 14px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition-smooth);

  i {
    font-size: 1.2rem;
  }

  &:hover {
    color: #ffffff;
    background: var(--hover-color);
    border-color: var(--hover-color);
    transform: translateY(-2px);
  }
}

.custom-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-secondary);
  }
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 10px 14px;
  transition: var(--transition-smooth);

  i {
    color: var(--text-muted);
  }

  &:focus-within {
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  }

  input, textarea {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.95rem;
    width: 100%;

    &::placeholder {
      color: var(--text-muted);
    }
  }

  &.text-area-wrapper {
    align-items: flex-start;
    padding-top: 12px;
  }
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-top: 6px;
}
</style>

