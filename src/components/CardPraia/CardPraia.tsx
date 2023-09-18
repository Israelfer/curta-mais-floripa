import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
  dataApi: DataProps;
}

const Card = ({ dataApi }: CardProps) => {
  const mainImage = dataApi.images.find((image) => image.isMainImage == true);

  return (
    <section className="card">
      {mainImage && (
        <Link to={`/praias/${dataApi.id}`}>
          <img
            src={mainImage.url}
            alt={dataApi.name}
            className="mainImage"
            loading="lazy"
          />
        </Link>
      )}
      <div>
        <h3 className="cardTitle">{dataApi.name}</h3>
        <p>
          {dataApi.description.length > 150
            ? `${dataApi.description.substring(0, 150)}...`
            : dataApi.description}
        </p>
        <Link to={`/praias/${dataApi.id}`}>
          <button type="button" className="btnCard">
            Saiba mais
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Card;
