import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     
import { saveJobApplication } from "../../Utility/Localsotrage";

const JobDetails = () => {
    const jobs = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(jobs, idInt);
    const { salary, job_title, contact_information } = job;
    const { email, address, phone } = contact_information


    const handleApplyJob =() =>{
        saveJobApplication(idInt);
        toast("You have applied Successfully!");
    }
    return (
        <div>
            <h2>Job Details of: {job.job_title}</h2>
            <div className="grid md:grid-cols-4">
                <div className="border-2 md:col-span-3">
                    <h1>details text comming here</h1>
                </div>
                <div className=" md:col-span-1 p-3">
                    <div className="px-4 py-2 border-2 bg-[#7e90fe1a] rounded-lg">
                        <div className="mb-4">
                            <h2 className="text-xl my-2 font-bold ">Job Details</h2>
                            <hr className="border-2" />
                            <p> <span className="text-base font-semibold">Salary</span> : {salary}</p>
                            <p> <span className="text-base font-semibold">Job Title</span>: {job_title}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl my-2 font-bold ">Contact Information</h2>
                            <hr className="border-2" />
                            <p> <span className="text-base font-semibold">Phone</span> :{phone} </p>
                            <p> <span className="text-base font-semibold">Email</span> :{email} </p>
                            <p> <span className="text-base font-semibold">Address</span> :{address} </p>

                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary my-2 w-full">Apply Now</button>
                    <ToastContainer/>



                </div>
            </div>
        </div>
    );
};

export default JobDetails;