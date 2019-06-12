import styled from 'styled-components';
import { media } from '../../../styles/media';

export const NavSearchStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 64px;

  ${media.landscapePhone`
    max-width: 100%;
    width: 100%;
  `}

  .spinner {
    ${media.landscapePhone`
        top: calc(50% - 8px);
        margin-left: 16px;
        margin-right: 16px;
      `}
  }

  svg {
    ${media.landscapePhone`
        top: 50%;
        margin-left: 16px;
        margin-right: 16px;
      `}
  }

  .search-input {
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
    border: 1px solid ${(props) => (props.border ? '#dfe1e5' : 'transparent')};
    border-radius: 4px;
    margin-left: 16px;
    width: 100%;
    max-width: 500px;
    font-weight: 400;
    padding: 8px 16px;
    padding-left: 42px;
    padding-right: 40px;
    margin-top: 15px;
    text-overflow: ellipsis;

    ${media.landscapePhone`
      padding: 8px 40px;
      margin-left: 0;
      border: 1px solid #dfe1e5;
    `}
  }

  &:focus {
    border-radius: 4px;
    border: 1px solid #dfe1e5;
  }

  .label {
    top: 8px;
    font-size: 0.5rem;
  }
`;
