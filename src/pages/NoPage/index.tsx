import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export function NoPage() {
  return (
    <>
      <Navbar />
      <h1>Erro 404</h1>
      <p>Página não encontrada.</p>
      <Footer />
    </>
  );
}
