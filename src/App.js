import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/countdown.js';
import logo from '../src/logo.svg';
import webIcon from '../src/mdi_web.svg';
import helpIcon from '../src/bx_bx-help-circle.svg';
import mediumIcon from '../src/social icons/bx_bxl-medium.svg';
import twitterIcon from '../src/social icons/ei_sc-twitter.svg';
import facebookIcon from '../src/social icons/ei_sc-facebook.svg';
import githubIcon from '../src/social icons/ei_sc-github.svg';
import linkedinIcon from '../src/social icons/ei_sc-linkedin.svg';
import telegramIcon from '../src/social icons/ei_sc-telegram.svg';
import youtubeIcon from '../src/social icons/ei_sc-youtube.svg';
import arrowDownIcon from '../src/bi_arrow-down.svg';

function App() {
  return (
    <div className='App'>
      {/* Nabar */}
      <div className='nav'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          {/* connect wallet button */}
          <a href='#men' className='customBtn'>
            Connect wallet
          </a>
        </div>
      </div>

      {/* Hero */}
      <section id='sales' className='px-3 px-lg-0'>
        {/* Wrapper */}
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-12 text-center marginHeader'>
              <h1 className='miniHeader'>Sales</h1>
            </div>

            {/* Left */}
            <div className='col-lg-6 bgDark my-3 my-lg-0'>
              <div className='row justify-content-between align-items-center'>
                {/* Header details */}
                <div className='col-lg-5 d-flex align-items-center my-3'>
                  <img src={logo} alt='logo' />
                  <div className='group ms-2'>
                    <h3 className='smallHeader'>Homwere</h3>
                    <div className='webAddress'>
                      <img src={webIcon} alt='' />
                      <a href='www.homwere.com'>www.homwere.com</a>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className='col-lg-5 my-3'>
                  <ul className='socialIcons'>
                    <li>
                      <img src={facebookIcon} alt='' />
                    </li>
                    <li>
                      <img src={linkedinIcon} alt='' />
                    </li>
                    <li>
                      <img src={twitterIcon} alt='' />
                    </li>
                    <li>
                      <img src={youtubeIcon} alt='' />
                    </li>
                    <li>
                      <img src={telegramIcon} alt='' />
                    </li>
                    <li>
                      <img src={mediumIcon} alt='' />
                    </li>
                    <li>
                      <img src={githubIcon} alt='' />
                    </li>
                  </ul>
                </div>
              </div>

              {/* divider */}
              <div className='row spacer'>
                <div className='col-12'>
                  <div className='divider'></div>
                </div>
              </div>

              <div className='row spacer'>
                <div className='col-12'>
                  <p className='bodyCopy'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis iste minus tempore rem corrupti delectus accusamus
                    quia nisi voluptates quam sequi nemo ipsa, possimus quis.
                    Debitis recusandae eveniet suscipit, distinctio autem
                    repellat impedit quos expedita placeat ex in, culpa
                    voluptatibus natus quisquam! Dignissimos deserunt blanditiis
                    repellendus error officiis dolores possimus in, nemo at
                    tenetur, suscipit reprehenderit natus eius ullam neque.
                  </p>
                </div>
              </div>

              <div className='row spacer'>
                <div className='col-12'>
                  <h3 className='smallHeader'>Sales details</h3>

                  <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>IDO Access:</p>
                      <p className='bodyCopy value'>Members & Guest</p>
                    </div>
                    <div className='col-12 d-flex justify-content-between flex-wrap'>
                      <p className='bodyCopy'>Token Distribution:</p>
                      <p className='bodyCopy value'>
                        50% at TGE, 10% 30 days intervals
                      </p>
                    </div>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>Token Price:</p>
                      <p className='bodyCopy value'>0.0001 BUSD</p>
                    </div>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>Sales Pool size:</p>
                      <p className='bodyCopy value'>5,000,000,000</p>
                    </div>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>Symbol:</p>
                      <p className='bodyCopy value'>MTB</p>
                    </div>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>Total Supply:</p>
                      <p className='bodyCopy value'>100,000,000,000</p>
                    </div>
                    <div className='col-12 d-flex justify-content-between'>
                      <p className='bodyCopy'>Softcap/Hardcap:</p>
                      <p className='bodyCopy value'>250k/500k</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className='row spacer'>
                <div className='col-12'>
                  <div className='divider'></div>
                </div>
              </div>

              <div className='row spacer'>
                <div className='col-12'>
                  <div className='webAddress'>
                    <img src={helpIcon} alt='' />
                    <span className='bodyCopy ms-2'>
                      View full overview and details{' '}
                      <a href='www.homwere.com'>here</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Left */}

            {/* RIght */}
            <div className='col-lg-5 bgDark my-3 my-lg-0'>
              {/* header */}
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-lg-6 my-3'>
                  <h3 className='smallHeader'>This sale will end in:</h3>
                </div>
                <div className='col-lg-5 my-3 justify-content-end'>
                  <span className='customBtn'>Ongoing</span>
                </div>
              </div>

              {/* Timer */}
              <div className='row justify-content-between my-3'>
                <div className='col-3'>
                  <div className='timer' id='day'></div>
                </div>
                <div className='col-3'>
                  <div className='timer' id='hour'></div>
                </div>
                <div className='col-3'>
                  <div className='timer' id='minute'></div>
                </div>
                <div className='col-3'>
                  <div className='timer' id='second'></div>
                </div>
              </div>

              {/* after timer */}
              <div className='row'>
                <div className='col-12 d-flex justify-content-between'>
                  <p className='bodyCopy'>Wallet Balance:</p>
                  <p className='bodyCopy value'>0 BUSD</p>
                </div>
                <div className='col-12 d-flex justify-content-between flex-wrap'>
                  <p className='bodyCopy'>Max Allocation:</p>
                  <p className='bodyCopy value'>0 BUSD</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                  <p className='bodyCopy'>Purchased:</p>
                  <p className='bodyCopy value'>0 HMW</p>
                </div>
              </div>

              {/* divider */}
              <div className='row spacer'>
                <div className='col-12'>
                  <div className='divider'></div>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 d-flex justify-content-between'>
                  <p className='smallHeader'>Swap Ratio:</p>
                  <p className='smallHeader value'>1 MTB = 0.0001 BUSD</p>
                </div>
              </div>

              {/* Form */}
              <form action=''>
                {/* Input for From */}
                <div className='form-group my-3'>
                  <label
                    htmlFor='fromInput'
                    className='d-flex justify-content-between'
                  >
                    <span className='bodyCopy'>From</span>
                    <span className='bodyCopy'>Allocation:</span>
                  </label>
                  <div className='inputGroup'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='0'
                    />
                    <select name='' id='' className='floatInput'>
                      <option value='' selected>
                        BUSD
                      </option>
                      <option value=''>BUSD</option>
                      <option value=''>BUSD</option>
                    </select>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className='col-12 text-center'>
                  <img src={arrowDownIcon} alt='' />
                </div>

                {/* Input for To */}
                <div className='form-group my-3'>
                  <label
                    htmlFor='toInput'
                    className='d-flex justify-content-between'
                  >
                    <span className='bodyCopy'>To</span>
                    <span className='bodyCopy'>Max Allocation:</span>
                  </label>
                  <div className='inputGroup'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='0'
                    />
                  </div>
                </div>

                {/* submit button */}
                <button className='formBtn' type='submit' disabled>
                  Purchase
                </button>
              </form>

              {/* divider */}
              <div className='row spacer'>
                <div className='col-12'>
                  <div className='divider'></div>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 d-flex justify-content-between'>
                  <p className='smallHeader'>Progress</p>
                  <p className='smallHeader value'>242034.2132 BUSD</p>
                </div>

                <div className='col-12'>
                  <div class='progress'>
                    <div
                      class='progress-bar'
                      role='progressbar'
                      aria-valuenow='20'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Right */}
          </div>
        </div>
        {/* End of Container */}
      </section>

      <footer>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-6'>
              <img src={logo} alt='' />
              <p className='bodyCopy mt-3'>
                Homwere © Copyright 2022 <br /> All rights reserved.
              </p>
            </div>
            {/* Business */}
            <div className='col-lg-2 ms-auto'>
              <h3 className='smallHeader'>Business</h3>
              <ul>
                <li>
                  <a href=''>Apply IDO</a>
                </li>
                <li>
                  <a href=''>Apply Incubation</a>
                </li>
                <li>
                  <a href=''>Selection Process</a>
                </li>
              </ul>
            </div>
            {/* Help */}
            <div className='col-lg-2'>
              <h3 className='smallHeader'>Help</h3>
              <ul>
                <li>
                  <a href=''>Terms & Condition</a>
                </li>
                <li>
                  <a href=''>Privacy Policy</a>
                </li>
                <li>
                  <a href=''>Contact & Support</a>
                </li>
                <li>
                  <a href=''>Whitepaper</a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className='col-lg-2'>
              <h3 className='smallHeader'>Social</h3>
              <ul>
                <li>
                  <a href=''>Telegram</a>
                </li>
                <li>
                  <a href=''>Twitter</a>
                </li>
                <li>
                  <a href=''>Medium</a>
                </li>
                <li>
                  <a href=''>Github</a>
                </li>
              </ul>
            </div>
          </div>

          {/* divider */}
          <div className='row spacer'>
            <div className='col-12'>
              <div className='divider'></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-5 mx-auto my-3'>
              <ul className='socialIcons'>
                <li>
                  <img src={facebookIcon} alt='' />
                </li>
                <li>
                  <img src={linkedinIcon} alt='' />
                </li>
                <li>
                  <img src={twitterIcon} alt='' />
                </li>
                <li>
                  <img src={youtubeIcon} alt='' />
                </li>
                <li>
                  <img src={telegramIcon} alt='' />
                </li>
                <li>
                  <img src={mediumIcon} alt='' />
                </li>
                <li>
                  <img src={githubIcon} alt='' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
