import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 pl-5">
                            <h5>Giới thiệu</h5>
                            <ul className='list-unstyled'>
                                <li>Phương thức hoạt động của Airbnb</li>
                                <li>Trang tin tức</li>
                                <li>Nhà đầu tư</li>
                                <li>Airbnb Plus</li>
                                <li>Airbnb Luxe</li>
                                <li>HotelTonight</li>
                                <li>Airbnb for Work</li>
                                <li>Nhờ có Host, mọi điều đều có thể</li>
                                <li>Cơ hội nghề nghiệp</li>
                                <li>Thư của nhà sáng lập</li>
                            </ul>
                        </div>
                        <div className="col-md-3 pl-5">
                            <h5>Cộng đồng</h5>
                            <ul className="list-unstyled">
                                <li>Sự đa dạng và cảm giác thân thuộc</li>
                                <li>Tiện nghi phù hợp cho người khuyết tật</li>
                                <li>Đối tác liên kết Airbnb</li>
                                <li>Chỗ ở cho tuyến đầu</li>
                                <li>Lượt giới thiệu của khách</li>
                                <li>Airbnb.org</li>
                            </ul>
                        </div>
                        <div className="col-md-3 pl-5">
                            <h5>Đón tiếp khách</h5>
                            <ul className="list-unstyled">
                                <li>Cho thuê nhà</li>
                                <li>Tổ chức trải nghiệm trực tuyến</li>
                                <li>Tổ chức trải nghiệm</li>
                                <li>Đón tiếp khách có trách nhiệm</li>
                                <li>Trung tâm tài nguyên</li>
                                <li>Trung tâm cộng đồng</li>
                            </ul>
                        </div>
                        <div className="col-md-3 pl-5">
                            <h5>Hỗ trợ</h5>
                            <ul className="list-unstyled">
                                <li>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</li>
                                <li>Trung tâm trợ giúp</li>
                                <li>Các tùy chọn hủy</li>
                                <li>Hỗ trợ khu dân cư</li>
                                <li>Tin cậy và an toàn</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6 text-md-left pl-5">
                            <p className="copyright mb-0"> &copy;{new Date().getFullYear()} Airbnb, Inc. All rights reserved · Quyền riêng tư · Điều khoản · Sơ đồ trang web</p>
                        </div>
                        <div className="col-md-6 text-md-right pr-5">
                            <LanguageIcon />
                            <span><u>Tiếng Việt(VN)</u></span>
                            <span className='pl-4'> $ <u>USD</u></span>
                            <span className='pl-3'><FacebookOutlinedIcon /></span>
                            <span className='pl-3'><TwitterIcon /></span>
                            <span className='pl-3'><InstagramIcon /></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}