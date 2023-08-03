import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CrossIcon, DiscordIcon, InstagramIcon, MenuIcon, TwitterIcon } from './Icon';

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <header>
                <nav>
                    <div className='pt-3 pt-md-4 pt-lg-4 myContainer px-150'>
                        <div className='pt-md-2 pt-lg-3 d-flex justify-content-between align-items-center '>
                            <div className='gap-4 d-flex  opcity align-items-center'>
                                <a href='https://www.instagram.com/' className='opcity_1' target='/'><InstagramIcon /></a>
                                <a href='https://www.whatsapp.com/' className='opcity_1' target='/'><TwitterIcon /></a>
                                <a href='https://telegram.org/' className='opcity_1' target='/'><DiscordIcon /></a>
                            </div>
                            <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                                <div className='d-lg-none z-index-100 crossIconset'
                                    onClick={() => setMenu(false)}>
                                    <Link><CrossIcon /></Link>
                                </div>
                                <div className='d-flex gap-30 align-items-center opcity'>
                                    <Link to="/abc" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>Home</Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>OUR STORY </Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>Roadmap</Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>Traits</Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>Team</Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>Genesis</Link>
                                    <Link to="/" onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_black fw_light opcity_1 text-uppercase'>FAQs</Link>
                                </div>
                            </div>
                            <div className='d-lg-none'>
                                <Link onClick={() => setMenu(true)}>
                                    <MenuIcon /></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header