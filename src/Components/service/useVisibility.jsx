import { useState } from 'react';

function useVisibility(props) {

  const [isVisible, setIsVisible] = useState(props);

  const toggleVisibility = () => {
    const agregarList = document.getElementById('vieww');
    setIsVisible(props);

    if (agregarList) {
      agregarList.classList.toggle('activ', isVisible);
      agregarList.style.transition = isVisible ? '1500ms' : "1500ms";
      agregarList.style.transform = isVisible ? 'translateY(-100%)' : "translateY(0%)";
    } 
  };

  return toggleVisibility;
}

export default useVisibility;
