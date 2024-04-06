import Link from 'next/link';

const category_contents = {
    title: 'Một số ngành nghề đang thiếu nhân lực tại Nhật Bản',
    text: 'Luôn cập nhật danh sách theo từng năm',
    category_items: [
        {
            delay: '100',
            color: 'color-secondary-style',
            icon: 'ri-sun-foggy-fill',
            title: 'Nông nghiệp'
        },
        {
            delay: '50',
            color: 'color-tertiary-style',
            icon:  'ri-cake-3-line',
            title: 'Chế biến thực phẩm'
        },
        {
            delay: '100',
            color: 'color-extra02-style',
            icon: 'ri-shirt-line',
            title: 'Dệt may mặc'
        },
        {
            delay: '150',
            color: 'color-extra03-style',
            icon: 'ri-medal-2-line',
            title: 'Thực tập sinh kỹ năng'
        },
        {
            delay: '50',
            color: 'color-extra04-style',
            icon: 'ri-heart-pulse-line',
            title: 'Y tế - Sức khỏe'
        },
        {
            delay: '100',
            color: 'color-extra05-style',
            icon: 'ri-pantone-line',
            title: 'Vi mạch - Bán dẫn'
        },
        {
            delay: '150',
            color: 'color-extra01-style',
            icon: 'ri-code-box-line',
            title: 'Công nghệ thông tin'
        },
        {
            delay: '150',
            color: 'color-extra06-style',
            icon: 'ri-contrast-drop-2-line',
            title: 'Khai thác khoáng sản'
        }
    ]
}

const { title, text, category_items } = category_contents;


const TopCategories = () => {
    return (
        <div className="edu-categorie-area categorie-area-2 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p>
                </div>

                <div className="row g-5">
                    {category_items.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6" data-sal-delay={`${item.delay}`} data-sal="slide-up" data-sal-duration="800">
                            <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <Link href="/course-style-1">
                                        <a>
                                            <h5 className="title">{item.title}</h5>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories;