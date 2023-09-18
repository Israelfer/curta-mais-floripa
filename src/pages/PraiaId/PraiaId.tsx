import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getData } from "../../services/request";
import "./Style.css";
import imagemDestaque from "../../assets/mar-florianopolis.jpg";
import imagem1 from "../../assets/sobre-florianopolis.jpg";

export function PraiaId() {
  const params = useParams();
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(true);

  const api = async () => {
    const { data, erro } = await getData().finally(() => setIsLoading(false));
    if (data) {
      setData(data.find((praias) => praias.id === Number(params.id)));
    } else {
      alert(erro);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mainPraiaId">
        {isLoading && <p>Carregando</p>}
        <section>
          <img src={imagemDestaque} alt="" width={500} />
          <div className="gallery">
            <img src={imagem1} alt={`Praia de ${data?.name}`} />
            <img src={imagemDestaque} alt="" />
            <img src={imagemDestaque} alt="" />
            <img src={imagemDestaque} alt="" />
          </div>
        </section>
        <section className="content">
          <div>
            <h1>{data?.name}</h1>
            <h5>
              Bairro: {data?.neighbourhood} - {data?.city}
            </h5>
          </div>
          <p>{data?.description}</p>
          <div>
            <h4>Restaurantes</h4>
            <a className="links" href={data?.restaurantsUrl} target="_blank">
              Nas proximidades de {data?.name}, clique aqui.
            </a>
          </div>
          <div>
            <h4>Hospedagem</h4>
            <a className="links" href={data?.lodgingUrl} target="_blank">
              Clique aqui e veja opções de hospedagem próximo á {data?.name}.
            </a>
          </div>
          <div>
            <h4>Localização</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14142.846347179775!2d-48.45559117192342!3d-27.602469973855086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273e7c21378ba7%3A0xa317ef29d5487b28!2sPraia%20Mole%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1695051976018!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
