import React from 'react';


interface AnotherComponentProps {
  text: string;
  color?: string;
}

const AnotherComponent: React.FC<AnotherComponentProps> = ({ text, color }) => (
  <div color={color}>{text}</div>
);

export { AnotherComponentProps, AnotherComponent };
