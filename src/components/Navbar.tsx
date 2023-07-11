import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import IconButton from '@mui/material/IconButton';
import { InputBase, Link, Tooltip, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useAuthentication from '../hooks/useAuthentication';
import AccessManager from '../services/AccessManager';
import About from '../pages/About';
export default function Navbar() {
    const {logout} = useAuthentication()
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
                    <Typography component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', gap: '30px'}}>
                        <AccessManager permission='user.home'>
                        <Link href='/home' variant='h6' underline='none' color='inherit'>GeoTech</Link>
                        <Link href='/home' paddingTop='4px' underline='none' color='inherit'>Home</Link>
                        </AccessManager>
                        <AccessManager  permission= 'user.dashboard'>
                        <Link href='/home' paddingTop= '4px' underline='none' color='inherit'>Dashboard</Link>
                        </AccessManager>
                        <AccessManager permission= 'user.about'>
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