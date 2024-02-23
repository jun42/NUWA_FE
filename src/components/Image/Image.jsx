import { forwardRef } from 'react';

const Image = ({ src, alt, ...props },ref) => {
  return <img {...props} src={src} alt={alt} ref={ref}/>;
};

export default forwardRef(Image);
