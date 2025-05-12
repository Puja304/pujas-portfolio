import { useEffect } from 'react';

const AnimatedCat = () => {
  useEffect(() => {
    const cat = document.querySelector('.cat-container');
    const sprite = document.querySelector('.cat-sprite');

    if (!cat || !sprite) return; // 💡 prevent crash

    let position = 0;
    let direction = 1;
    const speed = 2;

    function animate() {
      position += direction * speed;
      cat.style.left = `${position}px`;

      const max = window.innerWidth - cat.offsetWidth - 2;
      if (position >= max || position <= 0) {
        direction *= -1;
        sprite.style.transform = `scaleX(${direction})`;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []); // empty dependency array = run once after mount

  return (
    <div className="cat-container">
      <div className="cat-sprite"></div>
    </div>
  );
};

export default AnimatedCat;
