import { Col } from "react-bootstrap";
import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx" style={{ 
          height: '300px', 
          display: 'flex', 
          flexDirection: 'column', 
          backgroundColor: '#4A2FBD', // Background color for uncovered area
          justifyContent: 'center', 
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src={imgUrl} 
            alt={title} 
            style={{ 
              objectFit: "contain", 
              width: "100%", 
              height: "85%" 
            }} 
          />
          <div className="proj-txtx" style={{ padding: '10px', textAlign: 'center', height: '30%' }}>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
