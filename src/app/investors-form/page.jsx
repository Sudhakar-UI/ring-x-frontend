"use client";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, FormCheck, Image } from "react-bootstrap";
import Link from "next/link";
import Homeheader from "../components/Homeheader";
import Homefooter from "../components/Homefooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../public/assets/css/home.css";

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imageName, setImageName] = useState('');
  const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');
  const handleFileChange = (event) => {
    setImageName(event.target.files[0].name);
    readURL(event.target);
  };

  useEffect(() => {
    document.body.classList.add("innerpagebg", "affiliatepage");

    if (currentStep === 3) {
      document.body.classList.add("stepthree");
    } else {
      document.body.classList.remove("stepthree");
    }

    return () => {
      document.body.classList.remove(
        "innerpagebg",
        "affiliatepage",
        "stepthree"
      );
    };
  }, [currentStep]);

  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const backTemplate = (handlePrevious) => {
    return currentStep === 1 ? (
      <Button className="base-button sitebtn btn" onClick={handlePrevious}>
        Reset
      </Button>
    ) : null;
  };

  const nextTemplate = (handleNext, handleReset) => {
    return currentStep === 2 ? (
      <>
        <Button className="base-button sitebtn btn" onClick={handleReset}>
          Reset
        </Button>
        <Button className="base-button sitebtn btn" onClick={handleNext}>
          Next
        </Button>
      </>
    ) : null;
  };

  const finishTemplate = (handleComplete) => {
    return currentStep === 1 ? (
      <Button className="finish-button sitebtn btn" onClick={handleComplete}>
        Finish
      </Button>
    ) : null;
  };
  const tabChanged = ({ prevIndex, nextIndex }) => {
    setCurrentStep(nextIndex); // Update the current step
  };

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="innerpage">
        <Homeheader />
        <article className="affiliate-form-page-align gridparentbox ">
          <div className="innerpages">
            <div className="affheading ">
              <h2 className="heading-title pb-3">
                Create Your Investment Token
              </h2>
              <p className="content mb-0">
               Launch your investment token on our secure RWA platform. Submit your project details for verification and approval.
              </p>
            </div>
            <Container>

              <div className="row mt-4">
                <div className="col-lg-12 mx-auto">
                  {/* STEP BAR */}
                  <div className="steps-wrapper">
                    {/* STEP 1 */}
                    <div className="step-item">
                      <div
                        className={`step-circle ${activeTab > 0
                          ? "completed"
                          : activeTab === 0
                            ? "active"
                            : ""
                          }`}
                      >
                        <FontAwesomeIcon icon={faCheck} color="#fff" />
                      </div>
                      <div
                        className={`step-label ${activeTab === 0 ? "active" : ""
                          }`}
                      >
                        Register
                      </div>
                      <div
                        className={`step-line ${activeTab > 0 ? "completed" : ""
                          }`}
                      ></div>
                    </div>

                    {/* STEP 2 */}
                    <div className="step-item">
                      <div
                        className={`step-circle ${activeTab > 1
                          ? "completed"
                          : activeTab === 1
                            ? "active"
                            : ""
                          }`}
                      >
                        <FontAwesomeIcon icon={faCheck} color="#fff" />
                      </div>
                      <div
                        className={`step-label ${activeTab === 1 ? "active" : ""
                          }`}
                      >
                        Submit your application
                      </div>
                      <div
                        className={`step-line ${activeTab > 1 ? "completed" : ""
                          }`}
                      ></div>
                    </div>

                    {/* STEP 3 */}
                    <div className="step-item">
                      <div
                        className={`step-circle ${activeTab === 2 ? "active" : ""
                          }`}
                      >
                        <FontAwesomeIcon icon={faCheck} color="#fff" />
                      </div>
                      <div
                        className={`step-label ${activeTab === 2 ? "active" : ""
                          }`}
                      >
                        Done
                      </div>
                    </div>
                  </div>
                  {/* END STEP BAR */}

                  {activeTab === 1 && (
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <h4 className="m-0">Submit your Application</h4>
                    </div>
                  )}

                  <div className="aff-form-container">
                    {/* CONTENT */}
                    <div className="aff-form-content">
                      {/* TAB 1 */}
                      {activeTab === 0 && (
                        <div>
                          <h2 className="aff-form-title">Register</h2>
                          <p>
                            Welcome! Please click "Submit your application" to
                            start.
                          </p>

                          <div className="d-flex gap-3 aff-next-btn-border">
                            <button
                              className="aff-next-btn sitebtn"
                              onClick={() => setActiveTab(1)}
                            >
                              Start Application
                            </button>
                          </div>
                        </div>
                      )}

                      {/* TAB 2 */}
                      {activeTab === 1 && (
                        <form className="aff-form-form siteformbg">
                          <div className="logcenterbox">
                            <div className="d-flex-new">
                              <Form.Group className="form-group">
                                <Form.Label>Project Name </Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="projectname"
                                />{" "}
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>Select Network</Form.Label>
                                <Form.Select
                                  id="affiliatetype"
                                  className="form-control"
                                >
                                  <option>Crypto influencer (Individual)</option>
                                  <option>
                                    Social Media influencer (Non-Crypto Community)
                                  </option>
                                  <option>Developer / Trading Tools</option>
                                  <option>Others</option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                            <div className="d-flex-new">
                              <Form.Group className="form-group">
                                <Form.Label>Select Type</Form.Label>
                                <Form.Select id="language" className="form-control">
                                  <option>English</option>
                                  <option>Espaniol</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>Token Price (In USD)</Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="contactinfo"
                                />{" "}
                              </Form.Group>
                            </div>
                            <div className="d-flex-new">
                              <Form.Group className="form-group">
                                <Form.Label>Token Name </Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="contactinfo"
                                />{" "}
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>Symbol </Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="contactinfo"
                                />{" "}
                              </Form.Group>
                            </div>
                            <div className="d-flex-new">
                              <Form.Group className="form-group">
                                <Form.Label>Decimal Point  </Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="contactinfo"
                                />{" "}
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>
                                  Location
                                </Form.Label>
                                <Form.Select id="country" className="form-control">
                                  <option>English</option>
                                  <option>Espaniol</option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                            <div className="d-flex-new">
                              <Form.Group className="form-group">
                                <Form.Label>
                                  About
                                </Form.Label>
                                <textarea
                                  className="form-control"
                                  rows={4}
                                  id="textarea1"
                                ></textarea>
                              </Form.Group>
                              <Form.Group className="form-group">
                                <Form.Label>
                                  Description
                                </Form.Label>
                                <textarea
                                  className="form-control"
                                  rows={4}
                                  id="textarea1"
                                ></textarea>
                              </Form.Group>
                            </div>
                            <div className="d-flex-new align-items-baseline">
                              <Form.Group className="form-group">
                                <Form.Label>Website </Form.Label>
                                <Form.Control
                                  type="text"
                                  name=""
                                  id="contactinfo"
                                />{" "}
                              </Form.Group>
                              <Form.Group className='form-group'>
                                <p className="t-red">Contact Details : BTC 0.00256987 at 0.025639745 BTC</p>
                                <Form.Label>Upload Document </Form.Label>
                                {/* <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                                                <label htmlFor="fileupload2" style={{ cursor: 'pointer' }}>
                                                    <p>Click or drag and drop a file here</p>
                                                    <input
                                                        type="file"
                                                        id="fileupload2"
                                                        onChange={(e) => handlefileupload2Change(e, 'file1')}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                                {selectedFiles.file1 && (
                                                    <div>
                                                        <p>{selectedFiles.file1.file.name}</p>
                                                        <img
                                                            src={selectedFiles.file1.preview}
                                                            alt="File 1 Preview"
                                                            style={{ maxWidth: '100%', maxHeight: '140px' }}
                                                        />
                                                    </div>
                                                )}
                                            </div> */}

                                <div className="kycproffbox">
                                  <div>
                                    <Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
                                  </div>
                                  <div className="uploadprofileiconbox text-end">
                                    <label className="custom-file-upload customupload" is="file-upload">Upload here..</label>
                                    <input id="id_backdoc" onChange={handleFileChange} name="profile" type="file" />
                                  </div>
                                </div>
                                <p className="t-red m-0 text-center"><small>(Maximum file upload size: 10M)</small></p>
                              </Form.Group>

                            </div>
                            <div className="d-flex-new">

                              <Form.Group className='form-group'>
                                <p className="t-red">Contact Details : BTC 0.00256987 at 0.025639745 BTC</p>
                                <Form.Label>Upload Document </Form.Label>
                                {/* <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                                                <label htmlFor="fileupload2" style={{ cursor: 'pointer' }}>
                                                    <p>Click or drag and drop a file here</p>
                                                    <input
                                                        type="file"
                                                        id="fileupload2"
                                                        onChange={(e) => handlefileupload2Change(e, 'file1')}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                                {selectedFiles.file1 && (
                                                    <div>
                                                        <p>{selectedFiles.file1.file.name}</p>
                                                        <img
                                                            src={selectedFiles.file1.preview}
                                                            alt="File 1 Preview"
                                                            style={{ maxWidth: '100%', maxHeight: '140px' }}
                                                        />
                                                    </div>
                                                )}
                                            </div> */}

                                <div className="kycproffbox">
                                  <div>
                                    <Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
                                  </div>
                                  <div className="uploadprofileiconbox text-end">
                                    <label className="custom-file-upload customupload" is="file-upload">Upload here..</label>
                                    <input id="id_backdoc" onChange={handleFileChange} name="profile" type="file" />
                                  </div>
                                </div>
                                <p className="t-red m-0 text-center"><small>(Maximum file upload size: 10M)</small></p>
                              </Form.Group>
                              <Form.Group className='form-group'>
                                <p className="t-red">Contact Details : BTC 0.00256987 at 0.025639745 BTC</p>
                                <Form.Label>Upload Document </Form.Label>
                                {/* <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                                                <label htmlFor="fileupload2" style={{ cursor: 'pointer' }}>
                                                    <p>Click or drag and drop a file here</p>
                                                    <input
                                                        type="file"
                                                        id="fileupload2"
                                                        onChange={(e) => handlefileupload2Change(e, 'file1')}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                                {selectedFiles.file1 && (
                                                    <div>
                                                        <p>{selectedFiles.file1.file.name}</p>
                                                        <img
                                                            src={selectedFiles.file1.preview}
                                                            alt="File 1 Preview"
                                                            style={{ maxWidth: '100%', maxHeight: '140px' }}
                                                        />
                                                    </div>
                                                )}
                                            </div> */}

                                <div className="kycproffbox">
                                  <div>
                                    <Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
                                  </div>
                                  <div className="uploadprofileiconbox text-end">
                                    <label className="custom-file-upload customupload" is="file-upload">Upload here..</label>
                                    <input id="id_backdoc" onChange={handleFileChange} name="profile" type="file" />
                                  </div>
                                </div>
                                <p className="t-red m-0 text-center"><small>(Maximum file upload size: 10M)</small></p>
                              </Form.Group>

                            </div>






                          </div>

                          {/* ➜ Next Button Added Here */}
                          <div className="d-flex gap-3 aff-next-btn-border">
                            <button className="btn aff-next-btn borderbtn w-100">Reset</button>
                            <button
                              type="button"
                              className="aff-next-btn sitebtn w-100"
                              onClick={() => setActiveTab(2)}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      )}

                      {/* TAB 3 */}
                      {activeTab === 2 && (
                        <div>
                          <h4 className="sub-heading my-3">
                            Your Submission has been received
                          </h4>
                          <p className="content mb-0">
                            Your application is under review. Results will be sent
                            via on-site push notifications. It will take 1–2
                            working days.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </article>
        <Homefooter />
      </div>
    </>
  );
};

export default page;
