import Image from "next/image";
import SearchForm from "./jobportal/homepage/SearchForm";
import JobsByCategory from "./jobportal/homepage/JobsByCategory";
import AdSection from "./jobportal/homepage/AddSection";
import AdSections from "./jobportal/homepage/AddSections";
import Tester from "./jobportal/homepage/Tester";

export default function Home() {
  const dummyJobs = [
    {
      id: 1,
      company: "FrontEnd Developer",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 2,
      company: "Sales & Marketing",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 3,
      company: "Graphics Designer",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 4,
      company: "Graphics Designer",
      title: "Job Title 4",
      image: "/glogo.png",
    },
    {
      id: 5,
      company: "FrontEnd Developer",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 6,
      company: "Sales & Marketing",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 7,
      company: "Graphics Designer",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 8,
      company: "Graphics Designer",
      title: "Job Title 4",
      image: "/glogo.png",
    },

    // Add more jobs as needed
  ];

  const HighPayingJobs = [
    {
      id: 1,
      company: "Sample Company 1",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 2,
      company: "Sample Company 2",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 3,
      company: "Sample Company 3",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 4,
      company: "Sample Company 4",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 5,
      company: "FrontEnd Developer",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 6,
      company: "Sales & Marketing",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 7,
      company: "Graphics Designer",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 8,
      company: "Graphics Designer",
      title: "Job Title 4",
      image: "/glogo.png",
    },

    // Add more jobs as needed
  ];

  const TopEmployers = [
    {
      id: 1,
      company: "Cotiviti",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 2,
      company: "Ncell",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 3,
      company: "Gresia",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 4,
      company: "Sample Company 4",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 5,
      company: "FrontEnd Developer",
      title: "Job Title 1",
      image: "/glogo.png",
    },
    {
      id: 6,
      company: "Sales & Marketing",
      title: "Job Title 2",
      image: "/glogo.png",
    },
    {
      id: 7,
      company: "Graphics Designer",
      title: "Job Title 3",
      image: "/glogo.png",
    },
    {
      id: 8,
      company: "Graphics Designer",
      title: "Job Title 4",
      image: "/glogo.png",
    },

    // Add more jobs as needed
  ];
  return (
    <main className="flex flex-col min-h-screen  items-center justify-between">
      {/* <SearchForm /> */}
      <div className=" ">
        <AdSection />
        <AdSections />
      </div>
      <div className="mt-5  ">
        <JobsByCategory category="Jobs By Category" jobs={dummyJobs} />
        <JobsByCategory category="High Paying Jobs" jobs={HighPayingJobs} />
        <JobsByCategory category="Top Employers " jobs={HighPayingJobs} />
        <SearchForm />
      </div>
    </main>
  );
}
