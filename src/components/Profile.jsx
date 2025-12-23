
import React from "react";
import "./Profile.css";
import profileImg from "../assets/images/Norimboyev__Azizjon.jpg";

const Profile = ({ userData }) => {
	return (
		<div className="profile-section">
				<div className="profile-img-container">
					<img
						className="profile-img"
						src={profileImg}
						alt={userData.name}
					/>
				</div>
				<h1 className="profile-name">{userData.name}</h1>
				<div className="profile-title">{userData.title}</div>

				{/* Button group below image and title */}
				   <div className="button-group">
					   <button className="menu-btn active"><span role="img" aria-label="info">ℹ️</span> Ma'lumot</button>
					   <button className="menu-btn">
						   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
							   <circle cx="10" cy="10" r="9" stroke="#bbb" strokeWidth="2" fill="#222"/>
							   <path d="M10 6.5V10L12.5 12.5" stroke="#bbb" strokeWidth="2" strokeLinecap="round"/>
							   <circle cx="10" cy="10" r="1.5" fill="#bbb"/>
						   </svg>
						   Tema
					   </button>
					   <button className="menu-btn">UZ</button>
					   <button className="menu-btn">RU</button>
					   <button className="menu-btn">EN</button>
				   </div>


			<div className="profile-links">
				<a className="profile-btn portfolio" href={userData.portfolioUrl} target="_blank" rel="noopener noreferrer">
					<i className="fas fa-briefcase"></i> Portfolio
				</a>
				<a className="profile-btn github" href={userData.links.github} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github"></i> GitHub
				</a>
				       <a className="profile-btn linkedin" href={userData.links.linkedin} target="_blank" rel="noopener noreferrer">
					       <i className="fab fa-linkedin-in"></i> LinkedIn
				       </a>
					       <a className="profile-btn x" href={userData.links.x} target="_blank" rel="noopener noreferrer">
						       <svg width="22" height="22" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}><rect width="1200" height="1227" rx="240" fill="black"/><path d="M908.5 320H741.5L600 522.5L458.5 320H291.5L525.5 651.5L291.5 907H458.5L600 727.5L741.5 907H908.5L674.5 651.5L908.5 320ZM800.5 860H741.5L600 682.5L458.5 860H399.5L600 627.5L800.5 860Z" fill="white"/></svg>
						       X (Twitter)
					       </a>
				<a className="profile-btn telegram" href={userData.links.telegram} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-telegram"></i> Telegram
				</a>
				<a className="profile-btn instagram" href={userData.links.instagram} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-instagram"></i> Instagram
				</a>
				<a className="profile-btn facebook" href={userData.links.facebook} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-facebook-f"></i> Facebook
				</a>
				<a className="profile-btn youtube" href={userData.links.youtube} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-youtube"></i> YouTube
				</a>
			</div>
			<div className="profile-contact">
				<div><b>Email:</b> {userData.email}</div>
				<div><b>Telefon:</b> {userData.phone}</div>
				<div><b>Manzil:</b> {userData.location}</div>
			</div>
		</div>
	);
};

export default Profile;
