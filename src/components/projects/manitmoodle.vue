<template>
    <!--<div class="columns">-->
    <!--<div class="column">-->
    <div class="inner-item" style="margin-top:-2em">
        <span style="font-size:2em">manit moodle <span class="tag is-primary" style="font-size:0.4em;"><a href="//manitmoodle.tk" target="_blank" style="color:white;">Visit Website</a></span></span>
        <br>
        <p align="left"><img class="image"  width="50%" height="40%" src="/images/moodle-big.gif"></p>
        <br>
        <h4 id="about-manitmoodle">About&nbsp;MANIT MOODLE</h4>
        <p>
            Manit Moodle is online assignment and discussion website
            which allows students and teachers to share assignment online and also posts and discuss about given
            projects and activities going on in
            campus.

        </p><br>
        <ul style="list-style-type:disc;margin-left:2em;">
            <li>Simple, Easy to use.</li>
            <li>Expressive, intuitive Website Designed using HTML and CSS. </li>
            <li>Robust backend developnmet using Precedural PHP.</li>
        </ul><br>

        <h4 id="technology-used">technology used</h4>
        <p >
            <a  target='_blank' href="//php.net" ><img class='image' width='250' height='200'
                                                       src="/images/logo3.svg"></a>
        </p>
        <p>
            <a  target='_blank' href="//mysql" ><img width='250' height='100' src="/images/logo5-min.png"></a>
        </p>
        <em><b>and Javascript, HTML, CSS.</b></em>
        <br>
        <br>

        <h4 id="project">Project at Github  </h4>
        <div class="card" style="margin-left:2em;margin-right:2em;margin:1em 1em;">
            <div class="card-content">

                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://h5p.org/sites/default/files/moodle-icon-page_0.png">
                        </figure>
                    </div>
                    <div class="media-content">
                        <span style="font-size:1.3em" ><a  target='_blank' href="//github.com/ashishpatel0720/moodle">Moodle</a> </span>
                    </div>
                </div>
                <div class="content">
                    If you like this project, or want to use it for your work or want to contribute,
                    <router-link to="/contact">contact</router-link>
                </div>
            </div>
        </div>
        <h4 >Say Something about ManitMoodle  </h4>
        <div id="disqus_thread"></div>
    </div>
</template>

<script>
    export default {

    };
</script>


<style>
    <!--adding top margin for all h4 elements in this page-->

    h4{
        margin-top:2em;
    }
</style>