import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2; /* z-[-2] */
  height: 100vh; /* h-screen */
  width: 100vw; /* w-screen */
  background-color: var(--background); /* bg-neutral-950 */
  background-image: radial-gradient(
    ellipse at 50% -20%,
    rgba(198, 147, 119, 0.3),
    rgba(255, 255, 255, 0)
  ); /* bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(198, 147, 119, 0.3),rgba(255,255,255,0))] */
`;

export default Background;
