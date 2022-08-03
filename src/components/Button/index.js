import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    text = false,
    outline = false,
    small = false,
    large = false,
    leftIcon = false,
    rounded,
    children,
    onClick,
    ...more
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...more,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon-sub')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
