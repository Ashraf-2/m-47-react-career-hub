/* eslint-disable react/prop-types */
import { GrLocation } from 'react-icons/gr';
import { AiOutlineDollar } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id,logo, job_title, company_name, location, remote_or_onsite, job_type, salary } = job;
    // console.log(logo);

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 py-4 max-h-20 border-2">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="btn px-5 py-2 font-bold border bg-transparent mr-4 rouded text-[#7E90FE] border-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn px-5 py-2 font-bold border bg-transparent rouded text-[#7E90FE] border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <div>

                            <h3 className='flex items-center '><GrLocation className='text-sm mr-2'></GrLocation><span className='text-sm'>{location}</span></h3>
                        </div>
                        <div>
                            <h3 className='flex items-center'><AiOutlineDollarCircle className='text-sm mr-2'></AiOutlineDollarCircle> <span>Salary: {salary}</span></h3>
                        </div>
                    </div>

                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">Details</button>

                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Job;