import { VscChevronDown, VscChevronUp} from "react-icons/vsc";
import SideDropItem from './SideDropItem/SideDropItem';
import { useGlobalContext } from "../../context";
import React from "react";



const Sidebar = () => {
  const {sideData, sideDrop, toggleSideDrop, loadSidebar} = useGlobalContext();
  
  function icons(param) {
    if (Object.keys(param).length > 2) {
      if (sideDrop) {
        return <VscChevronUp/>
      } else {
        return <VscChevronDown/>
      }
    }
  }

  return (
    <div className={loadSidebar? 'side-nav show-side-nav' : 'side-nav'}>
      {
        sideData.map((item,index)=> {
          const {page, id} = item;

          return (
            <React.Fragment key={index}>
            <div  className='service-row' onClick={toggleSideDrop}>
              <h5>{page}</h5> 
              {icons(item)}
            </div>
            {Object.keys(item).length > 2 && sideDrop&& <SideDropItem param={id}/>}


            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Sidebar
