import Herohead from './Herohead/Herohead'
import Card from './Card/Card'
import { VscChevronRight} from "react-icons/vsc";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";



const Home = () => {
  return (
    <div className='home'>
      <Herohead 
        imageMo='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=303&w=539&b=%23FFFFFFFF&l=f&x=1129&y=917&s=767&d=431&aim=true'
        imagePc='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DRie?ver=3184&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=0&s=1898&d=712&aim=true'
        title='Microsoft 365'
        description='Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription'
        btnDetailOne='For up to 6 people'
        btnDetailTwo='For 1 people'
      />
      <div className='card-container'>
        <Card 
          img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDhA6?ver=d8db&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'
          title='Microsoft Teams'
          desc='Chat, call, and make plans with family and friends—all in one app.'
          btnDesc='Learn more'
        />
        <Card 
          img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
          title='Microsoft Edge'
          desc='World-class performance with more privacy, more productivity, and more value while you browse.'
          btnDesc='Download now'
        />
        <Card 
          img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
          title='Microsoft OneDrive'
          desc='Save your files and photos to OneDrive and access them from any device, anywhere.'
          btnDesc='Learn more'
        />
        <Card 
          img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37Bcs?ver=e981&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
          title='Windows 10 Update'
          desc='Bringing you new features to help you pursue your passions, make better connections, and give back some time.'
          btnDesc='Learn more'
        />
      </div>
      <Herohead 
        imageMo='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OLdz?ver=d01f&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=164&s=2120&d=795&aim=true'
        imagePc='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OLdz?ver=d01f&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=164&s=2120&d=795&aim=true'
        title='Outlook for iOs and Android'
        description='Connect. Organize. Get things done.'
        btnDetailOne='Download now'
        display='no'
      />
      <div>
        <h3>
          For business
        </h3>
        <div className='card-container'>
          <Card 
            img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWDhA6?ver=d8db&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true'
            title='Windows 365 for business'
            desc='Stay a step ahead with powerful apps for productivity, connection, and security.'
            btnDesc='Shop now'
          />
          <Card 
            img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
            title='Windows 10 Enterprise'
            desc='Download the free 90-day evaluation for IT professionals.'
            btnDesc='Download now'
          />
          <Card 
            img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
            title='Introducing Microsoft Viva'
            desc='Discover the new employee experience platform designed to help people connect, focus, learn, and thrive at work.'
            btnDesc='Learn more'
          />
          <Card 
            img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37Bcs?ver=e981&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'
            title='Get Visual Studio 2019'
            desc='Download Visual Studio 2019, the productive, modern, and innovative IDE.'
            btnDesc='Download now'
          />
        </div>
      </div>
      <div className='covid-info'>
        <h2>Microsoft's response to COVID-19</h2>
        <p>Read how we’re responding to the COVID-19 outbreak, and get resources to help.</p>       
         <button> 
              <p>Learn more</p>
              <VscChevronRight size='18px'/>
        </button>
      </div>
      <div className='action-center'>
        <div>
          <p>Follow Microsoft</p>
          <AiFillFacebook size='36px' id='facebook'/>
          <AiFillTwitterSquare size='36px' id='twitter'/>
          <AiFillLinkedin size='36px' id='linkedin'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
