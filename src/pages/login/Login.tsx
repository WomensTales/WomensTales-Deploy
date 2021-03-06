import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { toast } from 'react-toastify';
import useLocalStorage from "react-use-localstorage";

function Login() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        })

    const [userLoginResult, setUserLoginResult] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (userLoginResult.token != '') {
            setToken(userLoginResult.token)
            setId(userLoginResult.id.toString())
            history.push('/home')
        }
    }, [userLoginResult.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setUserLoginResult)

            toast.success('🦄 Usuário Logado!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        catch (error) {
            toast.error("Dados Inconsistentes. Erro ao Logar!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });

        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className="fonteTitulo" >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Button type="submit" variant="contained" className="botao">
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não possui uma Conta?</Typography>
                        </Box>
                        <Link to="/cadastrar">
                            <Typography variant="subtitle1" gutterBottom align="center" className="textosLogin">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="bgImageLogin">
            </Grid>
        </Grid>
    );
}

export default Login;