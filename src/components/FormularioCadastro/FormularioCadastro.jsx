import {React, useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/material";

function FormularioCadastro() {

   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [cpf, setCpf] = useState("");
   const [promocoes, setPromocoes] = useState(true);
   const [novidades, setNovidades] = useState(true);
   const [pessoas, setPessoas] = useState([]);

    function limparCampos() {
        setNome("");
        setSobrenome("");
        setCpf("");
        setPromocoes(true);
        setNovidades(true);
    }
    
  return (
    <div>
      <form className="formulario" onSubmit={(event) =>{
          event.preventDefault();//Prevenindo que a página recarregue
         limparCampos();
      }}>
        <TextField
        value = {nome}
          onChange={event =>{ //OnChange é uma propriedade que pega o valor do Componente
                             //Toda vez que é alterado ele pega o valor
                 setNome(event.target.value);
          }}
          id="Nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
        value = {sobrenome}
        onChange={event =>{
            setSobrenome(event.target.value);
        }}
          id="Sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
        value = {cpf}
        onChange = {event => {
            let tmpCfp = event.target.value;

                if(tmpCfp.length >= 14){
                    tmpCfp = tmpCfp.substring(0, 14);
                }
            setCpf(tmpCfp);

        }}
          id="CPF"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
        onChange={event =>{
            setPromocoes(event.target.checked);
        }}
        control={<Checkbox defaultChecked = {promocoes} />}
          label="Promoções"
        />
        <FormControlLabel
        onChange={event =>{
            setNovidades(event.target.checked);
        }}
          
          control={<Checkbox defaultChecked = {novidades}/>}
          label="Novidades"
        />

        <Button type="submit" variant="outlined">
          Criar Conta
        </Button>
        
      </form>
    </div>
  );
}
export default FormularioCadastro;
