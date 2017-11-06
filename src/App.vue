<template>
  <!--<div id="app">-->
  <!--<img src="./assets/logo.png">-->
  <!--<router-view/>-->
  <!--</div>-->
  <!-- Latest compiled and minified JS -->
  <div>
    <header>
      <div class="logo">
        <h3><a href="/">AP</a></h3>
      </div>
      <apNav></apNav>
      <div class="social-icons">
        <a target='_blank' title='linkedin' href=https://linkedin.com/in/ashishpatel0720  style="color:#006699"><i
                class="fa fa-linkedin-square fa-2x"></i></a>
        <a target='_blank' title='github' href=https://github.com/ashishpatel0720  style="color:#5d2973"><i
                class="fa fa-github fa-2x"></i></a>
        <a target='_blank' title='Facebook' href=https://facebook.com/ashishpatel0720  style="color:#3b5998"><i
                class="fa fa-facebook-square fa-2x"></i></a>
        <a target='_blank' title='Email' href="mailto:ashishpatel0720@gmail.com"><i class="fa fa-envelope-o fa-2x"></i></a>
        <a target='_blank' title='stackoverflow' href=https://stackoverflow.com/users/6178783/ashish-patel
           style="color:#f48024"><i class="fa fa-stack-overflow fa-2x"></i></a>
        <a target='_blank' title='twitter' href=https://twitter.com/ashishpatel0720  style="color:#32cdfd"><i
                class="fa fa-twitter fa-2x"></i></a>
        <p><span class="icon"><i class="fa fa-code"></i></span> by <b><a target='_blank'
                                                                         href="//github.com/ashishpatel0720"
                                                                         style="color:#ff7018">Ashish</a></b> in <span
                class="icon"><i class="fa fa-heart" style="color:#ff4d44"></i></span> with <br><a target='_blank'
                                                                                                  href="//laravel.com"><img
                src="/images/laravel-icon.png"></a> <a target='_blank' href="//vuejs.org"><img
                src="/images/vue-icon.png"></a>.</p>
        <p>Copyright &copy; 2017 <a target='_blank' href="//github.com/ashishpatel0720">@ashishpatel0720</a></p>
      </div>
    </header>
    <div class="wrapper">
      <div class="about" style="margin:-1.7em;">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import {apNav} from '@/components/apNav';

    export default {
        name: 'app',
        components:{'apNav':apNav}
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
