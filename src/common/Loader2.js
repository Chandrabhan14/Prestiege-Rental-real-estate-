import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const LoaderA = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<ColorRing
  visible={true}
//   height="80"
//   width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#00529B', '#00529B', '#00529B', '#00529B', '#00529B']}
  />    </div>
  );
};

export default LoaderA;