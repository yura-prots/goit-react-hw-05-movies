import { RotatingLines } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="orangered"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Wrapper>
  );
};

export default Loader;
