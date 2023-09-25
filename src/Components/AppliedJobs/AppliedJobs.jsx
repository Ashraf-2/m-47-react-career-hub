import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localsotrage";

const AppliedJobs = () => {
    //don't applied real world.
    const jobs = useLoaderData();
    const [appliedJobs_state, setAppliedJobs] = useState([]);
    const [displayJobs,setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs_state);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs_state.filter( job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);

        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs_state.filter( job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }

    }
    console.log(jobs);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const JobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    JobsApplied.push(job);
                }
            }

            setAppliedJobs(JobsApplied);
            setDisplayJobs(JobsApplied);

            console.log(jobs, storedJobIds, JobsApplied);
        }
    }, [jobs])






    return (
        <div >
            <h2>Job I applied - {appliedJobs_state.length}</h2>

            {/* dropdown */}
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a> All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>



            <ul>
                {
                    displayJobs.map(job => <li key={job.id}> <span>{job.job_title}, {job.company_name}, {job.remote_or_onsite}</span> </li>)
                }
            </ul>



        </div>
    );
};

export default AppliedJobs;