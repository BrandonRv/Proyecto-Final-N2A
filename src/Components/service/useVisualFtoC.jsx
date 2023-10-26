import { useState } from 'react';

function useVisualFtoC(initialVisibility) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const setVisibility = (visibility) => {
    setIsVisible(visibility);
  };

  return [isVisible, setVisibility];
}

export default useVisualFtoC;
