import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getData } from "../../services/request";
import { Galeria } from "../../components/Galeria/Galeria";
import "./Style.css";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main className="mainPraiaId">
        {isLoading && <p>Carregando</p>}
        <section>
          {data?.images.map((item, index) => (
            <Galeria key={index} dataApi={item} />
          ))}
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
        </section>
      </main>
      <Footer />
    </>
  );
}
