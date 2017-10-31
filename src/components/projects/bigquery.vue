<template>
    <!--<div class="columns">-->
    <!--<div class="column">-->
    <div class="inner-item" style="margin-top:-2em">
        <p class="ap-heading"><span style="font-size:2em">CarWale BigQuery</span></p>
        <p align="center"><img src="https://imgd.aeplcdn.com/0x0/bigquery/bigquery_architecture.png"></p>

        <h4 id="about">About</h4>
        <p  style="font-size:1em">
            CW BigQuery is a service that enables interactive analysis of massively large datasets stored in Cassandra Storage.
            It allows user to submit and schedule Spark Job , just using SQL like syntax. </p>
        <h4 id="architecture" style="margin-top:1em;">Architecture</h4>
        <p style="font-size:1em">The Architecture of Bigquery consists of three components</p>
        <ul style="list-style-type:disc;margin-left:2em;">
            <li>ProxyQuery</li>
            <li>Mist Server</li>
            <li>Spark</li>
        </ul><br>

        <h4 id="query-proxy">Query Proxy</h4>
        <p style="font-size:1em">Query Proxy is Most important component of our system, it acts as mediator (as the name <strong>Proxy</strong> suggests) between Web Application and the <strong>Mist Server</strong>.</p>
        <p style="font-size:1em">It receives request from the user , validates and push the job request in queue along with returning Jobid to user, if queue is empty.</p>
        <p style="font-size:1em ">After getting responce from Query Proxy, it save responce to file named after the <strong>job Id</strong> .</p>
        <p style="font-size:1em">When User request for result it will generate result using pagination and return result to ther user.</p>
        <p style="font-size:1em"><strong>Query Proxy</strong> is also responsible for cleaning response files after certain amount of time.</p>
        <p align="center"><img style='margin:1em;' src="/images/ProxyQuery.jpg" alt="proxyQuery" /></p>
        <br>
        <h4 id="mist-server">Mist Server</h4>
        <p style="font-size:1em">
        <p style="font-size:1em;" ><img align="left" src="/images/mist.png" alt="proxyQuery" width="200" height="100" style="margin:1em;" /></p>
        <p style="font-size:1em">MistServer is a full-featured, next-generation streaming media toolkit for OTT (internet streaming). It takes care of all the annoying little problems you come across in media streaming projects, allowing you to focus on what makes your product or service unique. The MistServer software and our accompanying services allow anyone to quickly gain and keep a competitive edge.</p>
        <p style="font-size:1em">MistServer is written entirely in C++ and comes with an easy to use and integrate JSON API.</p>
        <p style="font-size:1em">for knowing more about what is media server checkout mistserver <a href="https://mistserver.org/mistserver">documentation</a></p>
        <br>
        <h4 id="spark">Spark</h4>
        <p>
        <p ><img  align="left" src="/images/spark.png"  style="margin:1em;" alt="Spark" width="200" height="100" /></p>
        <p>Apache Spark™ is a fast and general engine for large-scale data processing</p>
        <p>Spark Run programs up to 100x faster than Hadoop MapReduce in memory, or 10x faster on disk.</p>
        <p>Spark offers over 80 high-level operators that make it easy to build parallel apps. And you can use it interactively from the Scala, Python and R shells.</p>
        <p>for more read the quick start guide <a href="https://spark.apache.org/docs/latest/quick-start.html">here</a></p>
        <div class="btn-load-more">
            <router-link to="/projects/bigquery/project" ><button title="BigQuery Components" class="load-more">Project</button></router-link>
        </div>
        <h4 >Say Something about BigQuery  </h4>
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