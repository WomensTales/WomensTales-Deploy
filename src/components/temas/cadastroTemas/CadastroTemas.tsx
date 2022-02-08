import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroTemas.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import ListarTemas from '../listarTemas/ListarTema';
import { toast } from "react-toastify";
import useLocalStorage from 'react-use-localstorage';

function CadastroTema() {

	let history = useHistory();
	const { id } = useParams<{ id: string }>();
	const [token, setToken] = useLocalStorage('token');
	const [tema, setTema] = useState<Tema>({
		id: 0,
		titulo: '',
		status: false
	})

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
		buscaId(`/temas/${id}`, setTema, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedTema(e: ChangeEvent<HTMLInputElement>) {

		setTema({
			...tema,
			[e.target.name]: e.target.value,
		})

	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()


		if (id !== undefined) {
			put(`/temas`, tema, setTema, {
				headers: {
					'Authorization': token
				}
			})
			toast.success("Tema ATUALIZADO com sucesso!!", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined
			});
		} else {
			post(`/temas`, tema, setTema, {
				headers: {
					'Authorization': token
				}
			})
			toast.success("Tema CADASTRADO com sucesso!!", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined
			});

		}
		back()

	}

	function back() {
		history.push('/temas')
	}

	return (
		<Container maxWidth="sm" className="topo">
			<Grid >
				<form onSubmit={onSubmit}>
					<Typography variant="h3" color="textSecondary" component="h1" align="center" className="fonteTitulo" >Novo tema</Typography>
					<TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="titulo" label="Tema" variant="outlined" name="titulo" margin="normal" fullWidth />
					<Button type="submit" variant="contained" className="botao">
						Criar
					</Button>
				</form>
			</Grid>
			<Grid>
				<Typography variant="h3" color="textSecondary" component="h1" align="center" className="fonteTitulo">Lista de Temas</Typography>
				<Grid container xs={12} justifyContent='center' alignItems='center' >
					<Box display="flex" flexWrap="wrap" justifyContent="center">
						<ListarTemas />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default CadastroTema;