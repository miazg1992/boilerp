import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
