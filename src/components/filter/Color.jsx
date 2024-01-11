import React from "react";

const FilterColor = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterColor"
        aria-expanded="true"
        aria-controls="filterColor"
      >
        Çeşitleri
      </div>
      <ul className="list-group list-group-flush show" id="filterColor">
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-primary"
                type="checkbox"
                id="flexCheckColor1"
              />
              <label className="form-check-label" htmlFor="flexCheckColor1">
                SADE <span className="text-muted">(5)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input bg-secondary"
                type="checkbox"
                id="flexCheckColor2"
              />
              <label className="form-check-label" htmlFor="flexCheckColor2">
                KAKAOLU <span className="text-muted">(8)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-success"
                type="checkbox"
                id="flexCheckColor3"
              />
              <label className="form-check-label" htmlFor="flexCheckColor3">
                ANTEP FISTIKLI <span className="text-muted">(12)</span>
              </label>
            </div>

            <div className="form-check col">
              <input
                className="form-check-input bg-danger"
                type="checkbox"
                id="flexCheckColor4"
              />
              <label className="form-check-label" htmlFor="flexCheckColor4">
                ÇİLEKLİ <span className="text-muted">(15)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-warning"
                type="checkbox"
                id="flexCheckColor5"
              />
              <label className="form-check-label" htmlFor="flexCheckColor5">
                LİMONLU <span className="text-muted">(6)</span>
              </label>
            </div>
            <div className="form-check col">
              <input
                className="form-check-input bg-info"
                type="checkbox"
                id="flexCheckColor6"
              />
              <label className="form-check-label" htmlFor="flexCheckColor6">
                YABAN MERSİNLİ <span className="text-muted">(2)</span>
              </label>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0">
            <div className="form-check col">
              <input
                className="form-check-input bg-light"
                type="checkbox"
                id="flexCheckColor7"
              />
              <label className="form-check-label" htmlFor="flexCheckColor2">
                BİTTERLİ <span className="text-muted">(7)</span>
              </label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterColor;
