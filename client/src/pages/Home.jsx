import { NavLink } from 'react-router-dom'
import '../../src/index.css'
import Analytics from '../components/Analytics'
const Home = () => {
    return (
        <>
            <main>
                <section className='section-hero'>
                    <div className='container grid grid-two-cols'>
                        <div className="hero-content">
                            <p>we are the best team</p>
                            <h1> TechiFY </h1>
                            <p>Are you ready make your buisness to the next level with
                                cutting-edge IT solutions? Look no further! At the TechiFY,
                                we specialize in providing innovative IT serivces and solutions
                                tailored to meet your unique needs
                            </p>

                            <div className="btn-btn-group">
                                <NavLink to="/contact">
                                    <button className='btn'>connect now</button>
                                </NavLink>
                                <NavLink to="/service">
                                    <button className='btn secondary-btn'>learn more</button>
                                </NavLink>

                            </div>
                        </div>

                        {/* hero image  */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="coding together" width="400" height="500" />
                        </div>


                    </div>
                </section>
            </main>

            {/* 2nd-section  */}
            <Analytics />



            {/* 3rd section  */}
            <section className='section-hero'>
                <div className='container grid grid-two-cols'>
                    <div className="hero-image">
                        <img src="/images/design.png" alt="coding together" width="400" height="500" />
                    </div>
                    <div className="hero-content">

                        <p>we are here to help you</p>
                        <h1>Get Started Today </h1>
                        <p>Are you ready make your buisness to the next level with
                            cutting-edge IT solutions? Look no further! At the Bilal,
                            we specialize in providing innovative IT serivces and solutions
                            tailored to meet your unique needs
                        </p>
                        <div className="btn-btn-group">
                            <NavLink to="/contact">
                                <button className='btn'>connect now</button>
                            </NavLink> &nbsp;&nbsp;&nbsp;
                            <NavLink to="/services">
                                <button className='btn'>learn more</button>
                            </NavLink>
                        </div>
                    </div>

                    {/* hero image  */}



                </div>
            </section>
        </>
    )
}

export default Home
