import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <h1 className="my-5 text-center">Employee Experience</h1>
      <div className="row">
        <div className="col-md-4 animate__animated animate__fadeInUp">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Employee 1"
              />
              <h5 className="mb-0">Employee 1</h5>
              <p className="text-muted small">Software Engineer</p>
              <p className="text-muted small">2 years of experience</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__fadeInUp">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Employee 2"
              />
              <h5 className="mb-0">Employee 2</h5>
              <p className="text-muted small">Product Manager</p>
              <p className="text-muted small">5 years of experience</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 animate__animated animate__fadeInUp">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Employee 3"
              />
              <h5 className="mb-0">Employee 3</h5>
              <p className="text-muted small">UX Designer</p>
              <p className="text-muted small">3 years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;