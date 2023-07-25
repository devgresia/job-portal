import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 mb-5">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center border rounded-lg px-2">
          {/* <FontAwesomeIcon icon={faSearch} className="text-gray-500 " /> */}
          <input
            type="text"
            className="border-none outline-none px-2 py-1 bg-transparent"
            placeholder="Search Jobs"
          />
        </div>

        <div className="flex items-center border rounded-lg px-2">
          {/* <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" /> */}
          <select className="border-none outline-none bg-transparent">
            <option value="">Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="flex items-center border rounded-lg px-2">
          {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" /> */}
          <input
            type="text"
            className="border-none outline-none px-2 py-1 bg-transparent"
            placeholder="Location"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 ">
        <button className="px-4 py-2 bg-red-300 text-white rounded-lg mb-2 md:mb-0 md:mr-2">
          Search
        </button>
        <button className="px-4 py-2 bg-green-400 text-white rounded-lg ">
          Discussion Forum
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
