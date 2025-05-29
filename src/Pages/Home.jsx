import React, { Suspense } from 'react';
import Banner from '../Componant/Banner';
import HotJobs from '../Componant/HotJobs';

const Home = () => {

  const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;