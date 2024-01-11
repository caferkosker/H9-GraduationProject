import React from "react";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconLifePreserverFill } from "bootstrap-icons/icons/life-preserver.svg";
import { ReactComponent as IconArrowCounterclockwiseFill } from "bootstrap-icons/icons/arrow-counterclockwise.svg";

const CardServices = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
      Müşteri servisi
      </div>
      <div className="card-body">
        <div className="row border-bottom">
          <div className="col-2">
            <IconTruckFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Ücretsiz teslimat</span>
              <p className="text-muted small">59,8₺ 'dan başlayan fiyatlarla</p>
            </div>
          </div>
        </div>
        <div className="row border-bottom py-3">
          <div className="col-2">
            <IconLifePreserverFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">7/24 Destek</span>
              <p className="text-muted small m-0">24 saat çevrimiçi</p>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-2">
            <IconArrowCounterclockwiseFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Ücretsiz iade</span>
              <p className="text-muted small m-0">günde 365</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
