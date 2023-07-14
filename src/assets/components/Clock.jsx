import Arrows from "./Arrows";

/* eslint-disable react/prop-types */
export default function Clock({ data, onFilter }) {
  return (
    <div className='clock-box'>
      <div className="clock-top">
        <div className='clock-title'>{data.name}</div>
        <button onClick={onFilter} className='clock-delete'>X</button>
      </div>
      <time className="clock">
        <Arrows inc={data} />
      </time>
    </div >

  )
}
