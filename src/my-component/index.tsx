import React from 'react';


interface MyComponentProps {
  text: string;
  color?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, color }) => (
  <div color={color}>{text}</div>
);

export { MyComponentProps, MyComponent };
