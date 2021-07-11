import { VscChevronRight} from "react-icons/vsc";

const Card = (props) => {
    const {img, title, desc, btnDesc} = props
  return (
        <div className='card'>
          <img src={img} alt='cardImage'/>
          <div className='card-content'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button> 
              <p>{btnDesc}</p>
              <VscChevronRight size='18px'/>
            </button>
          </div>
        </div>
  );
};

export default Card;
