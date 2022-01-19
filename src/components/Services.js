import React from "react";

function Services() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Service Page</h1>
            <p>
                We Provide Services Like
            </p>
            <ol>
                <li>eg1</li>
                <li>eg2</li>
                <li>eg3</li>
                <li>eg4</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
