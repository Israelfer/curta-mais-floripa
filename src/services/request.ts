import axios, { AxiosError } from "axios";

export const getData = async () => {
  const res = await axios
    .get<DataProps[]>("https://curta-praia-c7hb4wgmxa-uc.a.run.app/v1/beach")
    .catch((err) => err as AxiosError);
  if (!(res instanceof Error)) {
    return { data: res.data };
  } else {
    return {
      erro: "Não foi possível acessar a API.",
    };
  }
};
