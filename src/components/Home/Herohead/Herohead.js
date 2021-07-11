import { VscChevronRight} from "react-icons/vsc";

const Herohead = (props) => {
    const {imageMo, imagePc, title, description, btnDetailOne, btnDetailTwo, display} = props
  return (
      <div className='herohead'>
        <img className='herohead-image img-mo' src={imageMo} alt='herohead' />
        <img className='herohead-image img-pc' src={imagePc} alt='herohead' />
        <div className='herohead-content'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div  className='btn-container'>
            <button className='btn btn-primary'>
              <p>{btnDetailOne}</p>
              <VscChevronRight size='20px'/>
            </button>
            <button className={display === 'no' ? 'btn btn-secondary hide' : 'btn btn-secondary'}>
              <p>{btnDetailTwo}</p>
              <VscChevronRight size='20px'/>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Herohead;