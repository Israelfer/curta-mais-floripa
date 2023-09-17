import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Style.css";
import { getData } from "../../services/request";
import CardPraia from "../../components/CardPraia/CardPraia";

export function Praias() {
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = async () => {
    const { data, erro } = await getData().finally(() => setIsLoading(false));
    if (data) {
      setData(data);
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
      <div>
        <section className="title">
          <h1>Praias em Floripa</h1>
          <p>
            <i>Veja detalhes de cada praia e saiba como curtir ao máximo!</i>
          </p>
          <hr />
        </section>
        <main>
          {isLoading && <p>Carregando</p>}
          {!data.length && !isLoading && (
            <div>
              <h1>Erro de requisição:</h1>
              <h2>
                Não foi possível acessar a API, <br /> ou a API não possui
                itens.
              </h2>
              <p>
                Por favor, tente se conectar à internet. Ou contate o
                administrador.
              </p>
            </div>
          )}
          {data.map((item, index) => (
            <CardPraia key={index} dataApi={item} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
