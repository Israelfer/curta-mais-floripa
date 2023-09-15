import CidadeFloripa from "../../assets/sobre-florianopolis.jpg";
import "./style.css";

export function Sobre() {
  return (
    <section className="sobreSection">
      <img src={CidadeFloripa} alt="Cidade de Florianópolis" />
      <div>
        <h1>Sobre</h1>
        <h3>O que Floripa tem de bom?</h3>
        <p>
          Florianópolis tem encantos que atraem turistas do mundo inteiro:
          praias para todos os gostos, culinária variada onde os frutos do mar
          são o carro chefe e muita história pra ser vista e ouvida. Por serem
          tantas as atrações, pode pintar a dúvida de quem vem pela primeira
          vez: o que fazer em Floripa?
        </p>
        <h4>
          Encontre aqui as melhores informações sobre as praias de Floripa
        </h4>
      </div>
    </section>
  );
}
