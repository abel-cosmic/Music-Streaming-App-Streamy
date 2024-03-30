import styled, { css } from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "link"
    | "ghost"
    | "outline"
    | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}
const buttonVariants = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.8rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer; // Fix: Changed 'cursor-event' to 'cursor' and set value to 'pointer'
  transition: background-color scale 0.15s ease-in-out, color 0.2s ease-in;
  &:active {
    scale: 0.95;
  }
`;

const Button = styled.button<ButtonProps>`
  ${buttonVariants}

  ${({ variant }) => {
    switch (variant) {
      case "destructive":
        return css`
          background-color: var(--destructive);
          border-radius: 0.375rem;
          border: none;
          color: var(--destructive-foreground);
        `;
      case "secondary":
        return css`
          background-color: var(--secondary);
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
          border-radius: 0.375rem;
          color: var(--secondary-foreground);
          &:hover {
            background-opacity: 0.8;
          }
        `;
      case "outline":
        return css`
          background-color: var(--background);
          border-width: 2px;
          border-color: var(--input);
          border-style: solid;
          color: var(--foreground);
          &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
          }
        `;
      case "ghost":
        return css`
        border:none;
        background:
        &:hover {
            background-color: var(--accent)
            color:var(--accent-foreground)
          }
        `;
      case "link":
        return css`
          color: var(--primary);
          border: none;
          background: transparent;
          &:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        `;
      // Add other variants similarly
      default:
        return css`
          background-color: var(--primary);
          border: none;
          font-weight: 600;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
          border-radius: 0.375rem;
          color: var(--primary-foreground);
          &:hover {
            opacity: 0.9;
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          height: 2.25rem;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          border-radius: 0.375rem;
        `;
      case "lg":
        return css`
          height: 2.75rem;
          padding: 8px 32px;
          padding-left: 2rem;
          padding-right: 2rem;
          border-radius: 0.375rem;
        `;
      case "icon":
        return css`
          height: 2.5rem;
          width: 2.5rem;
          padding: 8px 32px;
        `;
      default:
        return css`
          height: 2.5rem;
          padding: 0.5rem 1.5rem;
        `;
    }
  }}
`;

Button.displayName = "Button";

export { Button, buttonVariants };
