import "./Style.css";
interface CardProps {
  dataApi: DataImageProps;
}
export function Galeria({ dataApi }: CardProps) {
  const mainImage = dataApi.isMainImage == true;
  return (
    <section className="galleryContent">
      {mainImage && (
        <img src={dataApi.url} alt="" className="mainImg" loading="lazy" />
      )}
      {!mainImage && (
        <div className="gallery">
          <img src={dataApi.url} alt="" className="normalImg" loading="lazy" />
        </div>
      )}
      <div>
        {/* <img
          src={images.url}
          alt={dataApi.name}
          className="mainImage"
          loading="lazy"
        /> */}
      </div>
    </section>
  );
}
