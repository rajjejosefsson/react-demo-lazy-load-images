import React from 'react';
import { TourItem } from '../tourItem';
import './tours.css';

export const Tours = ({ tours }) => (
  <ul className="c-tours">
    {tours.map(tour => (
      <li key={tour.id} className="c-tours--li">
        <TourItem tour={tour} />
      </li>
    ))}
  </ul>
);
