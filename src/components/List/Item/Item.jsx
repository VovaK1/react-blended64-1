import React from "react";

export const Item = ({
  story: { title, url, author, num_comments, points },
}) => (
  <li>
    <span style={{ width: "40%" }}>
      <a href={url}>{title}</a>
    </span>
    <span style={{ width: "30%" }}>{author}</span>
    <span style={{ width: "10%" }}>{num_comments}</span>
    <span style={{ width: "10%" }}>{points}</span>
    <span style={{ width: "10%" }}>
      <button type="button">Dismiss</button>
    </span>
  </li>
);
