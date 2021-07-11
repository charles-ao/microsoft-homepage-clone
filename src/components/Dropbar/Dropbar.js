import { useGlobalContext } from "../../context"
import { VscChevronRight} from "react-icons/vsc";

const Dropbar = () => {
    const {dropData} = useGlobalContext();
    return (
      <div className='drop-nav'>
          <div className='top'>
            {dropData.map((col,index) => {
            
                const {page, links} = col;
                
                return (
                    <div key={index} className='service-col'>
                        <div className='service-col-head'>
                            <h5>{page}</h5>
                        </div>
                        {links.map((link, index) => {
                            const {label} = link;
                            return (
                                <h5 key={index}>{label}</h5>
                            )
                        })}
                    </div>
                )
            })}
          </div>
          <div className='bottom'>
            <h5>VIEW SITE MAP</h5>
            <div>
                <VscChevronRight/>
            </div>
          </div>
      </div>
    )
  }
  
  export default Dropbar
  