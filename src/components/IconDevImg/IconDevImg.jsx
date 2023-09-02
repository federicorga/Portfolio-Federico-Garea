import './IconDevImg.css';

function IconDevImg({imgUrl, title, width="55px", height="55px", clase}) {
  return (
  <>
  <button className='btn' data-tooltip={title}>
  <img src={imgUrl} title={title} alt={title} width={width} height={height} className={clase} />
  </button>

 
  </>
  );
}

export default IconDevImg;
