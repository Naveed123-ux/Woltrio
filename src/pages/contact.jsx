import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import appData from "@data/app.json";

const Contact = () => {
  const Content = {
    subtitle: "Contact",
    title: "Get in touch",
    info: [
      {
        icon: "img/icons/4.svg",
        label: "Support email",
        value: "info@woltrio.com",
      },
      {
        icon: "img/icons/7.svg",
        label: "Call 24/7",
        value: "+92 51 8891888",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/5.jpg"} pageTitle={"Contact"} />

      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-90">
          <div className="col-xl-5">
            <h3 className="mil-link mil-appearance mil-accent mil-mb-30">
              {Content.subtitle}
            </h3>
            <h3 className="mil-mb-60 mil-appearance">{Content.title}</h3>
          </div>
          <div className="col-xl-6">
            <div className="row mil-mt-55-adapt">
              {Content.info.map((item, key) => (
                <div className="col-lg-6" key={`contact-item-${key}`}>
                  <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                    <div className="mil-icon mil-accent">
                      <img src={item.icon} alt={item.label} />
                    </div>
                    <div className="mil-icon-box-text">
                      <h6>{item.value}</h6>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append("name", values.name);
            data.append("email", values.email);
            data.append("message", values.message);
            data.append("PhoneNumber", values.PhoneNumber);

            fetch(form.action, {
              method: "POST",
              body: data,
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  status.innerHTML = "Thanks for your submission!";
                  form.reset();
                } else {
                  response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                      status.innerHTML = data["errors"]
                        .map((error) => error["message"])
                        .join(", ");
                    } else {
                      status.innerHTML =
                        "Oops! There was a problem submitting your form";
                    }
                  });
                }
              })
              .catch((error) => {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              });

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              action={appData.settings.formspreeURL}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="text"
                      name="name"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <label className="mil-link">Name</label>
                    <span></span>
                    <em>{errors.name && touched.name && errors.name}</em>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="tel"
                      name="PhoneNumber*"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <label className="mil-link">Phone Number</label>
                    <span></span>
                    <em className="mil-text-sm">
                      {errors.PhoneNumber &&
                        touched.PhoneNumber &&
                        errors.PhoneNumber}
                    </em>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <input
                      className="mil-link"
                      type="email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <label className="mil-link">Email*</label>
                    <span></span>
                    <em className="mil-text-sm">
                      {errors.email && touched.email && errors.email}
                    </em>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <select
                      className="mil-link select-styling"
                      name="name"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    >
                      <option value="" disabled>
                        Select service type *
                      </option>
                      <option value="custom_development">
                        Custom Development
                      </option>
                      <option value="wordpress_shopify">
                        Wordpress / Shopify
                      </option>
                      <option value="emr_ehr">EMR / EHR</option>
                      <option value="3d_animations">3D Animations</option>
                    </select>

                    <span className="span-select"></span>
                    <em>{errors.name && touched.name && errors.name}</em>
                  </div>
                </div>

                <div className="col-lg-12">
                  {/* email field */}
                  <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                    <textarea
                      name="message"
                      className="mil-link"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <label className="mil-link">Message</label>
                    <span></span>
                    <em>
                      {errors.message && touched.message && errors.message}
                    </em>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="mil-text-sm mil-mb-30">
                    *We promise not to disclose your personal information to
                    third parties.
                  </p>
                </div>
                <div className="col-lg-6">
                  <button
                    type="submit"
                    className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30"
                    disabled={isSubmitting}
                  >
                    <span>Send message</span>
                  </button>
                </div>
                <div className="form-status" id="contactFormStatus" />
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.7359275449353!2d73.06031617616402!3d33.63808843948443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ae1e470295%3A0xee6f57cda632dd10!2sWoltrio!5e0!3m2!1sen!2s!4v1753436975437!5m2!1sen!2s"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map end */}
    </Layouts>
  );
};
export default Contact;
