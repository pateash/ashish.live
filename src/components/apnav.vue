<template>
  <div id="menu" class="menu">
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li >
        <router-link to="/experience">Experience</router-link>
      </li>
      <li>
        <router-link to="/opensource">Opensource</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/research">Research</router-link>
      </li>
      <li >
        <router-link to="/education">Education</router-link>
      </li>
      <li>
        <router-link to="/timeline">Timeline</router-link>
      </li>

      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <a href="https://drive.google.com/open?id=1syAW8LKtjt-_2PBUctfecM-eDtzaucfV" target="_blank">download cv</a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name:'ap-hav'
  }
</script>

<style>

</style>
