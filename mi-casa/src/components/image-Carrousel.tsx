import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // URLs de las imágenes en Cloudinary
  const images = [
    'https://asset.cloudinary.com/dxwucaph9/5a52438869b21a42fba33428341e4e40',
    'https://asset.cloudinary.com/dxwucaph9/9031e845af66ab12a06a66fc73505ebb',
    'https://asset.cloudinary.com/dxwucaph9/08110a4372cf5903efb20806db5a1f24',
    'https://asset.cloudinary.com/dxwucaph9/f0c049ccb59e7b149b1f6a06b799b977',
    'https://asset.cloudinary.com/dxwucaph9/c646e0c0b5bf032b1df5ad7469276059',
    'https://asset.cloudinary.com/dxwucaph9/47b19175940fdc78622d8e8ba2d663d1',
    'https://asset.cloudinary.com/dxwucaph9/a96c22c3ccb9f369c8971ae8c3320e82',
    'https://asset.cloudinary.com/dxwucaph9/f2ed5b294173d7fb836409fa10c3e41a',
    'https://asset.cloudinary.com/dxwucaph9/c5d53997c0e68e43a50704e6827d13cf',
    'https://asset.cloudinary.com/dxwucaph9/6c6217a5864fbcc0047ff86dbcfe0d8f'
  ];

  return (
    <div style={{ width: '80%', margin: '0 auto', height: '400px' }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Imagen ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Asegura que las imágenes se ajusten correctamente
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
