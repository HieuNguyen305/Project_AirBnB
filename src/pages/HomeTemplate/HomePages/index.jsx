import React from 'react'
import logo from "../../../assets/Images/pointhouse-suites-main-house.jpg"
import "./style.css"
function HomePages() {
    return (
        <>
            {/* <div className="container">
                <h2>Ở bất cứ đâu</h2>
                <div className='exclusives'>
                    <div>
                        <img src={logo} alt="logo" className="navbar-logo" width={100} />
                    </div>
                    <div>
                        <img src={logo} alt="logo" className="navbar-logo" width={100} />
                    </div>
                    <div>
                        <img src={logo} alt="logo" className="navbar-logo" width={100} />
                    </div>
                    <div>
                        <img src={logo} alt="logo" className="navbar-logo" width={100} />
                    </div>
                </div>
            </div> */}
            <div className="container-fluid">
                <h2 className='sub-title'>Ở bất cứ đâu</h2>
                <div className='anywhere'>
                    <div>
                        <img src={logo} alt='logo' />
                        <h3>Toàn bộ nhà</h3>
                    </div>
                    <div>
                        <img src={logo} alt='logo' />
                        <h3>Chỗ ở độc đáo</h3>
                    </div>
                    <div>
                        <img src={logo} alt='logo' />
                        <h3>Trang trại và thiên nhiên</h3>
                    </div>
                    <div>
                        <img src={logo} alt='logo' />
                        <h3>Cho phép mang theo thú cưng</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePages
