import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header id="header" className="header-default">
      <div className="px_15 lg-px_40">
        <div className="row wrapper-header align-items-center">
          <div className="col-md-4 col-3 tf-lg-hidden">
            <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={16} viewBox="0 0 24 16" fill="none">
                <path d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            <a href="index.html" className="logo-header">
              <img src="images/logo/logo@2x.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-xl-6 tf-md-hidden">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                <li className="menu-item">
                  <Link to="/" className="item-link">
                    Trang chủ
                  </Link>    
                </li>
                <li className="menu-item">
                  <a href="#" className="item-link">Danh mục<i className="icon icon-arrow-down" /></a>
                  <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                          <li>
                              <a href="about-us.html" className="menu-link-text link text_black-2">Nhẫn</a>
                          </li>
                          <li>
                              <a href="about-us.html" className="menu-link-text link text_black-2">Vòng - Lắc</a>
                          </li>
                          
                          <li><a href="view-cart.html" className="menu-link-text link text_black-2 ">Dây chuyền</a></li>

                          <li><a href="view-cart.html" className="menu-link-text link text_black-2 ">Khuyên tai</a></li>
                          
                          <li className="menu-item-2">
                              <a href="#" className="menu-link-text link text_black-2">Bộ sưu tập</a>
                              <div className="sub-menu submenu-default">
                                  <ul className="menu-list">
                                      <li><a href="my-account.html" className="menu-link-text link text_black-2">Trang sức cưới</a></li>
                                      <li><a href="my-account-orders.html" className="menu-link-text link text_black-2">Trang sức đôi</a></li>
                                      <li><a href="my-account-address.html" className="menu-link-text link text_black-2">Trang sức đính đá</a></li>
                                      
                                  </ul>
                              </div>
                          </li>

                      </ul>
                  </div>
                </li>
                <li className="menu-item">
                  
                  <Link to="/product" className="item-link">
                    Sản phẩm <i className="icon icon-arrow-down" />
                  </Link> 
                  
                </li>
                <li className="menu-item position-relative">
                  <a href="#" className="item-link">Trang<i className="icon icon-arrow-down" /></a>
                  <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                          <li>
                              <a href="about-us.html" className="menu-link-text link text_black-2">Về chúng tôi</a>
                          </li>
                          <li>
                              <a href="about-us.html" className="menu-link-text link text_black-2">Liên hệ</a>
                          </li>
                          
                          <li><a href="view-cart.html" className="menu-link-text link text_black-2 position-relative">Xem giỏ hàng</a></li>
                          
                          <li className="menu-item-2">
                              <a href="#" className="menu-link-text link text_black-2">Tài khoản của tôi</a>
                              <div className="sub-menu submenu-default">
                                  <ul className="menu-list">
                                      <li><a href="my-account.html" className="menu-link-text link text_black-2">Tài khoản của tôi</a></li>
                                      <li><a href="my-account-orders.html" className="menu-link-text link text_black-2">Đơn hàng của tôi</a></li>
                                      <li><a href="my-account-orders-details.html" className="menu-link-text link text_black-2">Chi tiết đơn hàng</a></li>
                                      <li><a href="my-account-address.html" className="menu-link-text link text_black-2">Lịch sử mua hàng</a></li>
                                      
                                  </ul>
                              </div>
                          </li>
                          <li><a href="invoice.html" className="menu-link-text link text_black-2 position-relative">Hóa đơn</a></li>

                      </ul>
                  </div>
                </li>
               
                <li className="menu-item"><a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="item-link">Khuyến mãi</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
              <li className="nav-search"><a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="nav-icon-item"><i className="icon icon-search" /></a></li>
              <li className="nav-account"><a href="#login" data-bs-toggle="modal" className="nav-icon-item"><i className="icon icon-account" /></a></li>
              <li className="nav-cart">
                <Link to="/cart" data-bs-toggle="modal" className="nav-icon-item" >
                    <i className="icon icon-bag" /><span className="count-box">0</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header