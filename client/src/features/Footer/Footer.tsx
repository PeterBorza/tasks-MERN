import styled, { useTheme } from "styled-components";
import { FaGithub } from "react-icons/fa";

const AppFooter = styled.footer`
  position: fixed;
  bottom: 0%;
  height: 3rem;
  display: flex;
  padding-inline-end: 72px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.colors.dark};
`;

const GithubLink = styled.a`
  display: flex;
  gap: 4px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const GithubLabel = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
`;

const Footer = () => {
  const theme = useTheme();
  return (
    <AppFooter>
      <GithubLink
        href="https://github.com/PeterBorza/tasks-MERN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color={theme.colors.light} />
        <GithubLabel> Github repo </GithubLabel>
      </GithubLink>
    </AppFooter>
  );
};

export default Footer;
