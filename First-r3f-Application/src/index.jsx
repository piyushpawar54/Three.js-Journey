import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experirnce from './Experirnce';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <>
    <Canvas>
      <Experirnce />
    </Canvas>
  </>
);
