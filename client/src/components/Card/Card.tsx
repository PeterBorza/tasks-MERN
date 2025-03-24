import { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  title?: string;
  imageSrc?: string;
} & PropsWithChildren;

const Card = ({ children, onClick, title, imageSrc }: Props) => {
  return (
    <StyledCard onClick={onClick} title={title}>
      <CardImage src={imageSrc} alt="Some item image" />
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 150ms;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CardImage = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  border-radius: inherit;
`;

export default Card;
