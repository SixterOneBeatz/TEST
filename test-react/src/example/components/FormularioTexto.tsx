type Props = {
  handleKeyUp(texto: string): void;
};

const FormularioTexto = (props: Props) => {
  return (
    <input type="text" onKeyUp={(e) => props.handleKeyUp(e.currentTarget.value)} />
  );
};

export default FormularioTexto;
