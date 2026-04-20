import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight Three.js particle network rendered into the Hero section.
 * - Subtle floating particles + soft glow points
 * - Slow rotation tied to time
 * - Pauses when off-screen for perf
 */
export function ThreeBackground({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particles
    const count = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      speeds[i] = 0.3 + Math.random() * 0.7;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Soft round sprite via canvas
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(56,189,248,1)");
    grad.addColorStop(0.4, "rgba(37,99,235,0.6)");
    grad.addColorStop(1, "rgba(29,78,216,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.6,
      map: sprite,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.85,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // A slow-moving cyan glow blob (sphere with additive material)
    const blobGeo = new THREE.SphereGeometry(14, 32, 32);
    const blobMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const blob = new THREE.Mesh(blobGeo, blobMat);
    blob.position.set(-25, 10, -10);
    scene.add(blob);

    const blob2 = new THREE.Mesh(blobGeo, blobMat.clone());
    blob2.scale.setScalar(1.3);
    blob2.position.set(28, -15, -5);
    scene.add(blob2);

    let mouseX = 0, mouseY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.05 },
    );
    io.observe(mount);

    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!visible) return;
      const t = clock.getElapsedTime();

      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const idx = i * 3 + 1;
        pos.array[idx] += Math.sin(t * speeds[i] + i) * 0.012;
      }
      pos.needsUpdate = true;

      points.rotation.y = t * 0.04 + mouseX * 0.15;
      points.rotation.x = mouseY * 0.1;

      blob.position.x = -25 + Math.sin(t * 0.3) * 5;
      blob.position.y = 10 + Math.cos(t * 0.25) * 4;
      blob2.position.x = 28 + Math.cos(t * 0.2) * 6;
      blob2.position.y = -15 + Math.sin(t * 0.35) * 5;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      blobGeo.dispose();
      blobMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden />;
}
