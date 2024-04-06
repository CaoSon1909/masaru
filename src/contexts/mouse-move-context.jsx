import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
export const MouseMoveContext = createContext({});

export const MouseMoveProvider = ({ children }) => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  //while mouse moving, re-calculate currentPosition
  const whileMouseMove = useCallback((e) => {
    setCurrentPosition({
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
    });
  }, []);

  //re-calculate mouse direction when current position is changed
  const mouseDirection = useMemo(() => {
    return (main = 20) => ({
      x: currentPosition.x / main,
      y: currentPosition.y / main,
    });
  }, [currentPosition]);

  //re-calculate mouse direction reversely when current position is changed
  const mouseReverse = useMemo(() => {
    return (main = 20) => ({
      x: (currentPosition.x / main) * -1,
      y: (currentPosition.y / main) * -1,
    });
  }, [currentPosition]);

  //whenever whileMouseMove is triggered, add event listener to listen the function
  useEffect(() => {
    window.addEventListener("mousemove", whileMouseMove);
    return () => {
      window.removeEventListener("mousemove", whileMouseMove);
    };
  }, [whileMouseMove]);

  //re-calculate param and store in cache, when mouseDirection value and mouseReverse value is changed
  const param = useMemo(
    () => ({
      mouseDirection,
      mouseReverse,
    }),
    [mouseDirection, mouseReverse]
  );

  return (
    <MouseMoveContext.Provider value={param}>
      {children}
    </MouseMoveContext.Provider>
  );
};

export const useMouseMoveUI = () => useContext(MouseMoveContext);
