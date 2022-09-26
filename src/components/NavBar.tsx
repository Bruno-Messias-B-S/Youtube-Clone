import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';

import { SearchBar } from './index'

const NavBar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={{ xs:2, md:2 }} 
        sx={{ position: "stick", background: "#000", top: 0, justifyContent: "space-between" }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: '-10px', marginRight: '6px' }}>
            <img src={logo} alt="logo" height={45}/>
        </Link>

        <SearchBar />
    </Stack>
)

export default NavBar