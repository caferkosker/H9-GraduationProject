import React from "react";
import { Link } from "react-router-dom";

const FilterTag = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterTag"
        aria-expanded="true"
        aria-controls="filterTag"
      >
        Etiketler
      </div>
      <div className="card-body show" id="filterTag">
        <Link to="/" className="btn btn-sm btn-outline-info me-2 mb-2">
          Mevlana Şekeri
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
          Hurma Şekeri
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-success me-2 mb-2">
          Çekme Helva
        </Link>
      </div>
    </div>
  );
};

export default FilterTag;
