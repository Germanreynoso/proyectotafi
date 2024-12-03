import ImageCarousel from './image-Carrousel';  // Asegúrate de que esta importación esté correcta

const Gallery = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <h2>Galería de Imágenes</h2>
      <ImageCarousel />  {/* Aquí es donde se inserta el carrusel de imágenes */}
    </div>
  );
};

export default Gallery;
