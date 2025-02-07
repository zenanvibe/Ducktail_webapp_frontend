import React, { useState } from "react";

const ProjectInviteForm = () => {
  return (
    <div className="w-full">
      {/* Cards Container */}
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <InviteCard id={1} />
          <InviteCard id={2} />
          <InviteCard id={3} />
        </div>
      </div>
    </div>
  );
};

const InviteCard = ({ id }) => {
  const [status, setStatus] = useState(null);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full flex flex-col items-start">
      {/* Project Image */}
      <div className="w-full flex justify-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Project"
          className="w-14 h-14 rounded-full"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold w-full text-center mt-3">
        THE MADE MODEL
      </h2>
      <p className="text-gray-500 text-sm w-full text-center">
        Join Us To Build An Innovative Project!
      </p>

      {/* Details */}
      <div className="mt-4 space-y-2 w-full">
        <div className="grid grid-cols-2 items-center text-gray-700 text-sm">
          <span className="flex items-center gap-2">📜 <span>Company Ducktail Id</span></span>
          <span className="font-semibold">12455248</span>
        </div>
        <div className="grid grid-cols-2 items-center text-gray-700 text-sm">
          <span className="flex items-center gap-2">📞 <span>Phone Number</span></span>
          <span className="font-semibold">9662220001</span>
        </div>
      </div>

      {/* Status Message */}
      {status && (
        <div className={`mt-4 text-sm font-semibold w-full text-center ${
          status === "accepted" ? "text-green-600" : "text-red-600"
        }`}>
          {status === "accepted" ? "You have accepted the invite!" : "You have declined the invite!"}
        </div>
      )}

      {/* Buttons */}
      {!status && (
        <div className="flex justify-center gap-4 mt-5 w-full">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => setStatus("declined")}
          >
            DECLINE
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => setStatus("accepted")}
          >
            ACCEPT
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectInviteForm;
