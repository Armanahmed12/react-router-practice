import React, { useEffect, useState } from 'react';

const Features = () => {
 
  const [features, setFeatures] = useState([]);
  useEffect(()=>{

         fetch('features.json')
        .then(response => response.json())
        .then(data => setFeatures(data))
        
  },[]);

  console.log(features);

    return (
        <div className="font-family-custom rounded-3 bg-dark text-white mx-5 my-5 text-center py-2">
            <h2 className='text-warning mt-4'>Our Features</h2>
            <div className='features-container row row-cols-2 p-4'>
              {

                      features && features.map(feature => 
                        {

                           return <div key={feature.id}>
                              
                              <img style={{width:'4rem',height:'4rem'}} className='rounded-circle my-3' src={feature.image} alt="" />
                              <h2 className='mb-3 text-warning'>{feature.title}</h2>
                              <p>Description: {feature.description} </p>
                              
                           </div>
                      })

              } 
            </div>
        </div>
    );
};

export default Features;