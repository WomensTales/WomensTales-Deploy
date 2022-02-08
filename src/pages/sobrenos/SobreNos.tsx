import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import './SobreNos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SobreNos() {

    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box paddingTop={10}>
                                <img src="https://i.imgur.com/6ARg9KW.png" alt="ODS 5" className="img_sobre " />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" >
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' className="fonteTitulo" align='center'>
                                        Desafio
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>

                                        Em 2015, a Assembleia Geral das Nações Unidas adotou a Agenda 2030 de Desenvolvimento Sustentável.
                                        Com 17 objetivos globais, os Estados-membros aprovaram um plano de ação para promover o
                                        desenvolvimento sustentável e a erradicação da pobreza.
                                        Entre esses objetivos, foi lançada a iniciativa global: "Por um planeta 50-50 em 2030: um passo decisivo pela igualdade de gênero”,
                                        pensando nisso, a equipe de desenvolvimento, montada no bootcamp da Generation foi desafiada a realizar
                                        um projeto que contribua com esta meta global. E de maneira conjuta nasceu o Women's Tales.


                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' className="fonteTitulo" align='center'>
                                        Solução
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        A Women’s Tales veio em um formato de Rede Social, onde as Mulheres possam interagir entre si, em formato de Postagens, compartilhar experiencia pessoais, profissionais e rotineiras, contando também com o apoio de profissionais da área de Psicologia e Jurídica, sendo estes responsáveis por compartilhar conhecimento a fim de promover o empoderamento, esclarecer dúvidas e quando necessário atuar como Representantes de maneira Pro Bono em casos de discriminação, situação de violência, podendo esta ser física, sexual, psicológica, social, patrimonial ou moral e desvalorização profissional.
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center' className="fonteTitulo" >
                                        Objetivos
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        A rede social Women’s Tales é um ambiente seguro, acolhedor,
                                        informativo, instrutivo e, principalmente, um espaço para desabafo,
                                        um lugar onde efetivamente mulheres serão ouvidas, sejam compartilhando
                                        suas conquistas ou angústias.
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center' className="fonteTitulo" >
                                        Mensagem da equipe
                                    </Typography>
                                </Box>
                                <Box paddingBottom={12} paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        Quando olhamos apenas pra nós mesmos, parece que podemos fazer bem pouco umas pelas outras.
                                        Esse "pouco" somado torna-se algo grandioso. Estamos aqui para conectar!
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h3' component='h3' align='center' className="fonteTitulo" >
                                Squad
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                    <Box justifyContent="center" alignItems="center">
                        <Box justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="https://i.imgur.com/SPJr5de.png" alt="Dev Jhonatan" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' className="fonteTitulo" align='center'>
                                Jhonatan Siqueira
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                Estudante de Direito
                            </Typography>
                        </Box>
                        <Box alignItems="center" justifyContent="center" className='box-icones' >
                            <a href=" https://github.com/jhonatannsiqueira" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/jhonatannsiqueira/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box justifyContent="center" alignItems="center">
                            <img className='box-fotos' src="https://i.imgur.com/Hkge7qg.png" alt="Dev Erick" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center' className="fonteTitulo" >
                                Erick Pereira
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>

                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/ErickPCosta" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/erick-pereira-12aa971b0/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/D6O7fVJ.png" alt="Dev Cristiane" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center' className="fonteTitulo" >
                                Cristiane Damaceno
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                            <Typography align='center'>
                                Futura engenheira de software
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/cristianedamaceno" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/cristiane-damaceno/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/qyzAk2W.png" alt="Dev Iara" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center' className="fonteTitulo" >
                                Iara dos Santos
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                            <Typography align='center'>
                                Divulgadora científica
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/IaraLima" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/iara-dos-santos-949316193/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/TMcdAhw.png" alt="Dev Vitor" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center' className="fonteTitulo" >
                                Vitor Crivelaro
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                Viciado em jogos
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/vcrivelaro" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/vitor-crivelaro-ab81bb91/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/9stATil.png" alt="Dev Marcelo" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center' className="fonteTitulo" >
                                Marcelo Borges
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                Analista e desenvolvedor
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/Marceloux" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;