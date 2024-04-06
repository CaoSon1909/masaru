const menu_data = [
    {
        title: 'Trang chủ',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Masaru Education', link: '/', hot: true },
            { title: 'Học từ xa', link: '/home-distant-learning' },
            { title: 'Đại học', link: '/home-university' },
            { title: 'Học trực tuyến', link: '/home-online-academy' },
            { title: 'Gia sư 1 kèm 1', link: '/home-kitchen' },
            { title: 'Yoga Instructor', link: '/home-yoga-instructor' },
            { title: 'Kindergarten', link: '/home-kindergarten' },
            { title: 'Modern Schooling', link: '/home-modern-schooling', new: true },
            { title: 'Landing Demo', link: '/landing-demo' }
        ]
    },
    {
        title: 'Các trang',
        link: '#',
        mega_menu: true,
        submenus: [
            {
                title: 'Trang phụ',
                mega_submenu: [
                    { title: 'Về chúng tôi - MASARU 1', link: '/about-1' },
                    { title: 'Về chúng tôi - MASARU 2', link: '/about-2' },
                    { title: 'Về chúng tôi - MASARU 3', link: '/about-3' },
                    { title: 'Instructor 1', link: '/team-1' },
                    { title: 'Instructor 2', link: '/team-2' },
                    { title: 'Instructor 3', link: '/team-3' },
                    { title: 'Instructor Profile', link: '/team-details' },
                    { title: 'Bảng giá', link: '/pricing-table' }
                ]
            },
            {
                title: 'Trang phụ',
                mega_submenu: [
                    { title: 'Gallery Grid', link: '/gallery-grid' },
                    { title: 'Gallery Masonry', link: '/gallery-masonry' },
                    { title: 'Lưới sự kiện', link: '/event-grid' },
                    { title: 'Danh sách sự kiện', link: '/event-list' },
                    { title: 'Thông tin sự kiện', link: '/event-details' },
                    { title: 'Hướng dẫn mua hàng', link: '/purchase-guide' },
                    { title: "404 không tìm thấy", link: '/404' },
                    { title: "Sắp có", link: '/coming-soon' }
                ]
            },
            {
                title: 'Trang phụ',
                mega_submenu: [
                    { title: "Faq's", link: '/faq' },
                    { title: 'Quyền riêng tư', link: '/privacy-policy' },
                    { title: 'Điều khoản & dịch vụ', link: '/terms-condition' },
                    { title: 'Đăng nhập', link: '/sign-in' },
                    { title: 'Giỏ hàng', link: '/cart' },
                    { title: 'Wishlist', link: '/wishlist' },
                    { title: 'Thanh toán', link: '/checkout' }
                ]
            }
        ],
        mobile_pages_menu: [
            { title: 'Về chúng tôi - MASARU 1', link: '/about-1' },
            { title: 'Về chúng tôi - MASARU 2', link: '/about-2' },
            { title: 'Về chúng tôi - MASARU 3', link: '/about-3' },
            { title: 'Instructor 1', link: '/team-1' },
            { title: 'Instructor 2', link: '/team-2' },
            { title: 'Instructor 3', link: '/team-3' },
            { title: 'Instructor Profile', link: '/team-details' },
            { title: "Faq's", link: '/faq' },
            { title: "404 Error", link: '/404' },
            { title: "Coming Soon", link: '/coming-soon' },
            { title: 'Gallery Grid', link: '/gallery-grid' },
            { title: 'Gallery Masonry', link: '/gallery-masonry' },
            { title: 'Event Grid', link: '/event-grid' },
            { title: 'Event List', link: '/event-list' },
            { title: 'Event Details', link: '/event-details' },
            { title: 'Pricing Table', link: '/pricing-table' },
            { title: 'Purchase Guide', link: '/purchase-guide' },
            { title: 'Privacy Policy', link: '/privacy-policy' },
            { title: 'Terms & Condition', link: '/terms-condition' },
            { title: 'Sign In', link: '/sign-in' },
            { title: 'Shop', link: '/shop' },
            { title: 'Product Details', link: '/product-details' },
            { title: 'Cart', link: '/cart' },
            { title: 'Wishlist', link: '/wishlist' },
            { title: 'Checkout', link: '/checkout' }
        ]
    },
    {
        title: 'Khóa học',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Course Style 1', link: '/course-style-1' },
            { title: 'Course Style 2', link: '/course-style-2' },
            { title: 'Course Style 3', link: '/course-style-3' },
            { title: 'Course Style 4', link: '/course-style-4' },
            { title: 'Course Style 5', link: '/course-style-5' },
            { title: 'Course Details 1', link: '/course-details' },
            { title: 'Course Details 2', link: '/course-details-2' },
            { title: 'Course Details 3', link: '/course-details-3' }
        ]
    },
    {
        title: 'Blog',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Blog Standard', link: '/blog-standard' },
            { title: 'Blog Masonry', link: '/blog-masonry' },
            { title: 'Blog List', link: '/blog-list' },
            { title: 'Blog Details', link: '/blog-details' }
        ]
    },
    {
        title: 'Liên hệ',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Liên hệ chúng tôi', link: '/contact-us' },
            { title: 'Liên hệ tôi', link: '/contact-me' }
        ]
    }
]

export default menu_data;