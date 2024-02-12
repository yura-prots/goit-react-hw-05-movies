const { RotatingLines } = require('react-loader-spinner');

const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="50"
      width="50"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
