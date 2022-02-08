import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { toast } from 'react-toastify';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        toast.info('Usuário Deslogado!!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
        history.push('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar className="background-color">
                    <Box style={{ cursor: "pointer" }} className="background-color" >
                        <Link to={"/home"}>
                            <img src='https://i.imgur.com/xALHdrz.png' alt="logo" className='size'></img>
                        </Link>
                    </Box>
                    <Box width="100%" display="flex" justifyContent="space-between">
                        <Box>
                            <Box display="flex" justifyContent="start">
                                <Link to="/home" className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit" className="fonteNavbar">
                                            Women's Tales
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to="/sobre-nos" className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit" className="fonteNavbar">
                                            Sobre-Nós
                                        </Typography>
                                    </Box>

                                </Link>
                                <Link to="/contato" className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit" className="fonteNavbar">
                                            Contato
                                        </Typography>
                                    </Box>
                                </Link>

                                <Link to="/formularioTema" className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit" className="fonteNavbar">
                                            Temas
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                            <Typography variant="h6" color="inherit" className="fonteNavbar">
                                <MeetingRoomOutlinedIcon style={{ fontSize: 30, color: "white" }} />
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;