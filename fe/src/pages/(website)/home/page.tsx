import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="flat-spacing-9 bg_grey-6 flat-spacing-26">
            <div className="container">
                <div className="flat-tab-store flat-animate-tab overflow-unset">
                    <ul className="widget-tab-3 d-flex justify-content-center flex-wrap wow fadeInUp" data-wow-delay="0s" role="tablist">
                        <li className="nav-tab-item" role="presentation">   
                            <a href="#essentials" className="active" data-bs-toggle="tab">Trang sức cưới</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#gift_sets"  data-bs-toggle="tab">Trang sức đôi</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="essentials" role="tabpanel">
                            <div className="wrap-carousel">
                                <div className="swiper tf-sw-product-sell-1" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-1.jpg" src="images/products/jewerly-1.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-2.jpg" src="images/products/jewerly-2.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Natural Moisturizing Factors
                                                    </Link>
                                                    <span className="price">$32.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-3.jpg" src="images/products/jewerly-3.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-4.jpg" src="images/products/jewerly-4.jpg" alt="image-product"/>
                                                    </a>
                                                    
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">From $65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-5.jpg" src="images/products/jewerly-5.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-6.jpg" src="images/products/jewerly-6.jpg" alt="image-product"/>
                                                    </a>
                                                   
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Serum for Hair Density
                                                    </Link>
                                                    <span className="price">$65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-7.jpg" src="images/products/jewerly-7.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-8.jpg" src="images/products/jewerly-8.jpg" alt="image-product"/>
                                                    </a>
                                                    
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-9.jpg" src="images/products/jewerly-9.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-10.jpg" src="images/products/jewerly-10.jpg" alt="image-product"/>
                                                    </a>
                                                    
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="nav-sw style-not-line nav-next-slider nav-next-sell-1 box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                                <div className="nav-sw style-not-line nav-prev-slider nav-prev-sell-1 box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                                <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center"></div>
                            </div>
                        </div>
                        <div className="tab-pane" id="gift_sets" role="tabpanel">
                            <div className="wrap-carousel">
                                <div className="swiper tf-sw-product-sell" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-1.jpg" src="images/products/jewerly-1.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-2.jpg" src="images/products/jewerly-2.jpg" alt="image-product"/>
                                                    </a>
                                                   
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$32.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-3.jpg" src="images/products/jewerly-3.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-4.jpg" src="images/products/jewerly-4.jpg" alt="image-product"/>
                                                    </a>
                                                    
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">From $65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-5.jpg" src="images/products/jewerly-5.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-6.jpg" src="images/products/jewerly-6.jpg" alt="image-product"/>
                                                    </a>
                                                   
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Serum for Hair Density</a>
                                                    <span className="price">$65.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-7.jpg" src="images/products/jewerly-7.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-8.jpg" src="images/products/jewerly-8.jpg" alt="image-product"/>
                                                    </a>
                                                   
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Mini Confidence in a Cleanser</a>
                                                    <span className="price">$22.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">80ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/jewerly-9.jpg" src="images/products/jewerly-9.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/jewerly-10.jpg" src="images/products/jewerly-10.jpg" alt="image-product"/>
                                                    </a>
                                                    
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                                <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                                <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="tf-slideshow slider-video position-relative">
            <div className="banner-wrapper">
                <img className="lazyload" data-src="images/slider/jewerly-4.jpg" src="images/slider/jewerly-4.jpg" alt="image-collection" />
                <div className="box-content text-center">
                    <div className="container">
                        <p className="subheading text-white fw-7">Trang sức cao cấp</p>
                        <h1 className="heading text-white">Trang sức đính đá</h1>
                        <p className="description text-white">Những viên đá sáng lấp lánh nâng tầm vẻ đẹp của bạn.</p>
                        <div className="wow fadeInUp" data-wow-delay="0s">
                             <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Bộ sưu tập
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <div className="tf-marquee marquee-sm bg_dark">
            <div className="wrap-marquee speed-1">
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Mùa mới, phong cách mới: Khuyến mãi trang sức bạn không thể bỏ lỡ</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Miễn phí vận chuyển và trả hàng</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Ưu đãi có giới hạn: chốt đơn nhanh nhận ngay deal hời</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Mùa mới, phong cách mới: Khuyến mãi trang sức bạn không thể bỏ lỡ</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Miễn phí vận chuyển và trả hàng</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">Ưu đãi có giới hạn: chốt đơn nhanh nhận ngay deal hời</p>
                </div>
               
               
            </div>
        </div>
        
        <section className="flat-spacing-9">
            <div className="container">
                <div className="tf-grid-layout md-col-2 tf-img-video-text">
                    <div className="content-wrap bg_orange radius-20">
                        <div className="heading text-white wow fadeInUp" data-wow-delay="0s">Bảo quản trang sức</div>
                        <ul>
                            <li>
                                <div className="number text-white">1</div>
                                <div className="text text-white">Dùng hộp đựng trang sức có ngăn để tránh trầy xước và tránh nơi ẩm mốc.</div>
                            </li>
                            <li>
                                <div className="number text-white">2</div>
                                <div className="text text-white">Vệ sinh bằng nước và xà phòng nhẹ, tránh hóa chất mạnh.</div>
                            </li>
                            <li>
                                <div className="number text-white">3</div>
                                <div className="text text-white">Kiểm tra định kỳ. Nếu cần, hãy mang đến cửa hàng bảo trì và làm sạch.</div>
                            </li>
                            <li>
                                <div className="number text-white">4</div>
                                <div className="text text-white">Lưu ý với một số chất liệu: bạc dễ xỉn màu cần sử dụng kem đánh bạc.</div>
    
                            </li>
                        </ul>
                    </div>
                    <div className="video-wrap">
                        <video
                        className="radius-20"
                        src="images/slider/video-jewerly.mp4"
                        playsInline
                        controls
                        onLoadedMetadata={(event) => {
                            const videoElement = event.currentTarget;
                            console.log('Video duration:', videoElement.duration);
                            console.log('Video dimensions:', videoElement.videoWidth, videoElement.videoHeight);
                        }}
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-9">
            <div className="container">
                <div className="flat-tab-store flat-animate-tab overflow-unset">
                    <ul className="widget-tab-3 d-flex justify-content-center flex-wrap" role="tablist">
                        <li className="nav-tab-item" role="presentation">   
                            <a href="#organic" className="active" data-bs-toggle="tab">Khuyên tai</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#cruelty"  data-bs-toggle="tab">Dây chuyền</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#sustainable"  data-bs-toggle="tab">Vòng - Lắc</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="organic" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/collections/jewerly-7.jpg" src="images/collections/jewerly-7.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white"></h5>
                                    <div className="description">
                                        <p className="text-white">Điểm nhấn sang trọng, tỏa sáng cả ngày dài.</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Bộ sưu tập
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="cruelty" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/collections/jewerly-8.jpg" src="images/collections/jewerly-8.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white">Trang sức dây chuyền</h5>
                                    <div className="description">
                                        <p className="text-white">Kết nối yêu thương, tỏa sáng từng khoảnh khắc.</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Bộ sưu tập
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="sustainable" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/collections/jewerly-6.jpg" src="images/collections/jewerly-6.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white">Vòng tay - Lắc tay</h5>
                                    <div className="description">
                                        <p className="text-white">Phong cách đẳng cấp, tỏa sáng nơi cổ tay.</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Bộ sưu tập
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-9 bg_grey-6">
            <div className="container">
                <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span className="title">Bán chạy nhất</span>
                </div>
                <div className="wrap-carousel">
                    <div className="swiper tf-sw-recent" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-space="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-1.jpg" src="images/products/jewerly-1.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-2.jpg" src="images/products/jewerly-2.jpg" alt="image-product"/>
                                        </a>
                                       
                                    </div>
                                    <div className="card-product-info text-center">
                                        <Link to="/detail" className="title link">
                                            Anhydrous Solution Pore Serum
                                        </Link>
                                        <span className="price">$32.00</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-3.jpg" src="images/products/jewerly-3.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-4.jpg" src="images/products/jewerly-4.jpg" alt="image-product"/>
                                        </a>
                                        
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Anhydrous Solution Pore Serum</a>
                                        <span className="price">From $65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">30ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">60ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-5.jpg" src="images/products/jewerly-5.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-6.jpg" src="images/products/jewerly-6.jpg" alt="image-product"/>
                                        </a>
                                       
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Serum for Hair Density</a>
                                        <span className="price">$65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-7.jpg" src="images/products/jewerly-7.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-8.jpg" src="images/products/jewerly-8.jpg" alt="image-product"/>
                                        </a>
                                       
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Mini Confidence in a Cleanser</a>
                                        <span className="price">$22.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">80ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-9.jpg" src="images/products/jewerly-9.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-10.jpg" src="images/products/jewerly-10.jpg" alt="image-product"/>
                                        </a>
                                        
                                    </div>
                                    <div className="card-product-info text-center">
                                         <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                        <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                        
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="nav-sw style-not-line nav-next-slider nav-next-recent box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                    <div className="nav-sw style-not-line nav-prev-slider nav-prev-recent box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                    <div className="sw-dots style-2 sw-pagination-recent justify-content-center"></div>
                </div>
            </div>
        </section>
        
        
        <section className="flat-spacing-1 flat-iconbox">
            <div className="container">
                <div className="wrap-carousel wrap-mobile wow fadeInUp" data-wow-delay="0s">
                    <div className="swiper tf-sw-mobile" data-preview="1" data-space="15">
                        <div className="swiper-wrapper wrap-iconbox">
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-shipping"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Miễn phí vận chuyển</div>
                                        <p>Miễn phí vận chuyển cho đơn hàng trên 1.000.000đ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-payment fs-22"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Thanh toán linh hoạt</div>
                                        <p>Có thể thanh toán qua nhiều phương thức</p>
                                    </div>
                                </div>
                            </div>
        
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-suport"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Hỗ trợ</div>
                                        <p>Hỗ trợ nhanh chóng và vượt trội</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div className="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
                </div>
            </div>
        </section>
        
        <div className="container"><div className="line"></div></div>
        

          
        </>
    );
};

export default Home;
