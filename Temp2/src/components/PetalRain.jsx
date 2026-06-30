import { useEffect, useRef } from "react";

function PetalRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas sizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Petal types: 0 = Rose (Pastel Pink), 1 = Jasmine (White/Cream), 2 = Leaf (Soft Green)
    const petals = [];
    const maxPetals = 45; // balanced for aesthetic beauty and high performance

    class Petal {
      constructor() {
        this.reset();
        // Stagger spawn heights on initial load
        this.y = Math.random() * canvas.height - canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 8 + 6; // 6px to 14px
        this.type = Math.random() < 0.5 ? 0 : Math.random() < 0.8 ? 1 : 2; 
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.2 + 0.8;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.4 + 0.4; // 0.4 to 0.8 opacity
        this.swingAmount = Math.random() * 0.02 + 0.01;
        this.swingStep = Math.random() * 100;
      }

      update() {
        this.y += this.speedY;
        this.swingStep += this.swingAmount;
        this.x += this.speedX + Math.sin(this.swingStep) * 0.5;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        if (this.type === 0) {
          // Rose Petal (Pastel Pink shape using bezier curves)
          ctx.fillStyle = "rgba(240, 196, 184, 0.9)"; // Soft Rose Gold/Pink
          ctx.strokeStyle = "rgba(224, 168, 153, 0.4)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size, -this.size / 2, -this.size, this.size, 0, this.size);
          ctx.bezierCurveTo(this.size, this.size, this.size, -this.size / 2, 0, 0);
          ctx.fill();
          ctx.stroke();
        } else if (this.type === 1) {
          // Jasmine Blossom (Small white flower / star shape)
          ctx.fillStyle = "rgba(253, 251, 247, 0.95)";
          ctx.strokeStyle = "rgba(212, 175, 55, 0.2)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          // Draw small 4-petal jasmine shape
          for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.ellipse(0, this.size / 2, this.size / 3, this.size / 2, 0, 0, Math.PI * 2);
          }
          ctx.fill();
          ctx.stroke();
          // Golden center dot
          ctx.beginPath();
          ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "#D4AF37";
          ctx.fill();
        } else {
          // Soft Green Leaf
          ctx.fillStyle = "rgba(143, 168, 155, 0.75)";
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(-this.size / 2, this.size / 2, 0, this.size);
          ctx.quadraticCurveTo(this.size / 2, this.size / 2, 0, 0);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Populate particles
    for (let i = 0; i < maxPetals; i++) {
      petals.push(new Petal());
    }

    // Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-30 pointer-events-none w-full h-full"
    />
  );
}

export default PetalRain;
