import { PropsWithChildren } from "react";
import { Flip, ToastContainer } from "react-toastify";
import { ThemeProvider as ThemeWrapper } from "styled-components";

import { theme, GlobalStyles } from "src/styles";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeWrapper theme={theme}>
      <GlobalStyles />
      <ToastContainer
        transition={Flip}
        limit={2}
        hideProgressBar
        pauseOnFocusLoss={false}
        stacked
      />
      {children}
    </ThemeWrapper>
  );
};

export default ThemeProvider;
