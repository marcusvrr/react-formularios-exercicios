import { useState } from "react";
export default function useForm(inicialState) {
  const [formulario, setFormulario] = useState({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: ""
  });
  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };
  const clear = () => {
    setFormulario(inicialState);
  };
  return [formulario, onChangeForm, clear];
}