import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Home = () => {
  // Adjust the island model's scale and position based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else 
      screenScale = [1,1,1];
    }
    return  [screenScale, screenPosition]
  }

  const [screenScale, screenPosition] = adjustIslandForScreenSize();

  return (
    <section className = "w-full h-screen relative">
      <Canvas className = "w-full h-full bg-transparent"
        camera = {{ near: 0.1, far: 1000 }}>
        
        <Suspense fallback = {<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home