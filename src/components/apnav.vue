<template>
    <div id="menu" class="menu">
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li >
                <router-link to="/education">Education</router-link>
            </li>

            <li>
                <router-link to="/projects">Projects</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
            <li>
                <a href="https://drive.google.com/open?id=1duTbSZt5nYyc2ZDHs2dV7N-p_wP-E7Ca" target="_blank">download cv</a>
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