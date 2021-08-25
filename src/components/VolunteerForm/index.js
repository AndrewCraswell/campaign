import React from "react";
export const VolunteerForm = (props) => {
    console.log("por",props)
  return (
   <>
    <div className="breadcrumb-area  margin-bottom-120"
     style={{
         backgroundSize:"100% 100%",
         backgroundRepeat:"no-repeat",
         marginTop:"90px",
         backgroundPosition:"center",
        //  backgroundImage:`url(${props?.data?.image?.localFile?.publicURL})`
         }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-inner">
                        <h2 className="page-title">Learn more about Bill’s vision and help spread the word about his candidacy.</h2>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-inner-area padding-bottom-90">
        <div className="container">
            <div className="row justify-content-center">
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
          
                <div className="col-lg-6">
                    <div className="contact-form style-01">
                        <form action="request.html" className="contact-page-form style-01" novalidate="novalidate">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="fname" placeholder="First Name" className="form-control" required="" aria-required="true"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="lname" placeholder="Last Name" className="form-control" required="" aria-required="true"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="phone" placeholder="Phone" className="form-control" required="" aria-required="true"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="email" placeholder="Email" className="form-control" required="" aria-required="true"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" name="zip" placeholder="Zip" className="form-control" required="" aria-required="true"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="btn-wrapper">
                                        <a href="#" className="boxed-btn"><span>Sign up</span></a>
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

export default VolunteerForm;

