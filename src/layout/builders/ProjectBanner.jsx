import React from 'react';
import PropTypes from 'prop-types';

const ProjectBanner = ({ title, imageUrl }) => {
  return (
    <div className="bg-gray-100  overflow-hidden shadow mb-6"  style={{ borderRadius: "12px" }}>
      {/* Banner Image */}
      {/* <div
        className="h-40 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`, // Dynamic image URL
        }}
      ></div> */}

      {/* Title Section */}
      {/* <div className="p-4 bg-white">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div> */}
    </div>
  );
};

// Prop Types for validation
ProjectBanner.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectBanner;
