import { useForm } from "react-hook-form";
import img1 from "../public/images/illustration-sign-up-desktop.svg";
import img2 from "../public/images/illustration-sign-up-mobile.svg";
import { useContext } from "react";
import { AppContext } from "./Context";
function Email() {
  const { error, setError, setEmail, setIsEmailGiven } = useContext(AppContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
  } = useForm();
  const submitForm = async (data) => {
    // Manually trigger validation for the entire form
    const isValid = await trigger();
    if (errors) {
      setError(!error);
    }

    if (isValid) {
      // Your form submission logic here
      console.log("Form data:", data);
      console.log(errors);
      setEmail(data["email"]);
      setIsEmailGiven(true);
    }
  };
  return (
    <main>
      <section className="subscribe">
        <div className="pic">
          <picture>
            <source media="(min-width: 900px)" srcSet={img1} />
            <img src={img2} alt="mobile-img" />
          </picture>
        </div>
        <div className="container">
          <div className="email-info">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="grid-group">
              <div className="flex-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                >
                  <defs>
                    <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF6A3A" />
                      <stop offset="100%" stopColor="#FF527B" />
                    </linearGradient>
                  </defs>
                  <g fill="none">
                    <circle cx="32" cy="32" r="32" fill="url(#a)" />
                    <path
                      stroke="#FFF"
                      strokeWidth="4"
                      d="m18.286 34.686 8.334 7.98 19.094-18.285"
                    />
                  </g>
                </svg>
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                >
                  <defs>
                    <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF6A3A" />
                      <stop offset="100%" stopColor="#FF527B" />
                    </linearGradient>
                  </defs>
                  <g fill="none">
                    <circle cx="32" cy="32" r="32" fill="url(#a)" />
                    <path
                      stroke="#FFF"
                      strokeWidth="4"
                      d="m18.286 34.686 8.334 7.98 19.094-18.285"
                    />
                  </g>
                </svg>
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                >
                  <defs>
                    <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF6A3A" />
                      <stop offset="100%" stopColor="#FF527B" />
                    </linearGradient>
                  </defs>
                  <g fill="none">
                    <circle cx="32" cy="32" r="32" fill="url(#a)" />
                    <path
                      stroke="#FFF"
                      strokeWidth="4"
                      d="m18.286 34.686 8.334 7.98 19.094-18.285"
                    />
                  </g>
                </svg>
                <p>And much more!</p>
              </div>
            </div>
          </div>
          <div className="email">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="email-input-container"
            >
              <div className="error-message-container">
                <label htmlFor="email">Email address</label>
                <p className="error-message">{errors?.email?.message}</p>
              </div>
              <div className="input-button-container">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Valid email required",
                    },
                  })}
                  className={
                    errors?.email?.message
                      ? "email-input have-error"
                      : "email-input"
                  }
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                  formNoValidate
                />
                <button type="submit" className="button">
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Email;
