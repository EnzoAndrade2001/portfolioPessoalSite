// src/components/BackgroundParticles.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackgroundParticles() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#00FFFF" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#00FFFF",
            distance: 150,
          }
        }
      }}
    />
  );
}

export default BackgroundParticles;
