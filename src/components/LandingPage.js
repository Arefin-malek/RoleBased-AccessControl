import React, { memo } from 'react';
import { TopNav } from './common';
import { Link } from "react-router-dom";
import logo from '../assets/VRV.png';

const navOptions = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' }
];

function LandingPage(props) {
    return (
        <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" style={{ height: '100vh' }}>
            <TopNav routes={navOptions} />
            
            {/* Image at the top-left corner (no margin or padding) */}
            <img
                src={logo}
                alt="VRV Security Logo"
                style={{
                    position: 'absolute',
                    top: '0',   // No margin, touch top
                    left: '0',  // No margin, touch left
                    width: '50px',
                    height: '50px'
                }}
            />
            
            <div className="w3-display-middle">
                <h1 className="w3-jumbo w3-animate-top" style={{ fontWeight: 'bold', marginBottom: '20px' }}>VRV Security</h1>
                <hr className="w3-border-grey" style={{ margin: 'auto', width: '40%' }} />
                <p className="w3-large w3-center" style={{ marginTop: '10px' }}>Role-based Access Control</p>
                <div className="button-container w3-padding w3-margin" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link
                        className="btn"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            padding: '15px 30px',
                            borderRadius: '8px',
                            backgroundColor: '#d47e30',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s ease, background-color 0.2s ease'
                        }}
                        to={'/login'}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#d47e30';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#d47e30';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        Login
                    </Link>
                    <Link
                        className="btn"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            padding: '15px 30px',
                            borderRadius: '8px',
                            backgroundColor: '#28A745',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.2s ease, background-color 0.2s ease'
                        }}
                        to={'/register'}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#1e7e34';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#28A745';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        Register
                    </Link>
                </div>
            </div>
            <div className="w3-display-bottomleft w3-padding-large">
                Developed by <a href="https://github.com/Arefin-malek" target="_blank" style={{ color: '#fff', textDecoration: 'underline' }}>Arefin Malek</a>
            </div>
        </div>
    );
}

export default memo(LandingPage);
