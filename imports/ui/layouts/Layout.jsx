import React, { PropTypes } from 'react';

export const Layout = ({ content }) => <div className="main-app">{content}</div>;

Layout.propTypes = {
  content: PropTypes.element.isRequired,
};
