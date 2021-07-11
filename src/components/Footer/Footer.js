import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from "../../context";

const date = new Date().getFullYear();

const Footer = () => {

  const {footerData} = useGlobalContext();

    return (
      <div className='footer'>
          <div className='footer-top'>
              {
                footerData.map((col,index)=> {
                  return (
                    <div key={index} className='footer-col'>
                      <div className='footer-col-head'>
                        <h4>{col.title}</h4>
                      </div>
                      {col.content.map((item,index) => {
                        return (
                          <h4 key={index}>{item}</h4>
                        )
                      })}
                    </div>
                  )
                })
              }
          </div>
          <div className='footer-bottom'>
            <div>
              <BiWorld size='24px'/>
              <p>English (Nigeria)</p>
            </div>
            <ul>
              <li>Contact Microsoft</li>
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>Trademarks</li>
              <li>About our ads</li>
              <li>&copy; Microsoft {date}</li>
            </ul>
          </div>
      </div>
    )
  }
  
  export default Footer;