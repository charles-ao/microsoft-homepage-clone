import { useGlobalContext } from "../../../context";

const SideDropItem  = (props) => {

    const {sideData, sideDrop} = useGlobalContext();

    const filtered = sideData.filter(val => {
        return   val.id === props.param;
    })

    return (
        <>
        { sideDrop && 
                <div className='side-drop-items'>
                    {filtered[0].links.map((item, index) => {
                        const {label} = item;
                        return (
                        <div key={index} className='side-drop-item'>
                            <h5>{label}</h5>
                        </div>
                        )
                    })}
        
              </div>
        }
        </>

    )
}

export default SideDropItem;