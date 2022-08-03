import Header from '../componets/Header';

function HeaderUpload({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contain">{children}</div>
            </div>
        </div>
    );
}

export default HeaderUpload;
