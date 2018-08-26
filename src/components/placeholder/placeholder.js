import React from 'react';
import './placeholder.css';

export const Placeholder = ({ height, children }) => (
  <div className="placeholder" style={{ height: height }}>
    {children}
  </div>
);
