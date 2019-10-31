<template>
  <div class="inner-item">
    <div class="columns">
      <div class="column">
        <div class="inner-item">
          <h4 style="margin-bottom: 0.5em;">Opensource Projects</h4>
          <!--one element representing one Project-->
          <!--Cassandra Bigquery-->
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img style="border-radius: 0.5em"
                       src="/static/images/regexplore-img.png"
                       alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p><!--title-->
                    <span style="font-size:1.4em">RegExplore <span style="font-size:0.7em"> , OpenSource Project </span></span>
                    <router-link to="/projects/regexplore"><span
                      class="tag is-info"> <b>Know More</b> </span></router-link>

                    <br>
                    regexplore.github.com , October 2017 - Present<br>
                    <b> Angular and Angular-Material</b>
                  </p>
                </div><!--font-awesome icons-->
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img style="border-radius: 0.5em"
                       src="https://avatars2.githubusercontent.com/u/37457770?s=200&v=4"
                       alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p><!--title-->
                    <span style="font-size:1.4em">ReviewDeck <span style="font-size:0.7em"> , Ethereum Blockchain Project </span></span>
                    <a href="https://github.com/ReviewDeck" target="_blank"><span
                      class="tag is-info"> <b>Know More</b> </span></a>

                    <br>
                    Hackathon Project, HackInTheNorth , March 2018<br>
                    <b> ReactJS and Solidity</b>
                  </p>
                </div><!--font-awesome icons-->
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {

    }
</script>

<style>

</style>
