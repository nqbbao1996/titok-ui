import styles from './FormSearch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormSearch({ children, className }) {
    return <div className={cx('formSearch', className)}>{children}</div>;
}
export default FormSearch;
