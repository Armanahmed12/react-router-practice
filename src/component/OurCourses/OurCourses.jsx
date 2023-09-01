import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OurCourses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("ourCourses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  
  return (
    <div className="font-family-custom text-danger my-5 text-center py-2">
      <h2 className="fw-bold">Our Courses</h2>
      <div className="coursesContainer row row-cols-4 gap-3  justify-content-center p-4">
        {courses.map((course) => {
          return (
            <div style={{width:'30%',height:'450px'}} key={course.subject} className="col bg-dark
             border border-3 border-primary p-0 rounded-3 position-relative">
              <img className="w-100 h-50 rounded" src={course.img} alt="" />
                <div className="courseBody text-white  align-left mt-3">
                   <h2>Course : {course.subject}</h2>
                    <p className="fs-5">Class : {course.class}</p>
                    {/* <p className="fs-6">Topics : {course.topics}</p> */}
                   <h3 className="fs-5">Teacher: {course.teacher}</h3>
                   <Link to={`courseDetail/${course.subject}`}><Button className='w-100 position-absolute mt-4 fixed-bottom'>See Detail</Button></Link>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCourses;
