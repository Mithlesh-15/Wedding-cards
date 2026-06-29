import { useEffect, useRef } from 'react';

const PetalRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Petal {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Spread initially across the screen height
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20 - (Math.random() * 100);
        this.size = Math.random() * 8 + 6;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.2 + 1.0;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 1.2 - 0.6;
        this.opacity = Math.random() * 0.5 + 0.4;
        
        // Colors corresponding to: Royal Maroon, Gold, Crimson, Pink
        const colors = [
          { r: 122, g: 0, b: 25 },    // Royal Maroon
          { r: 212, g: 175, b: 55 },  // Gold
          { r: 217, g: 30, b: 68 },   // Crimson
          { r: 247, g: 147, b: 165 }, // Soft Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX + Math.sin(this.y / 30) * 0.2; // Add soft swaying
        this.y += this.speedY;
        this.angle += this.spin;

        if (this.y > canvas.height + 20) {
          this.reset();
        }
        if (this.x > canvas.width + 20 || this.x < -20) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.color.r - 20 < 0 ? 0 : this.color.r - 20}, ${this.color.g - 20 < 0 ? 0 : this.color.g - 20}, ${this.color.b}, ${this.opacity * 0.3})`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Draw elegant teardrop curved petal shape
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(this.size / 2, -this.size, this.size, -this.size / 3, this.size / 4, this.size / 2);
        ctx.bezierCurveTo(0, this.size, -this.size / 4, this.size, -this.size / 4, this.size / 2);
        ctx.bezierCurveTo(-this.size, -this.size / 3, -this.size / 2, -this.size, 0, -this.size / 2);
        
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const maxPetals = window.innerWidth < 768 ? 20 : 55;
    const petals = Array.from({ length: maxPetals }, () => new Petal());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
};

export default PetalRain;
