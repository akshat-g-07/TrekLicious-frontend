import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProfileIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = async (event) => {
        await setAnchorEl(event.currentTarget);
        (!document.querySelector(".headerClass").classList.contains("day")) && (() => {
            document.querySelector(".MuiPaper-root.MuiMenu-paper")?.classList.add("day")
            document.querySelector(".MuiDivider-root.MuiDivider-fullWidth.css-9mgopn-MuiDivider-root")?.classList.add("day")
            Array.from(document.querySelectorAll(".MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-ptiqhd-MuiSvgIcon-root")).map((element) => element.classList.add("day"))
        })()
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Account settings">
                <Avatar style={{ cursor: "pointer" }} onClick={handleClick} sx={{ width: 32, height: 32 }}>M</Avatar>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                style={{ marginTop: "10px" }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar sx={{
                        width: 32, height: 32, ml: -0.75,
                        mr: 1.25,
                    }} />
                    Profile
                </MenuItem>
                <MenuItem className="menuItem" onClick={handleClose}>
                    <ListItemIcon>
                        <FavoriteBorderIcon fontSize="small" />
                    </ListItemIcon> My Favorites
                </MenuItem>
                <Divider />
                <MenuItem className="menuItem" onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Preferences
                </MenuItem>
                <MenuItem className="menuItem" onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default ProfileIcon
