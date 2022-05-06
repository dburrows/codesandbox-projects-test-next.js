import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withCappedText } from "@ceteio/chakra-capsize/theme";
import ralewayFontMetrics from "@capsizecss/metrics/raleway";
import openSansFontMetrics from "@capsizecss/metrics/openSans";
import literataFontMetrics from "@capsizecss/metrics/literata";
import libreBaskervilleFontMetrics from "@capsizecss/metrics/libreBaskerville";
import ptSerifFontMetrics from "@capsizecss/metrics/pTSerif";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/literata/400.css";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/pt-serif/400.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Open Sans, sans-serif",
  //body: "Raleway, sans-serif",
  //body: "Literata, sans-serif",
  //body: "Libre Baskerville, sans-serif",
  body: "PT Serif, sans-serif",
};

const theme = extendTheme(
  { colors, fonts },
  withCappedText({
    fontMetrics: {
      Raleway: ralewayFontMetrics,
      "Open Sans": openSansFontMetrics,
      Literata: literataFontMetrics,
      "Libre Baskerville": libreBaskervilleFontMetrics,
      "PT Serif": ptSerifFontMetrics,
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
