import { ImageSlider } from './ImageSlider';
import car1 from './assets/auto-2179220_1280.jpg';
import car2 from './assets/auto-3368094_1280.jpg';
import car3 from './assets/auto-788747_1280.jpg';
import car4 from './assets/car-race-438467_1280.jpg';
import car5 from './assets/navy-blue-sport-coupe-road-side-view_114579-5046.jpg';

const IMAGES = [
  { url: car1, alt: 'Car One' },
  { url: car2, alt: 'Car Two' },
  { url: car3, alt: 'Car Three' },
  { url: car4, alt: 'Car Four' },
  { url: car5, alt: 'Car Five' },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        height: '500px',
        aspectRatio: '10 / 6',
        margin: '0 auto',
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
