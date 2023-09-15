import CidadeFloripa from "../../assets/estrada-florianopolis.jpg";
import "./style.css";

export function Sobre() {
  return (
    <section className="sobreSection" id="sobre">
      <img src={CidadeFloripa} alt="Cidade de Florianópolis" loading="lazy" />
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
        <p>
          Algumas opções: Praias paradisíacas, lagoas, dunas e trilhas em meio à
          Mata Atlântica. Em Floripa tem também casario colonial, sítios
          arqueológicos, opções variadas de esportes e muito agito. Bares,
          restaurantes e boates dominam o Canto da Lagoa, o Canto dos Araçás, o
          Centrinho, e a Avenida das Rendeiras, o Caminho para a Praia Mole.
        </p>
        <h4>NO VERÃO...</h4>
        <p>
          É a época mais esperada para ir a Florianópolis e aproveitar as
          praias! Entre os meses de: dezembro, janeiro, fevereiro e março.
          Durante o verão, tudo fica muito propício para curtir o sol e o mar. A
          temperatura fica na casa dos 30°C e sempre faz muito calor.
        </p>
        <h4>Continue explorando e conhendo mais de Floripa!</h4>
      </div>
    </section>
  );
}
