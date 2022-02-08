import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import { toast } from 'react-toastify';

function DeletarPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [postagem, setPostagem] = useState<Postagem>()
    const [idUser, setIdUser] = useLocalStorage('id');

    useEffect(() => {
        if (token == "") {
            toast.error("Por favor, efetue o Login!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {

        if (postagem?.usuario?.id == parseInt(idUser)) {
            history.push('/postagens')
            deleteId(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            toast.success("Postagem DELETADA com sucesso!!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
            });
        } else {
            toast.error("Você não pode DELETAR esta Postagem!!", {
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

    function nao() {
        history.push('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja DELETAR a Postagem:
                            </Typography>
                            <Typography color="textSecondary" >
                                {postagem?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" color="primary" className="botao">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" color="secondary" className="botao2">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarPostagem;