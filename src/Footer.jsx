import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light sticky-bottom">
      <div className="d-flex justify-content-between px-3">
        <div>
          <i className="bi bi-telephone-fill fs-5"></i>
          {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span> */}
        </div>
        <div>
          <i className="bi bi-person-circle fs-5"></i>
        </div>
        <div>
          <i className="bi bi-grid-3x3-gap-fill fs-1"></i>
        </div>
        <div>
          <i className="bi bi-gear-fill fs-5"></i>
        </div>
        <div>
          <i className="bi bi-record-circle fs-5"></i>
        </div>
      </div>
    </footer>
  );
}
