type Props = {
    texto: string;
}
const MostrarTexto = (props: Props) => {
  return <label>{props.texto}</label>;
};
export default MostrarTexto;

MostrarTexto.defaultProps = {
  texto: 'sin texto'
}
