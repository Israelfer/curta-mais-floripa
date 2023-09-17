import "./Card.css";

interface CardProps {
  dataApi: DataProps;
}

const Card = ({ dataApi }: CardProps) => {
  const mainImage = dataApi.images.find((image) => image.isMainImage == true);
  return (
    <div className="cardItem">
      {mainImage && (
        <>
          <img
            src={mainImage.url}
            alt={dataApi.name}
            className="mainImage"
            loading="lazy"
          />
        </>
      )}
      <div>
        <h3 className="cardTitle">{dataApi.name}</h3>
        <p>{dataApi.description}</p>
      </div>
    </div>
  );
};

export default Card;
