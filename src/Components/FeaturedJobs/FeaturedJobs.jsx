import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4);

    

    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])



    return (
        <div className="text-center">
            <h2 className="text-4xl">Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {
                    jobs.slice(0,dataLength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {/* jnkr bhai: className={'my-5' dataLength === jobs.length && 'hidden'} bellow */}
            <div  className={ dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn">All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;