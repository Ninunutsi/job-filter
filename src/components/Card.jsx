import React from "react";

const Card = ({
  logo,
  company,
  newRole,
  featured,
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
  role,
  level,
  handleClick,
}) => {
  const listArray = [role, level, ...languages, ...tools];
  return (
    <>
      <div className="card-container">
        <div className="card-info">
          <div className="card-info-image">
            <img src={logo} alt="logo" />
          </div>
          <div className="card-info-details">
            <div className="card-info-details-header">
              <h2 className="company">{company}</h2>
              {newRole ? <h2 className="factor new">NEW!</h2> : null}
              {featured ? <h2 className="factor featured">FEATURED</h2> : null}
            </div>
            <h1 className="position">{position}</h1>
            <div className="card-info-details-footer">
              <h3>{postedAt}</h3>
              <h3>&#x2022; {contract} &#x2022;</h3>
              <h3>{location}</h3>
            </div>
          </div>
        </div>
        <div className="card-list">
          {listArray.map((elem, index) => (
            <span onClick={handleClick} key={index}>
              {elem}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
