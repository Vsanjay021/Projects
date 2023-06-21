import React ,{useState,useEffect} from "react";
import './App.css'
import axios from "axios";
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {

  type JobType={
    id:string,
    order:string
    company:string,
    duties:string[],
    dates:string,
    title:string
  }

  const [loading,setLoading]=useState<boolean>(true);
  const [jobs,setJobs]=useState<JobType[]>([]);
  const [value,setValue]=useState<number>(0);


  const fetchJobs = async () => {
    const response=await axios.get(url);
    const newJobs : JobType[]=await response.data;
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobs();
  },[]);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {company,dates,duties,title}:JobType=jobs[value];
  return (
    <>
        <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
    </>
  )
}

export default App
