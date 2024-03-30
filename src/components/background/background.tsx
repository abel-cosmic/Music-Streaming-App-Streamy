import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2; /* z-[-2] */
  height: 100vh; /* h-screen */
  width: 100vw; /* w-screen */
  background-color: var(--background);
  background-image: radial-gradient(
    100% 50% at 50% 0%,
    rgba(255, 132, 0, 0.13) 0,
    rgba(0, 163, 255, 0) 50%,
    rgba(0, 163, 255, 0) 100%
  );
`;

export default Background;
