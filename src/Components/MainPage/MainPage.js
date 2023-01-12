import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm';

function MainPage() {
  const [formulario, onChangeForm, clear] = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: ""
  });

  const handleClick = (event) => {
    event.preventDefault();
    clear();
    console.log(
      `nome: ${formulario.nome}, módulos: ${formulario.modulos}, tecnologias: ${formulario.tecnologias}, responsável: ${formulario.responsavel} `
    );
  };
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={formulario.nome}
          onChange={onChangeForm}
          type="text"
          required
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={formulario.modulos}
          onChange={onChangeForm}
          type="text"
          pattern= "^[3-9]|[1-9][0-9]+$"
          //regex não funciona em type number
          title='Numero de Módulos tem que ser maior que 2'
          required
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={formulario.tecnologias}
          onChange={onChangeForm}
          type="text"
          required
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={formulario.responsavel}
          onChange={onChangeForm}
          type="text"
          pattern="^.{5,}$"
          title='O nome do responsavel não pode ter menos de 5 caracteres'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage