import React from 'react';
import './tourItem.css';
import LazyLoad from 'react-lazyload';
import { Placeholder } from '../placeholder';

export const TourItem = ({ tour }) => (
  <div className="c-tour-item">
    <div className="u-flex--2 c-tour-item--images-container">
      <LazyLoad height={170} placeholder={<Placeholder height={170} />}>
        <img
          alt="tour"
          src={tour.tour_image}
          className="c-tour-item--image c-tour-item--image-tour"
        />
      </LazyLoad>
      <LazyLoad height={112} placeholder={<Placeholder height={112} />}>
        <img
          alt="map"
          src={tour.map_image}
          className="c-tour-item--image c-tour-item--image-map"
        />
      </LazyLoad>
    </div>

    <div className="u-flex--3 u-padding--gutter c-tour-item--content-container">
      <h4 className="u-font-size--24">{tour.tour_name}</h4>
      <p className="u-margin--bottom-gutter u-font-size--18">
        {tour.description}
      </p>
      <dl className="c-tour-item--info-dl">
        <dt>destinations</dt>
        <dd>{tour.destinations.join(', ')}</dd>
        <dt>starts/ ends in</dt>
        <dd>
          {tour.destinations[0]} /{' '}
          {tour.destinations[tour.destinations.length - 1]}{' '}
        </dd>
        <dt>age range</dt>
        <dd>
          {tour.age_from} to {tour.age_to} year olds
        </dd>
        <dt>country</dt>
        <dd>{tour.country}</dd>
        <dt>Operator</dt>
        <dd>{tour.tour_operator}</dd>
      </dl>
    </div>

    <div className="u-flex-- u-padding--gutter">
      <dl className="c-tour-item--savings u-display--flex u-justify-content--space-between u-margin--bottom-sm">
        <dl>
          <dt>Our savings</dt>
          <dd>€ {tour.saving}</dd>
        </dl>
        <dl>
          <dt className="u-text-align--right">From</dt>
          <dd className="u-font-weight--bold">€ {tour.price}</dd>
        </dl>
      </dl>
      <dl className="c-tour-item--days u-display--flex u-justify-content--center">
        <dt>{tour.length}</dt>
        <dd className="u-padding--left-gutter-xs">Days</dd>
      </dl>
    </div>
  </div>
);
