import Header from '../componets/Header';

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
