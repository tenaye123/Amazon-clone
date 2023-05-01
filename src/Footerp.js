import React from "react";

function Footerp(props) {
  let { linkTitle, linkName } = props;

  return (
    <div>
      <h3>{linkTitle}</h3>
      <ul>
        {linkName.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footerp;
