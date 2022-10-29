import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? classes.active : '')}
                            to='/home'
                        >
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? classes.active : '')}
                            to='/hello'
                        >
                            Hello
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) => (navData.isActive ? classes.active : '')}
                            to='/:anyNumber'
                        >
                            4
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;