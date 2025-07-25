import Layouts from "@layouts/Layouts";
import React from "react";
import PageBanner from "@components/PageBanner";
import { useState } from "react";

const form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    cssLevel: "",
    javascriptLevel: "",
    cv: null,
  });

  const skillLevels = [
    { value: "1", label: "I do not have experience with this (1)" },
    { value: "2", label: "I know basic concepts only (2)" },
    { value: "3", label: "I have good knowledge to get the job done (3)" },
    { value: "4", label: "I have solid experience (4)" },
    { value: "5", label: "I can do anything anyone asks! (5)" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      cv: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <Layouts>
      <div className="container my-5 ">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-lg-8">
            <div className="card-body p-4 p-md-5">
              <p className="text-muted fs-2 text-center fw-semibold mb-4 mt-5 text-set-center">
                Thank you for your interest in WOLTRIO
              </p>
              <p className="small text-set-center text-muted mb-4">
                Below are a few questions about yourself and your professional
                experience. Please answer them carefully.
              </p>

              <form
                className="border border-2 p-5 rounded-3 mt-5"
                onSubmit={handleSubmit}
              >
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control job-form-input"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="experience" className="form-label">
                    Relevant Experience to Job Opening{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    name="experience"
                    placeholder="Ex: 2 years, 3 months"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <h5 className="mb-3">Self Assessment</h5>
                  <p className="text-muted small">
                    Please rate yourself on a scale of 1 to 5 in the
                    skills/tools below:
                  </p>

                  <div className="mb-4">
                    <label className="form-label mb-3 form-label-bold">
                      CSS <span className="text-danger">*</span>
                    </label>
                    {skillLevels.map((level) => (
                      <div
                        className="form-check form-check-1"
                        key={`css-${level.value}`}
                      >
                        <input
                          className="form-check-2"
                          type="radio"
                          name="cssLevel"
                          id={`css-${level.value}`}
                          value={level.value}
                          checked={formData.cssLevel === level.value}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`css-${level.value}`}
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="form-label form-label-bold">
                      JavaScript <span className="text-danger">*</span>
                    </label>
                    {skillLevels.map((level) => (
                      <div
                        className="form-check form-check-1"
                        key={`js-${level.value}`}
                      >
                        <input
                          className="form-check-2"
                          type="radio"
                          name="javascriptLevel"
                          id={`js-${level.value}`}
                          value={level.value}
                          checked={formData.javascriptLevel === level.value}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`js-${level.value}`}
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="form-label form-label-bold">
                      NODE <span className="text-danger">*</span>
                    </label>
                    {skillLevels.map((level) => (
                      <div
                        className="form-check form-check-1"
                        key={`node-${level.value}`}
                      >
                        <input
                          className="form-check-2"
                          type="radio"
                          name="nodeLevel"
                          id={`node-${level.value}`}
                          value={level.value}
                          checked={formData.nodeLevel === level.value}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`node-${level.value}`}
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <label className="form-label form-label-bold">
                      REACT <span className="text-danger">*</span>
                    </label>
                    {skillLevels.map((level) => (
                      <div
                        className="form-check form-check-1"
                        key={`react-${level.value}`}
                      >
                        <input
                          className="form-check-2"
                          type="radio"
                          name="reactLevel"
                          id={`react-${level.value}`}
                          value={level.value}
                          checked={formData.reactLevel === level.value}
                          onChange={handleInputChange}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`react-${level.value}`}
                        >
                          {level.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="upload-section-spacing">
                    <label htmlFor="cv" className="upload-label">
                      Upload CV <span className="required-mark">*</span>
                    </label>
                    <div className="custom-file-wrapper">
                      <input
                        type="file"
                        className="hidden-input"
                        id="cv"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                      <label htmlFor="cv" className="custom-upload-btn">
                        Choose File
                      </label>
                      <span className="selected-file-text">No file chosen</span>
                    </div>
                    <div className="upload-hint-text">
                      Accepted formats: PDF, DOC, DOCX
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="button-designing-openings-details"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default form;
