function CardItem({ image, link, alt }) {
  return (
    <div className="cell">
      <figure className="image is-48x48">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={alt} />
        </a>
      </figure>
    </div>
  );
}

export default CardItem;
