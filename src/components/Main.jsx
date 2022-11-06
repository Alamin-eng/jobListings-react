import React, { useState } from "react";
import {  WrapItem, Avatar, Text, Button } from '@chakra-ui/react';


function Main({jobs}){
    let [filteredJobs, setFilteredJobs] = useState(jobs)
    
    function handleJobRole(e, role) {
        let updatedJobs = jobs.filter((j) => j.role === role)
    setFilteredJobs(updatedJobs)
  }

  // Hi Gladwin pleasee have a look this function to filter languages of jobs. Its an array of array of object.
  function handleLanguage(e, language) {
        let updatedJobs = jobs.filter((j) => j.languages.includes(language) )
       setFilteredJobs(updatedJobs)
  }

  function handleNewJob() {
        let updatedJobs = jobs.filter((j) => j.new === true )
    setFilteredJobs(updatedJobs)
  }

  function handleFeaturedJob() {
        let updatedJobs = jobs.filter((j) => j.featured === true)
    setFilteredJobs(updatedJobs)
  }

  function clearFilteredJobs(){
    setFilteredJobs(jobs)
  }
  
    // let filterRole = jobs.filter((e) => e.role === 'Fullstack' )
   
    return(
            <main class='main'>
                <Button colorScheme='teal' size='md' border='3px' className="m-2" onClick={clearFilteredJobs}>Clear Filter</Button>
                <ul>
                    {filteredJobs.map((e) => (
                        <div className="jobs shadow rounded">
                            <div className="left">
                                <div>
                                    
                                    <WrapItem>
                                    <Avatar name= {e.company}/>
                                    </WrapItem>
                                                 
                                </div> 
                                <div className="jobInfo">
                                    <div className="newAndFeatured">
                                        <p className="company">{e.company}</p> 
                                        <button className="new badge" onClick={handleNewJob}>{e.new ? 'NEW' : ''}</button>
                                        <button className="featured badge badge-dark" onClick={handleFeaturedJob}>{e.featured ? 'FEATURED' : ''}</button>
                                    </div>
                                    
                                    <Text as='b'>{e.position}</Text>
                                    <div className="locationAndType">
                                        <p>{e.postedAt}</p> - 
                                        <p>{e.contract}</p> -
                                        <p>{e.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="right">
                                <button className="role badge p-1" onClick={(event) => handleJobRole(event, e.role)}>{e.role}</button>  {/* notice how we passed 2nd urgument for handleJobRole */}
                                <button className="level badge ">{e.level}</button>
                                <div className="languages">{e.languages.map((e) => 
                                    <button className="language badge" onClick={(event) => handleLanguage(event, e)}>{e}</button>)}
                                </div> 
                                <div className="tools">{e.tools.map((e) => <button className="tools badge ">{e}</button>)}</div>
                            </div>

                        </div>
                    ))}
                    
                </ul>
            </main>
    )
}
export default Main;