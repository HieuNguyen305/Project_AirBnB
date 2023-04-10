import logo from "../../../../assets/Images/long-logo.png";
import "./style.css";
import LanguageIcon from '@mui/icons-material/Language';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BasicMenu from "./profileMenu";
function Header() {
    return (
        <>
            <div className="header">
                <nav>
                    <img src={logo} alt="logo" className="navbar-logo" width={150} />
                    <ul className="nav-link">
                        <li>Nơi ở</li>
                        <li>Trải nghiệm</li>
                        <li>Trải nghiệm trực tuyến</li>
                    </ul>
                    <div className="profile-container">
                        <div className="airbnb-your-home">Đón tiếp khách</div>
                        <div className="globe-div">
                            <LanguageIcon />
                        </div>
                        <div className="profile-div-btn">
                            <BasicMenu />
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <h1>Nhờ có Host, mọi điều đều có thể</h1>
                    <div className="search-bar">
                        <form>
                            <div className="location-input">
                                <label>Địa Điểm</label>
                                <input type="text" placeholder="Bạn sắp đi đâu?" />
                            </div>
                            <span></span>
                            <div>
                                <label>Nhận phòng</label>
                                <input type="text" placeholder="Thêm ngày" />
                            </div>
                            <span></span>
                            <div>
                                <label>Trả phòng</label>
                                <input type="text" placeholder="Thêm ngày" />
                            </div>
                            <span></span>
                            <div>
                                <label>Khách</label>
                                <input type="text" placeholder="Thêm khách" />
                            </div>
                            <button type="submit"><SearchRoundedIcon /></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
