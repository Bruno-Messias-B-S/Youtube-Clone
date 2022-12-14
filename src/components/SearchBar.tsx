import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:20,
            border: '1px solid #e3e3e3',
            pl: 1,
            boxShadow: 'none',
            mr: { sm: 5 },
            display:"flex",
        }}
    >
        <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', borderRadius:20 }}
        />
        <IconButton type="submit"
            sx={{ p:'10px', color:'red' }}>
            <Search />
        </IconButton>
    </Paper>
)};

export default SearchBar;