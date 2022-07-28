import Home from '../Page/Home';
import Following from '../Page/Following';
import Profile from '../Page/Profile';
import Upload from '../Page/Upload';
import HeaderUpload from '../components/Layout/HeaderUpload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderUpload },
];

export { publicRoutes };
