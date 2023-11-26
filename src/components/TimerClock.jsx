const renderTime = ({ remainingTime }) => {
  // if (remainingTime === 0) {
  //   return <div className='timer'>Times Up!</div>;
  // }

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const HOURS = String(hours).padStart(2, "0");
  const MINUTS = String(minutes).padStart(2, "0");
  const SECONDS = String(seconds).padStart(2, "0");
  return (
    <div className='timer'>
      <div className='value'>{`${HOURS}:${MINUTS}:${SECONDS}`}</div>
    </div>
  );
};
export default renderTime;
