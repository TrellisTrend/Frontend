

const HeroSlide = ({ slide }) => {
  const { heading, image, details } = slide;

  return (
    <div className="grid grid-cols-2 items-center px-20">
      <img src={image} alt={heading} />
      <div>
        <h2 className="text-3xl font-roboto font-bold pb-4">{heading}</h2>
        <p className="text-xl">{details}</p>
        <button className="btn btn-primary mt-8 min-h-0 h-10 text-white px-5 text-xl rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
