import styled, { keyframes } from "styled-components";

// Define keyframes for animation
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

// Styled SVG container
const Container = styled.svg`
  --uib-size: 60px;
  --uib-color: var(--primary);
  --uib-speed: 0.8s;
  --uib-bg-opacity: 0.1;
  height: var(--uib-size);
  width: var(--uib-size);
  position: fixed;
  top: 50%;
  right: 50%;
  left: 50%;
  bottom:50%;
  transform-origin: center;
  animation: ${rotate} var(--uib-speed) linear infinite;
  will-change: transform;
  overflow: visible;
`;

// Styled circle components
const Circle = styled.circle`
  fill: none;
  stroke: var(--uib-color);
`;

const Car = styled(Circle)`
  stroke-dasharray: 25, 75;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  transition: stroke 0.5s ease;
`;

const Track = styled(Circle)`
  opacity: var(--uib-bg-opacity);
  transition: stroke 0.5s ease;
`;

// React component
const AnimatedSVGComponent = () => {
  return (
    <Container viewBox="0 0 40 40" height="40" width="40">
      <Track
        className="track"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
      <Car
        className="car"
        cx="20"
        cy="20"
        r="17.5"
        pathLength="100"
        strokeWidth="5px"
        fill="none"
      />
    </Container>
  );
};

export default AnimatedSVGComponent;
