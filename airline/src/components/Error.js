import React from 'react';
import './style.css'; // Import your local style file

const Error404Page = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  No user found
                </h3>

                <p>the page you are looking for is not available!</p>

                {/* Replace the following URL with your desired route */}
                <a href="/home" className="link_404">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404Page;
