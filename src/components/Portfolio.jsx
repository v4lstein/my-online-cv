import React from "react";
import * as Icon from "react-feather";

function Portfolio(props) {
  const { title, subtitle, imageUrl, live, github } = props.content;

  return (
    <div
      className={
        props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"
      }
    >
      <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          {!live ? null : (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={live}>
                <Icon.PlayCircle />
              </a>
            </li>
          )}
          {github ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={github}>
                <Icon.GitHub />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!github ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={github}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
    </div>
  );
}

export default Portfolio;
