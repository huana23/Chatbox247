import LandingPage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import FreeChat from '../pages/FreeChat'
import Blog from '../pages/BlogPage'
import AboutPage from '../pages/AboutPage'
import TermsPage from '../pages/TermsPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import FeaturePage from '../pages/FeaturePage'












//public route
const publicRoutes = [
    { path: '/', component: LandingPage},
    { path: '/dich-vu', component: ServicePage},
    { path: '/free-chat', component: FreeChat},
    { path: '/huong-dan', component: Blog},
    { path: '/gioi-thieu', component: AboutPage},
    { path: '/dieu-khoan-su-dung', component: TermsPage},
    { path: '/chinh-sach-bao-mat', component: PrivacyPolicyPage},
    { path: '/tinh-nang', component:  FeaturePage},







]

const privateRoutes = []

export {publicRoutes, privateRoutes}