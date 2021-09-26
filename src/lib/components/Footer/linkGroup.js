import React from "react";
import { Link } from "gatsby";

import { root, item, list, title } from "./linkGroup.module.css";

const LinkGroup = (props) => {
  const { data } = props;

  const { title: groupTitle, links } = data;

  const linkList = links.map((link) => {
    const { title: linkTitle, url } = link;

    const linkElement = url.startsWith("/") ? (
      <Link to={url}>{linkTitle}</Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {linkTitle}
      </a>
    );

    return (
      <li className={item} key={linkTitle}>
        {linkElement}
      </li>
    );
  });

  return (
    <nav className={root}>
      <div className={title}>{groupTitle}:</div>
      <ul className={list}>{linkList}</ul>
    </nav>
  );
};

export default LinkGroup;
