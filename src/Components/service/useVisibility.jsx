import { useState } from 'react';

function useVisibility(props) {

  const [isVisible, setIsVisible] = useState(props);

  const toggleVisibility = () => {
    const agregarList = document.getElementById('vieww');
    setIsVisible(props);

    if (agregarList) {
      agregarList.classList.toggle('activ', isVisible);
      agregarList.style.display = isVisible ? 'none' : 'block';
    } 
  };

  return toggleVisibility;
}

export default useVisibility;
