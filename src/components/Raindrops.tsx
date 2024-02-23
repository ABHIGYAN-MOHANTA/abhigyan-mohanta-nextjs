import { useEffect } from "react";

const Raindrops: React.FC = () => {
  useEffect(() => {
    let size = 50;

    const mouseMoveHandler = (event: MouseEvent) => {
      var x = event.clientX - size,
        y = event.clientY - size;
      let a = document.createElement("div");
      let randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.2)`;
      a.style.cssText = `
        background-color: ${randomColor};
        color: white;
        padding: ${size}px;
        border-radius: 100%;
        z-index: 1;
        font-weight: bold;
        position: absolute;
        left: ${x}px;
        top: ${y}px;
      `;
      a.classList.add("circle");
      document.body.appendChild(a);

      let animationInterval = setInterval(function () {
        y += 5000;
        a.style.top = y + "px";
        if (y > window.innerHeight) {
          clearInterval(animationInterval);
          document.body.removeChild(a);
        }
      }, 50);
    };

    document.body.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.body.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return null;
};

export default Raindrops;
