import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Stats from './Components/Stats';
import { Trans } from '@volcengine/i18n';
import TranslationContextWrapper from './Components/translationContextWrapper';
function App() {
  return (
    <ChakraProvider theme={theme}>

    <TranslationContextWrapper>
    <Navbar />
     <Container maxW={'7xl'} py={12}>
     <Hero />
     <FeatureSection />
     <Stats />
     {/* <Pricing /> */}
     </Container>
     <Footer />
     
    </TranslationContextWrapper>
    </ChakraProvider>
  );
}

export default App;
