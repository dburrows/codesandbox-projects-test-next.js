import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withCappedText } from "@ceteio/chakra-capsize/theme";
import openSansFontMetrics from "@capsizecss/metrics/openSans";
import merriweatherFontMetrics from "@capsizecss/metrics/merriweather";
import "@fontsource/open-sans/700.css";
import "@fontsource/merriweather/400.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Open Sans, sans-serif",
  body: "Merriweather, serif",
};

const theme = extendTheme(
  {
    styles: {
      "-webkit-font-smoothing": "antialiased",
    },
    colors,
    fonts,
  },
  withCappedText({
    fontMetrics: {
      "Open Sans": openSansFontMetrics,
      Merriweather: merriweatherFontMetrics,
    },
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
