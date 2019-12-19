import React from 'react';
import './Landing.css';
import { Link, animateScroll } from 'react-scroll';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { Register } from './Register';
import useFormValidation from './formValidation';
import validateAuth from './formValidation';

import facebookLogo from './resources/iconfinder_1_Facebook_colored_svg_copy_5296499.png';
import linkedInLogo from './resources/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';
import twitterLogo from './resources/iconfinder_1_Twitter_colored_svg_5296514.png';
import instagramLogo from './resources/iconfinder_1_Instagram_colored_svg_1_5296765.png';
import youtubeLogo from './resources/iconfinder_1_Youtube_colored_svg_5296521.png';
import whatsAppLogo from './resources/iconfinder_1_Whatsapp2_colored_svg_5296520.png';

const images = [
  'https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80',
  'https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
  'https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1520305113010-a64472a63671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1568517130737-8c558272c905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1548431001-424da3e6328f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/flagged/photo-1574003854725-ef1e2b796f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

const INITIAL_STATE = {
  email: '',
  password: '',
};
export const LandingPage = () => {
  const [index, setIndex] = React.useState<number>(0);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div style={{ backgroundColor: '#ff99cc', paddingTop: '2%' }}>
      <header
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '3%',
          paddingRight: '5%',
          marginBottom: '3%',
        }}
      >
        <div onClick={() => animateScroll.scrollToTop()}>
          <h2 style={{ fontSize: '1.5em', color: '#0033cc' }}>
            roundtrip{' '}
            <span role="img" aria-label="coconut-tree">
              🌴
            </span>
          </h2>
        </div>
        <div>
          <nav>
            <ul style={{ display: 'flex' }}>
              <Link to="contact" smooth={true} duration={1000}>
                <li
                  className="navBorder"
                  style={{
                    width: '100px',
                    textAlign: 'center',
                    borderRadius: '5px',
                  }}
                >
                  Sign Up
                </li>
              </Link>
              <li
                className="navBorder"
                style={{
                  marginLeft: '20%',
                  width: '9em',
                  textAlign: 'center',
                  borderRadius: '5px',
                }}
              >
                Login
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <article style={{ paddingLeft: '3%' }}>
        <div className="aboutDescription">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu
            non. Interdum velit laoreet id donec ultrices tincidunt arcu non. Massa placerat duis
            ultricies lacus sed turpis tincidunt id aliquet. Dignissim suspendisse in est ante.
            Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Diam sit amet nisl
            suscipit adipiscing. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
            Lobortis feugiat vivamus at augue eget arcu dictum varius. Vitae suscipit tellus mauris
            a diam maecenas sed. Dictum varius duis at consectetur. Adipiscing at in tellus integer.
            Porta nibh venenatis cras sed felis eget velit aliquet. Nulla pellentesque dignissim
            enim sit amet venenatis urna cursus eget. Est lorem ipsum dolor sit amet.
          </p>
        </div>
      </article>
      <main className="mainBody">
        <div className="mainUpper">
          {/* <ul>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
          </ul> */}
          <p style={{ width: '40%', paddingLeft: '3%' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <img
            className="asideImg1"
            src="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="boat"
          />
        </div>
        <div className="mainLower">
          <img
            className="asideImg2"
            src="https://images.unsplash.com/photo-1575900549163-94c30dd9cc44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="people with suitcase"
          />
          {/* <ul>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '20%', fontSize: '1.2em' }}>
              hi, this is some{' '}
              <span role="img" aria-label="captain">
                👮🏻‍♀️👩🏻‍🦳
              </span>
            </li>
          </ul> */}
          <p style={{ width: '40%', paddingLeft: '2%', marginRight: '2%' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
      <article>
        <div
          style={{
            marginTop: '2%',
            height: '60vh',
            width: '100vw',
          }}
        >
          <Gallery
            index={index}
            onRequestChange={i => {
              setIndex(i);
            }}
          >
            {images.map(image => (
              <GalleryImage objectFit="cover" key={image} src={image} />
            ))}
          </Gallery>
        </div>
      </article>
      <Register />
      <footer className="footer">
        <div style={{ paddingTop: '1%' }}>
          <p>Join our robust social media community</p>
          <img className="logos" src={facebookLogo} alt="facebook-logo" />
          <img className="logos" src={youtubeLogo} alt="youtube-logo" />
          <img className="logos" src={instagramLogo} alt="instagram-logo" />
          <img className="logos" src={whatsAppLogo} alt="whatsapp-logo" />
          <img className="logos" src={linkedInLogo} alt="linkedIn-logo" />
          <img className="logos" src={twitterLogo} alt="twitter-logo" />
        </div>
      </footer>
    </div>
  );
};
