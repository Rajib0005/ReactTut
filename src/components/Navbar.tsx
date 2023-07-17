import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from '@mui/material/IconButton';
import { AlertProps, InputBase, Link, Tooltip, alpha, styled } from '@mui/material';
import MuiAlert from '@mui/material/Alert'
import SearchIcon from '@mui/icons-material/Search';
import useAuthentication from '../hooks/useAuthentication';
import AccessManager from '../services/AccessManager';
import React, { useState } from 'react';
export default function Navbar() {
    const { logout } = useAuthentication()
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar >
                    <Typography component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', gap: '30px' }}>
                        <AccessManager permission='user.home'>
                            {
                                (hasAccess) => (
                                    hasAccess ?
                                    (<>
                                        {/* {console.log(hasAccess)} */}
                                        <Link href='/home' variant='h6' underline='none' color='inherit'>GeoTech</Link>
                                        <Link href='/home' paddingTop='4px' underline='none' color='inherit'>Home</Link>
                                        <Link href='/todos' paddingTop='4px' underline='none' color='inherit'>Todos</Link>
                                    </>) : 
                                    (<>
                                    </>)
                                )
                            }    
                        </AccessManager>
                        <AccessManager permission='user.dashboard'>
                            <Link href='/dashboard' paddingTop='4px' underline='none' color='inherit'>Dashboard</Link>
                        </AccessManager>
                            
                        <AccessManager permission='user.about'>
                            <Link href='/about' paddingTop='4px' underline='none' color='inherit'>About</Link>
                        </AccessManager>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Tooltip title='Logout' arrow>
                        <IconButton aria-label="logout" onClick={logout}>
                            <LogoutRoundedIcon sx={{ color: 'whitesmoke' }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box >
    );
}