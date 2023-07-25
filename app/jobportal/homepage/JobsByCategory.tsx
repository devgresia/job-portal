import React from "react";

interface Job {
  id: number;
  company: string;
  title: string;
  image: string;
}

interface JobsByCategoryProps {
  category: string;
  jobs: Job[];
}

const JobsByCategory: React.FC<JobsByCategoryProps> = ({ category, jobs }) => {
  return (
    <div className="border  mb-6 p-6 rounded-lg cursor-pointer  md:w-30">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-100 text-center">
        {category}
      </h2>
      <div className="grid grid-cols-2 gap-2 md:flex-row justify-center  md:mt-10 md:grid-cols-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex border border-gray-500 p-4  flex-col items-center md:w-40 md:items-start mt-5"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
              <img
                src={job.image}
                alt={`${job.company} Logo`}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-base font-medium">{job.company}</h3>
            <p className="text-sm">{job.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsByCategory;
{
  /* <div className="border border-separate mb-6 p-6 rounded-lg text-center md:w-30"> */
}
