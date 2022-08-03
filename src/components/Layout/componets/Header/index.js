import React, { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faMagnifyingGlass,
    faMessage,
    faSpinner,
    faUpload,
    faEarthAsia,
    faKeyboard,
    faQuestion,
    faGear,
    faCoins,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

import FormSearch from '../../../FormSearch';
import Account from '../../../Account';
import Button from '../../../Button';
import Menu from '../../../FormSearch/menu';

const cx = classNames.bind(styles);
//check user
const user = true;

//API cho Menu non user
const API_MENU = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Languages',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboar shortcuts',
    },
];
//API cho user menu
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
    },
    ...API_MENU,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        src="data:image/png;base64,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"
                        alt="logo"
                    ></img>
                </div>
                <HeadlessTippy
                    interactive="true"
                    visible
                    render={(attrs) => (
                        <div className={cx('Search-result')} tabIndex="-1" {...attrs}>
                            <FormSearch>
                                <h4>Acounts</h4>
                                <Account />
                                <Account />
                                <Account />
                            </FormSearch>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="nhập vào tìm kiếm"></input>
                        <div className={cx('load-cancel')}>
                            <button>
                                <FontAwesomeIcon id={cx('button1')} icon={faXmarkCircle} />
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className={cx('search-button')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {user ? (
                        <Fragment>
                            <Tippy content="Upload Video" placement="bottom" offset={4}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text>Up Load</Button>
                            <Button primary>Log in</Button>
                        </Fragment>
                    )}
                    <Menu items={user ? userMenu : API_MENU}>
                        {user ? (
                            <img
                                className={cx('avatar')}
                                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/244634112_1566133257068516_82006798196389244_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U_eo0Th6U4AAX_5RTIj&_nc_ht=scontent-hkg4-1.xx&oh=00_AT9S0xTToDWv_kCcKCXHR_Yu_tucU6bQO1cnnN-NPvWDjA&oe=62EE9532"
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('actions-icon')}>
                                <FontAwesomeIcon icon={faList} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
