import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('AccountItem')}>
            <img src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-de-thuong-cute.jpg" alt="avata"></img>
            <div className={cx('Account-info')}>
                <h5>
                    Họ Và Tên
                    <FontAwesomeIcon className={cx('Account-info-icon')} icon={faCircleCheck} />
                </h5>
                <p>username hovaten@...</p>
            </div>
        </div>
    );
}

export default Account;
