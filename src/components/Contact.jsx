import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <form>
              <lable for="name"><b>Your Name</b></lable>
              <br/>
              <input type="text"/>
              <br/>

              <lable for="email"><b>email</b></lable>
              <br/>
              <input type="email"/>
              <br/>

              <lable for="name"><b>Name</b></lable>
              <br/>
              <input type="text"/>

              <input type="submit"/>



            </form>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
