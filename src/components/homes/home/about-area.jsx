import useModal from '../../../hooks/use-modal';
import VideoModal from '../../common/popup-modal/video-modal';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const features_list = ['Giáo dục - MASARU EDU','Giới thiệu việc làm - MASARU HR','Kết nối - MASARU LINK']

const AboutArea = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <>
            <div className="gap-bottom-equal edu-about-area about-style-1">
                <div className="container edublink-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-gallery">
                                <img className="main-img-1" src="/assets/images/about/about-01.webp" alt="About Image" />
                                <div className="video-box" data-sal-delay="150" data-sal="slide-down" data-sal-duration="800">
                                    <div className="inner">
                                        <div className="thumb">
                                            <img src="/assets/images/about/about-02.webp" alt="About Image" />
                                            <button onClick={() => setIsVideoOpen(true)} className="popup-icon video-popup-activation border-0">
                                            <i className="icon-18"></i>
                                            </button>
                                        </div>
                                        <div className="loading-bar">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="award-status bounce-slide">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icon-21"></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">200+</h6>
                                            <span className="subtitle">Học viên đã sang Nhật vào năm 2023</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="shape-group">
                                    <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                        animate={ {
                                            x: mouseReverse(25).x,
                                            y: mouseReverse(25).y
                                        } }
                                    >
                                        <img src="/assets/images/about/shape-36.png" alt="Shape" />
                                    </motion.li>
                                    <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                        animate={ {
                                            x: mouseDirection(25).x,
                                            y: mouseDirection(25).y
                                        } }
                                    >
                                        <img src="/assets/images/about/shape-37.png" alt="Shape" />
                                    </motion.li>
                                    <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                        animate={ {
                                            x: mouseReverse(25).x,
                                            y: mouseReverse(25).y
                                        } }
                                    >
                                        <img src="/assets/images/about/shape-02.png" alt="Shape" />
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6" data-sal-delay="150" data-sal="slide-left" data-sal-duration="800">
                            <div className="about-content">
                                <div className="section-title section-left">
                                    <span className="pre-title">Về chúng tôi - MASARU</span>
                                    <h2 className="title">Chúng tôi tự hào là đơn vị phái cử lao động <span className="color-secondary">hàng đầu tại Việt Nam</span></h2>
                                    <span className="shape-line"><i className="icon-19"></i></span>
                                    <p>Chúng tôi luôn đặt chất lượng và uy tín lên hàng đầu, cam kết tạo mọi điều kiện tốt nhất cho người lao động có đầy đủ kiến thức, kỹ năng, ngôn ngữ để sinh sống và làm việc tại nước ngoài. </p>
                                </div>
                                <ul className="features-list">
                                    {features_list.map((l,i) => <li key={i}>{l}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <motion.li className="shape-1 circle scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                            animate={ {
                                x: mouseDirection(25).x,
                                y: mouseDirection(25).y
                            } }
                        >
                            <span className="d-block"></span>
                        </motion.li>
                    </ul>
                </div>
            </div>

            {/* video modal start */}
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="PICj5tr9hcc" />
            {/* video modal end */}
        </>
    );
};

export default AboutArea;