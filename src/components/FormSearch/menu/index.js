import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import FormSearch from '..';
import Button from '../../Button';
import { icon } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('menu-item', { separate: data.separate })}>
            <Button leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive="true"
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <FormSearch className={cx('form-menu')}>
                        <h3>List choise</h3>
                        {renderItems()}
                    </FormSearch>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
