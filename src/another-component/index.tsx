import React from 'react';
import styled from 'styled-components';

const StyledAnotherComponent = styled.div<{ color?: string }>`
  color: ${p => p.color || 'pink'};
`;

interface AnotherComponentProps {
  text: string;
  color?: string;
}

const AnotherComponent: React.FC<AnotherComponentProps> = ({ text, color }) => (
  <StyledAnotherComponent color={color}>{text}</StyledAnotherComponent>
);

export { AnotherComponentProps, AnotherComponent };
