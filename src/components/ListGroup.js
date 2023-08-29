import React from 'react';
import './ListGroup.module.css';

const ListGroup = () => {
  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <div className="list-group list-group-radio d-grid gap-2 border-0">
        <div className="position-relative">
          <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" checked />
          <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid1">
            <strong className="fw-semibold">First radio</strong>
            <span className="d-block small opacity-75">With support text underneath to add more detail</span>
          </label>
        </div>
        {/* ... */}
        <div className="list-group list-group-checkable d-grid gap-2 border-0">
          <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios1" value="" checked />
          {/* ... */}
          <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios2" value="" />
          {/* ... */}
          <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios3" value="" />
          {/* ... */}
          <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios4" value="" disabled />
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
