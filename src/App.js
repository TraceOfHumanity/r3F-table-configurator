import { Canvas } from '@react-three/fiber';
import { Experience } from 'components/Experience';
import { Interface } from 'components/Interface';

function App() {
  return (
    <div className='h-screen w-screen'>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;
