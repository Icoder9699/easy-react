import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import "./Tabs.scss";
const url = 'https://course-api.com/react-tabs-project'

export default function Tabs() {
    const [loading ,setLoading] = React.useState(true);
    const [jobs, setJobs] = React.useState();
    const [activeTab, setActiveTab] = React.useState(0);

    const fetchDates = async () => {
        const res = await fetch(url);
        const resData = await res.json();
        console.log(resData);
        setJobs(resData);
        setLoading(false);
    }
    React.useEffect(() => {
        fetchDates();
    }, [])

    if(loading){
        return(
            <h2 className="loading">Loading...</h2>
        )
    }
            
    const {title, company, dates, duties} = jobs[activeTab];

    return (
        <div className="tabs">
            <h2 className="title tabs__title">
                Experience with tabs
                <div className="underline"></div>
            </h2>
            <div className="tabs__row">
                <div className="tabs__sidebar">
                    <ul className="tabs__sidebar-jobs">
                        {jobs && jobs.map((job, index) => (
                            <li 
                                key={job.order}
                                className={activeTab === index && "active"}
                                onClick={() => setActiveTab(index)}
                            >
                                {job.company}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tabs__content">
                    <h4>{title}</h4>
                    <h5>{company}</h5>
                    <p>{dates}</p> 
                    {jobs && duties.map(duty => (
                        <li>
                            <FaAngleDoubleRight/>
                            <p>{duty}</p>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
