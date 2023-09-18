import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getData } from "../../services/request";

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
      <main>
        {isLoading && <p>Carregando</p>}
        <h1>{data?.name}</h1>
        <p>{data?.city}</p>
      </main>
      <Footer />
    </>
  );
}
