import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/whiteArrow.svg';
import orangeLogo from '../assets/logo.svg';
import greenLogo from '../assets/logo2.svg';
import instagram from '../assets/instagram-icon.svg';
import telegram from '../assets/telegram-icon.svg';
import whatsapp from '../assets/whatsapp-icon.svg';
import phone from '../assets/phone-icon.svg';
import message from '../assets/message-icon.svg';

function FooterContactMenu() {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

  	return (
		<div className={isActive ? 'footer-box footer-close' : 'footer-box footer-open'}>
			<div className='footer-header contacts'>
				<h4 className='footer-title title'>КОНТАКТЫ</h4>
				<img src={arrow} alt="open arrow" className='icon-arrow' onClick={handleToggle}/>
			</div>

			<div className="contacts-content">
				<div className="footer-logos">
					<div className="logo-box box1">
						<img src={orangeLogo} alt="orange colored co. logo" className='co-logo'/>
						<img src={greenLogo} alt="green colored co. logo" className='co-logo'/>
					</div>

					<div className="social-box">
						<Link to="/">
							<div className='social-icon'>
								<img src={instagram} alt="instagram link"/>
							</div>
						</Link>

						<Link to="/">
							<div className='social-icon'>
								<img src={telegram} alt="telegram link"/>
							</div>
						</Link>

						<Link to="/">
							<div className='social-icon'>
								<img src={whatsapp} alt="whatsapp link"/>
							</div>
						</Link>
					</div>

					<Link to="/" className='footer-link contact-item mail1'>
						<img src={message} alt="mail1 adress" className='contact-icon'/>
						<p className='button'>yakastana@gmail.com</p>
					</Link>
				</div>
				
				<div className="footer-contacts">
					<div className="phone-numbers">
						<Link to="/" className='footer-link contact-item'>
							<img src={phone} alt="phone number" className='contact-icon'/>
							<p className='button'>+7 775 656 48 27</p>
						</Link>

						<Link to="/" className='footer-link contact-item'>
							<img src={phone} alt="phone number" className='contact-icon'/>
							<p className='button'>+7 701 135 41 46</p>
						</Link>
					</div>

					<Link to="/" className='footer-link contact-item mail2'>
						<img src={message} alt="mail adress" className='contact-icon'/>
						<p className='button'>yakastana@gmail.com</p>
					</Link>
				</div>
			</div>

			<div className='footer-policy'>
				<p className='policy-text text1'>© 2022. Магазин одежды и снаряжения для туризма, кемпинга и путешествий «ЯК». Все права защищены.</p>
				
				<div className='policy-content'>
					<div className="logo-box box2">
						<img src={orangeLogo} alt="orange colored co. logo" className='co-logo'/>
						<img src={greenLogo} alt="green colored co. logo" className='co-logo'/>
					</div>
					<p className='policy-text text2'>Сайт создан <a href="http://athenaplus.kz/">athenaplus.kz</a></p>
				</div>
			</div>
		</div>
  	);
}

export default FooterContactMenu;