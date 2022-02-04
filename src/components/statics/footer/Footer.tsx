import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {

    return (
        <>
            <Grid container direction="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", backgroundColor: "#C77185"}}>
                <Box paddingLeft={7} className="box1">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="left" style={{ color: "white" }} ></Typography>
                    </Box>
                    <Box>
                        <a target="_blank" className='text-decorator-none' href="https://womenstales.vercel.app/">
                            <Typography variant="subtitle2" style={{ color: "white" }} align="center">© 2022 Copyright Women's Tales</Typography>
                        </a>
                    </Box>
                </Box>
                <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/WomensTales/WomensTales-Deploy" target="_blank">
                        <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Grid>
        </>
    )
}

export default Footer;