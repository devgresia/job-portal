"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const legendClass = "mb-8 mt-8 font-bold";
  const formGroupClass = "md:flex md:items-center mb-6";
  const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const professionalExperienceCount = useState(1);
  return (
    <div className="w-full grid place-content-center">
      <form
        onSubmit={handleSubmit(() => {})}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-fit">
        <fieldset>
          <legend className={legendClass}>Personal Information</legend>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="md:w-2/3">
              <input
                id="firstName"
                {...register("firstName")}
                className={inputClass}
              />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="LastName">Last Name</label>
            </div>
            <div className="md:w-2/3">
              <input
                id="LastName"
                {...register("LastName")}
                className={inputClass}
              />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="md:w-2/3">
              <input id="email" {...register("email")} className={inputClass} />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="md:w-2/3">
              <input id="phone" {...register("phone")} className={inputClass} />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className={legendClass}>Resume Objective</legend>
          <textarea
            id="objective"
            {...register("objective")}
            className={`${inputClass} max-h-28 mb-8`}
          />
        </fieldset>
        <button>Next Page</button>

        <fieldset>
          <legend className={legendClass}>Professional Experience</legend>
          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="title">Position Title</label>
            </div>
            <div className="md:w-2/3">
              <input id="title" {...register("title")} className={inputClass} />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="companyName">Company Name</label>
            </div>
            <div className="md:w-2/3">
              <input
                id="companyName"
                {...register("companyName")}
                className={inputClass}
              />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="startDate">Start Date</label>
            </div>
            <div className="md:w-2/3">
              <input
                id="startDate"
                type="date"
                {...register("startDate")}
                className={inputClass}
              />
            </div>
          </div>

          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="endDate">End Date</label>
            </div>
            <div className="md:w-2/3">
              <input
                id="endDate"
                type="date"
                {...register("endDate")}
                className={inputClass}
              />
            </div>
          </div>
          <div className={formGroupClass}>
            <div className="md:w-1/3">
              <label htmlFor="workSummary">Work Summary</label>
            </div>
            <div className="md:w-2/3">
              <textarea
                id="workSummary"
                {...register("workSummary")}
                className={`${inputClass} max-h-28`}
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Page;
