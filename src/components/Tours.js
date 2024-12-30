import React from 'react';
import Title from './Title';
import { tours } from '../data';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" sub="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>

              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={tour.icon}></i>
                    </span>{' '}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.amount}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
