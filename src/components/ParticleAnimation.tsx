import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 2000; // Increased for better shape definition
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    // Define shape coordinates
    const lightbulbShape = new Array(particleCount).fill(0).map((_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2;
      // Basic lightbulb shape
      const y = Math.sin(angle) * radius;
      const x = Math.cos(angle) * radius;
      const z = 0;
      return [x, y + (y > 0 ? 1 : 0), z];
    });

    const gearShape = new Array(particleCount).fill(0).map((_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2;
      // Gear shape with teeth
      const toothDepth = 0.3;
      const teethCount = 12;
      const r = radius + (Math.floor(angle * teethCount / (Math.PI * 2)) % 2) * toothDepth;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      const z = 0;
      return [x, y, z];
    });

    // Initial random positions
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material with gradient colors
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    // Create colors array for gradient effect
    const colors = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color('#ed265d');
    const color2 = new THREE.Color('#f15a2b');

    for (let i = 0; i < particleCount * 3; i += 3) {
      const mixer = i / (particleCount * 3);
      const color = new THREE.Color().lerpColors(color1, color2, mixer);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    // Animation variables
    let currentShape = 'random';
    let morphProgress = 0;
    let lastTime = 0;
    const morphDuration = 3000; // 3 seconds per shape

    // Animation
    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Update morph progress
      morphProgress += deltaTime / morphDuration;
      if (morphProgress >= 1) {
        morphProgress = 0;
        // Cycle through shapes
        currentShape = currentShape === 'random' ? 'lightbulb' : 
                      currentShape === 'lightbulb' ? 'gear' : 'random';
      }

      // Update particle positions
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        let targetX, targetY, targetZ;

        if (currentShape === 'random') {
          targetX = (Math.random() - 0.5) * 10;
          targetY = (Math.random() - 0.5) * 10;
          targetZ = (Math.random() - 0.5) * 10;
        } else if (currentShape === 'lightbulb') {
          [targetX, targetY, targetZ] = lightbulbShape[i];
        } else {
          [targetX, targetY, targetZ] = gearShape[i];
        }

        // Smooth interpolation
        positions[i3] += (targetX - positions[i3]) * 0.02;
        positions[i3 + 1] += (targetY - positions[i3 + 1]) * 0.02;
        positions[i3 + 2] += (targetZ - positions[i3 + 2]) * 0.02;
      }

      particles.attributes.position.needsUpdate = true;
      
      // Gentle rotation
      particleSystem.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleAnimation;