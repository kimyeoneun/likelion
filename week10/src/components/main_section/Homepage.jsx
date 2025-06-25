import React from 'react'
import main from '../../assets/img/Homepage/main.png'
import title from '../../assets/img/Homepage/Title.svg'
import arrival1 from '../../assets/img/Homepage/newarrival1.png'
import arrival2 from '../../assets/img/Homepage/newarrival2.png'
import arrival3 from '../../assets/img/Homepage/newarrival3.png'
import arrival4 from '../../assets/img/Homepage/newarrival4.png'
import line from '../../assets/img/Homepage/line.png'
import Prada from '../../assets/img/Homepage/Prada.svg'
import Burberry from '../../assets/img/Homepage/Burberry.svg'
import Boss from '../../assets/img/Homepage/Boss.svg'
import Catier from '../../assets/img/Homepage/Catier.svg'
import Gucci from '../../assets/img/Homepage/Gucci.svg'
import Tiffany from '../../assets/img/Homepage/Tiffany & Co.svg'
import collections1 from '../../assets/img/Homepage/collections1.png'
import collections2 from '../../assets/img/Homepage/collections2.png'
import collections3 from '../../assets/img/Homepage/collections3.png'
import jfy1 from '../../assets/img/Homepage/jfy1.png'
import jfy2 from '../../assets/img/Homepage/jfy2.png'
import logo from '../../assets/img/Header/Logo.svg'
import ls1 from '../../assets/img/Homepage/ls1.png'
import ls2 from '../../assets/img/Homepage/ls2.png'
import ls3 from '../../assets/img/Homepage/ls3.png'
import ls4 from '../../assets/img/Homepage/ls4.png'
import lll from '../../assets/img/Homepage/lll.png'
import instagram from '../../assets/img/Homepage/Instagram.png'
import mia1 from '../../assets/img/Homepage/mia1.png'
import mia2 from '../../assets/img/Homepage/mia2.png'
import jihyn1 from '../../assets/img/Homepage/jihyn1.png'
import jihyn2 from '../../assets/img/Homepage/jihyn2.png'

const Homepage = () => {
    return (
        <div className='Homepage_wrap'>
            <div className="section1">
                <img src={main} alt="" />
                <h1>LUXURY</h1>
                <p>
                    FASHION<br />
                    &ACCESSORIES
                </p>
                <button>EXPLORE COLLECTION</button>
            </div>

            <div className="section2">
                <div className="title">
                    <img src={title} alt="" />
                </div>
                <div className="select">
                    <p>All</p>
                    <p>Apparel</p>
                    <p>Dress</p>
                    <p>Tshirt</p>
                    <p>Bag</p>
                </div>

                <div className="new_arrival">
                    <div className="new_arrival1">
                        <div className="arrival1">
                            <img src={arrival1} alt="" />
                            <h3>21WN reversible angora<br />
                                cardigan</h3>
                            <p>$120</p>
                        </div>
                        <div className="arrival2">
                            <img src={arrival2} alt="" />
                            <h3>21WN reversible angora<br />
                                ardigan</h3>
                            <p>$120</p>
                        </div>
                    </div>
                    <div className="new_arrival2">
                        <div className="arrival3">
                            <img src={arrival3} alt="" />
                            <h3>21WN reversible angora<br />
                                cardigan</h3>
                            <p>$120</p>
                        </div>
                        <div className="arrival4">
                            <img src={arrival4} alt="" />
                            <h3>21WN reversible angora<br />
                                cardigan</h3>
                            <p>$120</p>
                        </div>
                    </div>
                    <button>Explore More →</button>
                </div>
            </div>

            <div className="section3">
                <div className="line">
                    <img src={line} alt="" />
                </div>
                <div className="first">
                    <div className="prada">
                        <img src={Prada} alt="" />
                    </div>
                    <div className="burberry">
                        <img src={Burberry} alt="" />
                    </div>
                    <div className="boss">
                        <img src={Boss} alt="" />
                    </div>
                </div>
                <div className="second">
                    <div className="catier">
                        <img src={Catier} alt="" />
                    </div>
                    <div className="gucci">
                        <img src={Gucci} alt="" />
                    </div>
                    <div className="tiffany">
                        <img src={Tiffany} alt="" />
                    </div>
                </div>
                <div className="line">
                    <img src={line} alt="" />
                </div>
            </div>

            <div className="section4">
                <h1>COLLECTIONS</h1>
                <div className="collections1">
                    <img src={collections1} alt="" />
                </div>
                <div className="collections2">
                    <img src={collections2} alt="" />
                </div>
                <div className="collections3">
                    <img src={collections3} alt="" />
                </div>
            </div>

            <div className="section5">
                <div className="title">
                    <h1>JUST FOR YOU</h1>
                    <div className="line">
                        <img src={line} alt="" />
                    </div>
                </div>
                <div className="jfy">
                    <div className="jfy1">
                        <img src={jfy1} alt="" />
                        <h2>Harris Tweed Three button<br />
                            Jacket</h2>
                        <p>$120</p>
                    </div>
                    <div className="jfy2">
                        <img src={jfy2} alt="" />
                        <h2>Cashmer<br />
                            Jacket</h2>
                        <p>$120</p>
                    </div>
                </div>
            </div>

            <div className="section6">
                <h1>@TRENDING</h1>
                <div className="trending1">
                    <p>#2021</p>
                    <p>#spring</p>
                    <p>#collection</p>
                    <p>#fall</p>
                </div>
                <div className="trending2">
                    <p>#dress</p>
                    <p>#autumncollection</p>
                    <p>#openfashion</p>
                </div>
            </div>

            <div className="section7">
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Making a luxurious lifestyle accessible<br />
                        for a generous group of women is our<br />
                        daily drive.</p>
                </div>
                <div className="line">
                    <img src={line} alt="" />
                </div>
                <div className="lifestyle">
                    <div className="up">
                        <div className="ls1">
                            <img src={ls1} alt="" />
                            <p>Fast shipping. Free on<br />
                                orders over $25.</p>
                        </div>
                        <div className="ls2">
                            <img src={ls2} alt="" />
                            <p>Sustainable process<br />
                                from start to finish.</p>
                        </div>
                    </div>
                    <div className="down">
                        <div className="ls3">
                            <img src={ls3} alt="" />
                            <p>Unique designs<br />
                                and high-quality materials.</p>
                        </div>
                        <div className="ls4">
                            <img src={ls4} alt="" />
                            <p>Fast shipping. Free on<br />
                                orders over $25.</p>
                        </div>
                    </div>
                </div>
                <div className="lll">
                    <img src={lll} alt="" />
                </div>
            </div>

            <div className="section8">
                <div className="title">
                    <h1>FOLLOW US</h1>
                    <img src={instagram} alt="" />
                </div>
                <div className="follow">
                    <div className="follow1">
                        <div className="mia1">
                            <img src={mia1} alt="" />
                        </div>
                        <div className="jihyn1">
                            <img src={jihyn1} alt="" />
                        </div>
                    </div>
                    <div className="follow2">
                        <div className="mia2">
                            <img src={mia2} alt="" />
                        </div>
                        <div className="jihyn2">
                            <img src={jihyn2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage