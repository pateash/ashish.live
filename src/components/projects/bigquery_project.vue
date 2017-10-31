<template>
    <div class="inner-item" style="margin-top:-2em">
        <p class="ap-heading"><span style="font-size:2em">CarWale BigQuery</span></p>
        <p style="font-size:1em">BigQuery Project has following components -</p>
        <p style="font-size:1em">
        <ul style="list-style-type: disc;margin-left:2em;">
            <li>Dashboard</li>
            <li>Submit Job</li>
            <li>Schedule Job</li>
            <li>Job History</li>
            <li>Admin Panel</li>
        </ul>
        </p>
        <h4 style='margin-top:1em'  id="dashboard">Dashboard</h4>
        <p style="font-size:1em">
        <p style="font-size:1em">Dashboard provides descriptive information about the user’s activity on Bigquery Platform, it shows panel having information about -</p>
        <ul style="list-style-type: disc;margin-left:2em;">
            <li>Total Jobs submitted</li>
            <li>Job Completed and result available</li>
            <li>Job Running ( Queued for execution and Processing )</li>
            <li>Job Cleaned ( Completed but data has been cleaned )</li>
            <li>Job facing error ( Number of jobs which are not able to execute successfully)</li>
        </ul>
        <p style="font-size:1em">on clicking view history link corresponding to every panel, we can see history of corresponding job category.</p>
        <p style="font-size:1em"><img style='margin:1em;' align="left"  src="https://imgd.aeplcdn.com/0x0/bigquery/dashboard.png" alt="Carwale System Archictecture" /></p>

        <h4 style='margin-top:1em'  id="submit-job">Submit Job</h4>
        <p style="font-size:1em">
        <p style="font-size:1em">Submit Job Page allows user to get quick result for smaller jobs, the result of these small jobs will be store in file system, so maximum number of rows which will be returned is 5000, so if you wanted to get big result you have to Submit Job which will be discussed in next section.</p>
        <p style="font-size:1em"><img style='margin:1em;'  src="https://imgd.aeplcdn.com/0x0/bigquery/submit_job.png" alt="Carwale System Archictecture" /></p>
        <div class="admonition note">
            <dl>
                <dt>file having result stored in files will be cleaned after certain period of time, so try to analyse your data</dt>
                <dd><p style="font-size:1em">as soon as it fetched, otherwise you have to run Job again.</p>
                </dd>
            </dl>
        </div>
        <div class="admonition warning">
            <dl>
                <dt>Do not run jobs on submit page, which are supposed to return you rows more than 5000, otherwise your data will not</dt>
                <dd><p style="font-size:1em">complete, for bigger jobs schedule them.</p>
                </dd>
            </dl>
        </div>

        <h4 style='margin-top:1em'  id="schedule-job">Schedule Job</h4>
        <p style="font-size:1em">
        <p style="font-size:1em">Schedule Job Page allows you to run big job (even more than 5000 lines) , the result will be stored in Mysql database and result can be fetched any time. User will also be able to store its data where he want (existing table or create new table)</p>
        <p style="font-size:1em">User could also able to decide the interval of schedule job execution, So he could be able to decide after how many days certain job will be executed again.</p>
        <p style="font-size:1em">Using this User will able able to create Daily,Weekly and monthy reports easily.</p>
        <p style="font-size:1em"><img style='margin:1em;'  src="https://imgd.aeplcdn.com/0x0/bigquery/schedule_job.png" alt="Carwale System Archictecture" /></p>

        <h4 style='margin-top:1em'  id="job-result">Job Result</h4>
        <p style="font-size:1em">
        <p style="font-size:1em">Job Result Page allows you to see result of small job (not more than 5000 lines) , the result will be stored in a JSON file in  and result can be fetched any time.
        but after certain interval of time, the data will be removed. </p>
        <p>Use can also be able to export data in CSV formate.</p>
        <p style="font-size:1em"><img style='margin:1em;'  src="https://imgd.aeplcdn.com/0x0/bigquery/job_result.png" alt="Carwale System Archictecture" /></p>


        <h4 style='margin-top:1em' id="job-history">Job History</h4>

        <p>
            <a href="/job/history">Job History Page</a> allows user to look through all his/her job history, user can user this information to resubmit jobs so he doesnot need to fill all information again</p>
        <p>
            As in Realtime most of the jobs remain same, so this feature supposed to be very helpful to user.
        </p>
        <p><strong>filters with status</strong> in all history pages provides functionality for searching through all jobs and getting only jobs associated with particular filter. you can also check more than one status to get desired job result.</p>
        <p><img  style='margin:1em;' src="https://imgd.aeplcdn.com/0x0/bigquery/job_history.png" alt="Carwale System Archictecture" /></p>
        <h4 style='margin-top:1em' id="admin-panel">Admin Panel</h4>
        <p>
        <p>Admin Panel is available to users having admin privileges , admin will have his dedicated dashboard where he/she could be able to see all job data (like simple user do for himself).</p>
        <p>Admin Could also be able to manager users and their job and he can also see all job history and history specific to any user.</p>
        <div class="btn-load-more">
            <router-link to="/projects/bigquery/architecture" ><button title="BigQuery Architecture" class="load-more">Architecture</button></router-link>
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