import Header from '../componets/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="contain">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
