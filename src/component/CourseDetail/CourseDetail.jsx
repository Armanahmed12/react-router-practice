import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {

    const [courses, setCourses] = useState([]);
    const subjectName = useLoaderData();
     console.log(subjectName);

    useEffect(() => {
      
        const dataLoad = async () =>{

           const response = await fetch("../../../public/ourCourses.json");
           const data = await response.json();
            setCourses(data);
        };
        dataLoad();


    }, []);
  console.log(courses);
      const matchedCourse = courses.find(course => course.subject === subjectName);
      console.log(matchedCourse);
     
    return (
        <div className='mt-4'>
           {
             matchedCourse && 
              <div style={{width:'50%',height:'90vh'}} key={matchedCourse.subject} className="col m-auto bg-dark text-center
             border p-0 rounded-3 position-relative">
              <img className="w-100 h-50 rounded" src={matchedCourse.img} alt="" />
                <div className="courseBody text-white  align-left mt-3">
                   <h2>Course : {matchedCourse.subject}</h2>
                    <p className="fs-5 mb-0 pb-0">Class : {matchedCourse.class}</p>
                    <p className="fs-6 mb-0 py-1">Topics : {matchedCourse.topics}</p>
                   <h3 className="fs-5">Teacher : {matchedCourse.teacher}</h3>
                   <Link to={`/courseDetail/${matchedCourse.subject}`}><Button className='w-100 position-absolute mt-4 fixed-bottom'>Buy Course</Button></Link>
                </div>
            </div>
           }
        </div>
    );
};

export default CourseDetail;