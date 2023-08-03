import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Genesis from '../assets/imges/png/Img_1/Genesis.png'
import News_1 from '../assets/imges/png/Img_1/News_1.png'
import News_2 from '../assets/imges/png/Img_1/News_2.png'
import News_3 from '../assets/imges/png/Img_1/News_3.png'
import Time_2004 from '../assets/imges/png/Img_1/2004.png'
import Time_2006 from '../assets/imges/png/Img_1/2006.png'
import Time_2007 from '../assets/imges/png/Img_1/2007.png'
import Img_1 from '../assets/imges/png/Img_1/Img_people_1.png'
import Img_2 from '../assets/imges/png/Img_1/Img_people_2.png'
import Img2007_1 from '../assets/imges/png/Img_1/Img_2007_1.png'
import Img2007_2 from '../assets/imges/png/Img_1/News_2007_1.png'
import Img2007_3 from '../assets/imges/png/Img_1/Img_2007_2.png'
import Img2007_4 from '../assets/imges/png/Img_1/Img_2007_3.png'
import Img2011_14_1 from '../assets/imges/png/Img_1/2011-14.png'
import Img2011_1 from '../assets/imges/png/Img_1/Img_2011_1.png'
import Img2011_2 from '../assets/imges/png/Img_1/Img_2011_2.png'
import Img2011_3 from '../assets/imges/png/Img_1/Img_2011_3.png'
import logo from '../assets/imges/png/Img_2/Logo.png'
import Right from './Right'

const Genius = () => {
    return (
        <>
            <div className='myContainer pb-5 '>
                <div className='center_timeline py-5 ps-4 ps-md-0'>
                    <Row className='pt-3'>
                        <Col md={6} className=''>
                            <div className='d-flex justify-content-md-end'>
                                <img src={Genesis} alt="news_1" className='w-50' />
                            </div>
                            <div className='ms-xl-3 py-3'>
                                <p className='mb-0 ff_primary fs_sm fw_light ms-3 ps-xl-5 ps-lg-4'>MANY YEARS BEFORE LAPiNC</p>
                            </div>
                        </Col>
                        <Col md={6} className='d-flex flex-column d-none d-md-block'>
                            <div className='pt-4 d-flex align-items-center'>
                                <img src={logo} alt="news_1" className='w-25' />
                                <p className='mb-0 ff_primary fs_sm fw_light ms-3 ps-lg-5 text-center'>THIS ARTIST DUO WERE <span className='d-block'>FORMALLY KNOWN AS LVSP</span></p>
                            </div>

                        </Col>
                    </Row>


                    <Row >
                        <Col md={6} className='pe-md-3 ps-3 ps-md-0'>
                            <div className="d-sm-grid">
                                <div className='grid_2'>
                                    <img src={Time_2004} alt="news_1" className='w-100 ' />
                                </div>
                                <div className='grid_3 py-3 py-sm-0'>
                                    <img src={Time_2006} alt="news_1" className='w-100' />
                                </div>
                                <div className='grid_4 mt--48 me-lg-4 ps-3 pe-1 py-3 ps-md-0 pb-md-0 py-lg-0'>
                                    <img src={News_2} alt="news_1" className='w-100' />
                                </div>
                                <div className='grid_6 mt--48 me-lg-4 py-3 ps-3 pe-1 ps-md-0 py-md-0'>
                                    <img src={Img_2} alt="news_1" className='w-100 ' />
                                </div>
                                <div className='grid_1 py-lg-3 py-3 ps-3 pe-1 ps-md-0 pe-md-2 px-lg-4 ms-lg-1 me-lg-2'>
                                    <img src={News_1} alt="news_1" className='w-100' />
                                </div>
                                <div className='grid_5 pt-lg-5 pb-lg-3 ps-3 pe-1 py-3 pe-lg-0'>
                                    <img src={Img_1} alt="news_1" className='w-100' />
                                </div>
                                <div className='grid_7 pt-lg-4 ps-3 pe-1 py-3'>
                                    <img src={News_3} alt="news_1" className='w-100 pe-lg-4' />
                                </div>
                                <div className='time_2007 py-3 py-lg-5'>
                                    <img src={Time_2007} alt="news_1" className='w-100 ps-lg-4' />
                                </div>
                                <div className='time_2007_1 ps-3 pe-1 py-3'>
                                    <img src={Img2007_1} alt="news_1" className='w-100 pe-lg-4' />
                                </div>
                                <div className='time_2007_2 py-lg-5 ps-3 pe-1 py-3 ps-lg-4 pe-md-3 pe-lg-0'>
                                    <img src={Img2007_2} alt="news_1" className='w-100' />
                                </div>
                                <div className='time_2007_3 pt-lg-5 pb-lg-4 ps-3 pe-1 py-3'>
                                    <img src={Img2007_3} alt="news_1" className='w-100' />
                                </div>
                                <div className='time_2007_4 pt-lg-3 ps-3 pe-1 py-3 ps-md-0 py-md-0 ps-lg-4 pe-lg-4'>
                                    <img src={Img2007_4} alt="news_1" className='w-100 ' />
                                </div>
                                <div className='Img2011_14_1 pt-180 pt-md-0'>
                                    <img src={Img2011_14_1} alt="news_1" className='w-100' />
                                </div>
                                <div className='Img2011_1 ps-3 pe-1 py-3 pb-md-0 ps-md-0 py-lg-0'>
                                    <img src={Img2011_1} alt="news_1" className='w-100 ' />
                                </div>
                                <div className='Img2011_2 ps-3 pe-1 py-3 ps-md-0 py-md-0 pe-lg-5 mt--50'>
                                    <img src={Img2011_2} alt="news_1" className='w-100 ' />
                                </div>
                                <div className='Img2011_3 ps-3 pe-1 py-3 py-md-0 ps-md-0 pe-lg-0'>
                                    <img src={Img2011_3} alt="news_1" className='w-100 ' />
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='ps-3'>
                            <div className='pt-4 d-md-none'>
                                <img src={logo} alt="news_1" className='w-50' />
                                <p className='mb-0 ff_primary fs_sm fw_light ms-2 ps-lg-5 text-center pt-3'>THIS ARTIST DUO WERE <span className='d-block'>FORMALLY KNOWN AS LVSP</span></p>
                            </div>
                            <div className="d-sm-grid">
                                <Right />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >

        </>
    )
}

export default Genius