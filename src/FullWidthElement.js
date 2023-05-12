import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FullWidthElement = ({ color, image, children }) => {
  const bgStyle = {
    backgroundColor: color,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={cn('w-screen h-48 flex justify-center items-center', { 'bg-no-repeat': image })} style={bgStyle}>
      <div className="max-w-screen-lg mx-auto text-center">{children}</div>
    </div>
  );
};

FullWidthElement.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FullWidthElement.defaultProps = {
  image: null,
};

export default FullWidthElement;
