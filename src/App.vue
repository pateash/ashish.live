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
      <ap-nav></ap-nav>
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
        <p><span class="icon"><i class="fa fa-code"></i></span> by <b>
          <a target='_blank' href="//github.com/ashishpatel0720" style="color:#ff7018">Ashish</a></b> in
          <span class="icon"><i class="fa fa-heart" style="color:#ff4d44"></i></span> with <br>
          <a target='_blank' href="//vuejs.org"><img src="/static/images/vue-icon.png"></a>.</p>
        <p>Copyright &copy; {{ new Date().getFullYear() }}</p>
      </div>
    </header>
    <div class="wrapper">
      <div class="about" style="margin:-1.7em;">
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
      </div>
    </div>
  </div>

</template>

<script>
    import apNav from '@/components/apnav';

    export default {
        name: 'app',
        components:{apNav},

        mounted() {
            this.$Progress.finish()
        },
        created () {
            //  [App.vue specific] When App.vue is first loaded start the progress bar
            this.$Progress.start()

            //  hook the progress bar to start before we move router-view
            // each time route is changed
            this.$router.beforeEach((to, from, next) => {
                //  does the page we want to go to have a meta.progress object
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress;
                    // parse meta tags
                    this.$Progress.parseMeta(meta)
                }
                //  start the progress bar
                this.$Progress.start();
                //  continue to next page
                next()
            });

            //  hook the progress bar to finish after we've finished moving router-view
            this.$router.afterEach((to, from) => {
                window.scrollTo(0,0);
                //  finish the progress bar
                this.$Progress.finish()
            })
        },
    }
</script>

<style>
  @import "./assets/styles/app.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
