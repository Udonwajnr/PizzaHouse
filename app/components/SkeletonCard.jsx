import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <section className='w-full'>
          {/* <h2 className="section-title">
            <Skeleton duration={1} height={30} width={300} />
          </h2> */}
    
          <ul className="list flex flex-wrap justify-between md:justify-center">
            {Array(9)
              .fill()
              .map((item, index) => (
                <li className="skeleton_cards max-w-[350px]" key={index}>
                  <Skeleton height={300} />
                  <h4 className="card-title">
                  {/* <Skeleton circle={true} height={50} width={50} /> &nbsp; */}
                    <Skeleton height={36} width={`80%`} />
                  </h4>
                  <p className="card-channel">
                    <Skeleton width={`60%`} />
                  </p>
                  <div className="card-metrics">
                    <Skeleton width={`90%`} />
                  </div>
                </li>
              ))}
          </ul>
        </section>
      );
}

export default SkeletonCard