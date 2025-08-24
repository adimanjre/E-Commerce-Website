const ProductImageGallery = ({ images }) => {
  const filteredImg = images.filter((_, i) => i !== 0);
  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4 w-24">
        {filteredImg.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="w-full rounded-lg cursor-pointer"
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img src={images[0].src} alt="Main" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ProductImageGallery;
