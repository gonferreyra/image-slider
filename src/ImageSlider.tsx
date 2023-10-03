import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import './image-slider.css';

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <section
      aria-label='Image-Slider'
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {images.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className='img-slider-img'
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className='img-slider-btn'
        style={{ left: '0' }}
        aria-label='View Previous Image'
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className='img-slider-btn'
        style={{ right: '0' }}
        aria-label='View Next Image'
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className='img-slider-dot-btn'
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </section>
  );
};
