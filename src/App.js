import './App.css';
import '../src/countdown.js'
import logo from '../src/logo.svg';
import webIcon from '../src/mdi_web.svg';
import helpIcon from '../src/bx_bx-help-circle.svg';
import mediumIcon from '../src/social icons/bx_bxl-medium.svg'
import twitterIcon from '../src/social icons/ei_sc-twitter.svg'
import facebookIcon from '../src/social icons/ei_sc-facebook.svg'
import githubIcon from '../src/social icons/ei_sc-github.svg'
import linkedinIcon from '../src/social icons/ei_sc-linkedin.svg'
import telegramIcon from '../src/social icons/ei_sc-telegram.svg'
import youtubeIcon from '../src/social icons/ei_sc-youtube.svg'

function App() {
  return (
    <div className="App">

      {/* Nabar */}
      <div className="nav">
        <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* connect wallet button */}
          <a href="#men" className="customBtn">Connect wallet</a>
        </div>
      </div>

      {/* Hero */}
      <section id="hero" className='px-3 px-lg-0'>
        {/* Wrapper */}
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12 text-center marginHeader">
              <h1 className='miniHeader'>Sales</h1>
            </div>

            {/* Left */}
            <div className="col-lg-6 bgDark my-3 my-lg-0">
              <div className="row justify-content-between align-items-center">
                {/* Header details */}
                <div className="col-lg-5 d-flex align-items-center my-3">
                  <img src={logo} alt="logo" />
                  <div className="group ms-2">
                  <h3 className="smallHeader">Homwere</h3>
                  <div className="webAddress">
                    <img src={webIcon} alt="" />
                    <a href='www.homwere.com'>www.homwere.com</a>
                  </div>
                  </div>
                
                </div>

                {/* Social Icons */}
                <div className="col-lg-5 my-3">
                  <ul className='socialIcons'>
                    <li><img src={facebookIcon} alt="" /></li>
                    <li><img src={linkedinIcon} alt="" /></li>
                    <li><img src={twitterIcon} alt="" /></li>
                    <li><img src={youtubeIcon} alt="" /></li>
                    <li><img src={telegramIcon} alt="" /></li>
                    <li><img src={mediumIcon} alt="" /></li>
                    <li><img src={githubIcon} alt="" /></li>
                  </ul>
                </div>
              </div>

              {/* divider */}
              <div className="row spacer">
                <div className="col-12">
              <div className="divider"></div>
                </div>
              </div>

              <div className="row spacer">
                <div className="col-12">
                  <p className='bodyCopy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste minus tempore rem corrupti delectus accusamus quia nisi voluptates quam sequi nemo ipsa, possimus quis. Debitis recusandae eveniet suscipit, distinctio autem repellat impedit quos expedita placeat ex in, culpa voluptatibus natus quisquam! Dignissimos deserunt blanditiis repellendus error officiis dolores possimus in, nemo at tenetur, suscipit reprehenderit natus eius ullam neque.</p>
                </div>
              </div>

              <div className="row spacer">
                <div className="col-12">
                  <h3 className='smallHeader'>Sales details</h3>

                    <div className="row">
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">IDO Access:</p>
                        <p className="bodyCopy value">Members & Guest</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between flex-wrap">
                        <p className="bodyCopy">Token Distribution:</p>
                        <p className="bodyCopy value">50% at TGE, 10% 30 days intervals</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">Token Price:</p>
                        <p className="bodyCopy value">0.0001 BUSD</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">Sales Pool size:</p>
                        <p className="bodyCopy value">5,000,000,000</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">Symbol:</p>
                        <p className="bodyCopy value">MTB</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">Total Supply:</p>
                        <p className="bodyCopy value">100,000,000,000</p>
                    </div>
                      <div className="col-12 d-flex justify-content-between">
                        <p className="bodyCopy">Softcap/Hardcap:</p>
                        <p className="bodyCopy value">250k/500k</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="row spacer">
                <div className="col-12">
              <div className="divider"></div>
                </div>
              </div>

              <div className="row spacer">
                <div className="col-12">
                    <div className="webAddress">
                    <img src={helpIcon} alt="" />
                    <span className='bodyCopy ms-2'>View full overview and details <a href='www.homwere.com'>here</a></span>
                  </div>
                </div>
              </div>

            </div>
            {/* End of Left */}

            {/* RIght */}
            <div className="col-lg-5 bgDark my-3 my-lg-0">
              {/* header */}
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-6 my-3">
                  <h3 className="smallHeader">This sale will end in:</h3>
                </div>
                <div className="col-lg-5 my-3 justify-content-end">
                  <span className="customBtn">Ongoing</span>
                </div>
              </div>

              {/* Timer */}
              <div className="row">
                  <div class="countdown">
                    <div id="day">NA</div>
                    <div id="hour">NA</div>
                    <div id="minute">NA</div>
                    <div id="second">NA</div>
                    </div>
              </div>
            </div>
            {/* End of Right */}
          </div>
        </div>
        {/* End of Container */}
      </section>
    </div>
  );
}

export default App;
