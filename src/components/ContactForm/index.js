import React from "react";
import firebase from "gatsby-plugin-firebase";

export const ContactForm = (props) => {
  return (
    <>
      <div
        class="breadcrumb-area  margin-bottom-120"
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          marginTop: "90px",
          backgroundPosition: "center",
          // backgroundImage:`url(${props?.data?.image?.localFile?.publicURL})`
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-inner">
                <h2 class="page-title">Sign up to receive updates from the campaign.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-inner-area padding-bottom-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="content-area">
                <div class="section-title padding-bottom-25">
                  {/* <span>We are available 24/7</span> */}
                  <h4 class="title">Keep in touch with us</h4>
                </div>
                <div class="single-contact-item">
                  <div class="icon">
                    <i class="flaticon-map"></i>
                  </div>
                  <div class="content">
                    <span class="title">Address</span>
                    <p class="details">
                      Committee to Elect William Harris
                      <br />
                      P.O. Box 667
                      <br />
                      Fuquay-Varina, NC 27526
                    </p>
                  </div>
                </div>
                <div class="single-contact-item">
                  <div class="icon">
                    <i class="flaticon-call"></i>
                  </div>
                  <div class="content">
                    <span class="title">Phone</span>
                    <p class="details">
                      <a href="tel:+458123657">+458 123 657 </a>
                    </p>
                  </div>
                </div>
                <div class="single-contact-item">
                  <div class="icon">
                    <i class="flaticon-mail-2"></i>
                  </div>
                  <div class="content">
                    <span class="title">Mail US</span>
                    <p class="details">
                      <a href="mailto:info@william.com">info@william.com</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-form style-01">
                <form
                  action="request.html"
                  class="contact-page-form style-01"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="fname"
                          placeholder="First Name"
                          class="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          class="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="telephone"
                          placeholder="Telephone"
                          class="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          name="msg"
                          id="msg"
                          cols="1"
                          rows="4"
                          placeholder="Send Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="btn-wrapper">
                        <a href="#" class="boxed-btn">
                          <span>Send Message</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
