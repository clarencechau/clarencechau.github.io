import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Formspree.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Formspree() {
  const [state, handleSubmit] = useForm("xvojwwdb");
  if (state.succeeded) {
    return <p>Your message has been submitted!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-email" htmlFor="email">
        Email
      </label>
      <input
        className="form-email-input"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="form-email" htmlFor="email">
        Message
      </label>
      <textarea className="form-message" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="form-button" type="submit" disabled={state.submitting}>
        Submit <FontAwesomeIcon className="form-check-icon" icon={faCheck} />
      </button>
    </form>
  );
}

export default Formspree;
