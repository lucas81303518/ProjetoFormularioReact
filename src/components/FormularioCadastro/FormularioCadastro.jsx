import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const[erros, setErros] = useState({cpf: {valido: true, texto: ""}});

  function limparCampos() {
    setNome("");
    setSobrenome("");
    setCpf("");
   setPromocoes(true);
   setNovidades(true);
  }

  return (
    <div>
      <form
        className="formulario"
        onSubmit={(event) => {
          event.preventDefault(); //Prevenindo que a página recarregue
          aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
          limparCampos();
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            //OnChange é uma propriedade que pega o valor do Componente
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
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="Sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
         onBlur={(event)=>{ //Propriedade que executa quando tira o foco do TextField
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}

          value={cpf}
          onChange={(event) => {
            let tmpCfp = event.target.value;

            if (tmpCfp.length >= 11) {
              tmpCfp = tmpCfp.substring(0, 11);
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
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked);
          }}
          control={<Checkbox defaultChecked={promocoes} />}
          label="Promoções"
        />
        <FormControlLabel
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked);
          }}
          control={<Checkbox defaultChecked={novidades} />}
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
