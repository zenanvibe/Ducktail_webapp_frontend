// StatusBadge.js (Common Component for Status Dropdown)
import React, { useState } from "react";
import statusClasses from "./statusClasses";

const StatusBadge = ({ project, handleStatusChange }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  return (
    <td className="py-1 px-4 relative">
      {project.status && statusClasses[project.status] && (
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdownId(openDropdownId === project.id ? null : project.id);
            }}
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              statusClasses[project.status]?.bg
            } ${statusClasses[project.status]?.text} cursor-pointer hover:shadow-md transition-shadow duration-200`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                statusClasses[project.status]?.dot
              } mr-2`}
            ></span>
            {project.status.charAt(0).toUpperCase() +
              project.status.slice(1)}
          </button>

          <div className={`absolute z-10 mt-2 w-auto rounded-md shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
            openDropdownId === project.id 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}>
            <div className="p-2 space-y-1">
              {Object.keys(statusClasses).map((statusKey) => (
                <button
                  key={statusKey}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStatusChange(project.id, statusKey);
                    setOpenDropdownId(null);
                  }}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium w-full ${statusClasses[statusKey].bg} ${statusClasses[statusKey].text} transition-all duration-200 hover:scale-102 hover:shadow-md`}
                >
                  <span className={`h-2 w-2 rounded-full ${statusClasses[statusKey].dot} mr-2`}></span>
                  {statusKey.charAt(0).toUpperCase() + statusKey.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </td>
  );
};

export default StatusBadge;
