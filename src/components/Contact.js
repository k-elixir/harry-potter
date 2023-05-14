import React from "react";

export default function Contact() {
  return (
    <main className="container text-center mb-5">
      <h1 className="mb-5 mb-mb-0">
        <span>G</span>et in touch
      </h1>
      <form action="https://formspree.io/f/xknaqqvk" method="POST">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="First name"
              className="form-control p-3"
              placeholder="First name"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="Last name"
              className="form-control p-3"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="pt-5">
          <input
            type="email"
            name="email"
            className="form-control p-3"
            placeholder="E-mail address"
          />
        </div>
        <div className="pt-5">
          <textarea
            name="message"
            className="form-control p-2 pb-5"
            placeholder="What would you like to tell me?"
          ></textarea>
        </div>
        <div className="pt-5">
          <button
            type="submit"
            className="btn btn-contact-page p-3 mb-5 mb-mb-0"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
