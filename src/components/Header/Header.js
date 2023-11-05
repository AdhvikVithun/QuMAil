import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, { useState } from 'react';
import styles from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { toggleSidebar } from '../../features/commonSlice';
import logo from './email.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
export let securityLevel;
function Header({ searchQuery, setSearchQuery, onSecurityLevelSelect }) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    };

    const toggleSidebarFunction = () => {
        dispatch(toggleSidebar())
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSecurityLevel, setSelectedSecurityLevel] = useState(null);
    const [securityMenuAnchor, setSecurityMenuAnchor] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSecurityMenuClick = (event) => {
        setSecurityMenuAnchor(event.currentTarget);
    };

    const handleSecurityMenuClose = () => {
        setSecurityMenuAnchor(null);
    };

    const handleSecurityLevelSelect = (level) => {
        setSelectedSecurityLevel(level);
        setSecurityMenuAnchor(null); // Close the menu after selection

        // Pass the selected security level to the parent component
        if (typeof onSecurityLevelSelect === "function") {
            onSecurityLevelSelect(level);
        } else {
            console.error("onSecurityLevelSelect is not a function");
        }
    }
    console.log("onSecurityLevelSelect:", onSecurityLevelSelect); // Debugging

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <IconButton>
                    <MenuIcon onClick={toggleSidebarFunction} />
                </IconButton>
                <img style={{ width: "50px", height: "25px", marginLeft: "25px", marginRight: "100px" }}
                    src={logo}
                    alt="QuMmail icon"
                />
                <h2> QuMail </h2>
            </div>

            <div className={styles.header__middle}>
                <SearchIcon />
                <input
                    placeholder="Search QuMail"
                    type="text"
                    name="searchMailInput"
                    className={styles.header__inputCaret}
                    onChange={e => {
                        setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                />
            </div>

            <div className={styles.header__right}>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar name="avatarMenu" onClick={handleClick} src={user?.photoUrl} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Avatar src={user?.photoUrl} />
                    </MenuItem>
                    <MenuItem>{user.displayName}</MenuItem>
                    <MenuItem>{user.email}</MenuItem>
                    <MenuItem name="logoutBtnK" onClick={signOut}>Sign Out</MenuItem>
                </Menu>
            </div>

            {/* Security Levels radio buttons menu */}
            <div className={styles.securityLabel} onClick={handleSecurityMenuClick}>
    Security Levels
</div>
<Menu
    anchorEl={securityMenuAnchor}
    open={Boolean(securityMenuAnchor)}
    onClose={handleSecurityMenuClose}
    className={styles.securityMenu}
>
    <MenuItem>
        <input
            type="radio"
            id="Level 1 - No Quantum Security"
            name="securityLevel"
            value="Level 1 - No Quantum Security"
            securityLevel = 'level1'
            
            checked={selectedSecurityLevel === "Level 1 - No Quantum Security"}
            onChange={() => handleSecurityLevelSelect("Level 1 - No Quantum Security")}
        />
        <label htmlFor="Level 1 - No Quantum Security">Level 1 - No Quantum Security</label>
    </MenuItem>
    <MenuItem>
        <input
            type="radio"
            id="Level 2 - Quantum-aided AES"
            name="securityLevel"
            value="Level 2 - Quantum-aided AES"
            securityLevel = 'level2'
            checked={selectedSecurityLevel === "Level 2 - Quantum-aided AES"}
            onChange={() => handleSecurityLevelSelect("Level 2 - Quantum-aided AES")}
        />
        <label htmlFor="Level 2 - Quantum-aided AES">Level 2 - Quantum-aided AES</label>
    </MenuItem>
    <MenuItem>
        <input
            type="radio"
            id="Level 3 - Quantum Secure One Time Pad"
            name="securityLevel"
            value="Level 3 - Quantum Secure One Time Pad"
            securityLevel = 'level3'
            checked={selectedSecurityLevel === "Level 3 - Quantum Secure One Time Pad"}
            onChange={() => handleSecurityLevelSelect("Level 3 - Quantum Secure One Time Pad")}
        />
        <label htmlFor="Level 3 - Quantum Secure One Time Pad">Level 3 - Quantum Secure One Time Pad</label>
    </MenuItem>
</Menu>
        </div>
    );
    
}


export default Header;
