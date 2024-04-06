import { Certificate, Instructor, OnlineClass, User, Partner, University, Flight } from '../../../svg';

const category_contents = [
    {icon: <i className="icon-15"></i>, title: '500', subtitle: 'Đối tác tại Nhật'},
    {icon: <i className="icon-15"></i>, title: '3750', subtitle: 'Nhân sự đã chuyển giao'},
    {icon: <i className="icon-15"></i>, title: '500', subtitle: 'Liên kết trường Đại học'},
    {icon: <i className="icon-15"></i>, title: '11.000', subtitle: 'Thực tập sinh xuất cảnh'},
]

const CategoryArea = () => {
    return (
        <div className="features-area-2">
            <div className="container">
                <div className="features-grid-wrap">
                    {category_contents.map((category, i) => (
                        <div key={i} className="features-box features-style-2 edublink-svg-animate">
                            <div className="icon">
                                {category.icon}
                            </div>
                            <div className="content">
                                <h5 className="title"><span>{category.title}</span>{category.subtitle}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;