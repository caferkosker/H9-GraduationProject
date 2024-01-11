import React from "react";

const Details = (props) => {
  return (
    <React.Fragment>
      <p>
        Birlikte Yönetiyoruz -MUSTAFA KAVUŞ
      </p>
      <details>
        <summary>Daha fazla ayrıntı</summary>
        <p>Başkanlar</p>
      </details>
      <details>
        <summary>Daha fazla ayrıntı</summary>
        <p>Yapılanlar</p>
      </details>
      <hr />
    </React.Fragment>
  );
};

export default Details;
