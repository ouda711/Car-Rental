import React from 'react';
import './css/pick-up-form.css';

function PickUpForm() {
  return (
    <div className="pick__up__form">
      <div className="form__header">Pick Up</div>
      <form
        onSubmit="return login()"
        id="submitForm"
        method="post"
        data-parsley-validate=""
        data-parsley-errors-messages-disabled="true"
        noValidate=""
        _lpchecked="1"
      >
        <input
          type="hidden"
          name="_csrf"
          value="7635eb83-1f95-4b32-8788-abec2724a9a4"
        />
        <div className="form-group required">
          <lSabel htmlFor="pickup">Pick Up Location</lSabel>
          <input
            type="text"
            className="form-control text-lowercase"
            id="pickup"
            required=""
            name="pickup"
            value=""
          />
        </div>
        <div className="form-group required">
          <lSabel htmlFor="start_date">Pick Up Date</lSabel>
          <input
            type="date"
            className="form-control text-lowercase"
            id="start_date"
            required=""
            name="start_date"
            value=""
          />
        </div>
        <div className="form-group required">
          <lSabel htmlFor="return_date">Return Date</lSabel>
          <input
            type="date"
            className="form-control text-lowercase"
            id="return_date"
            required=""
            name="return_date"
            value=""
          />
        </div>
        <div className="form-group pt-1">
          <button className="btn btn-primary btn-block" type="submit">
            Find a Vehicle
          </button>
        </div>
      </form>
    </div>
  );
}

export default PickUpForm;
