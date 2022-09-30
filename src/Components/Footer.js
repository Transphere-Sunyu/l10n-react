
import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from './Logo';
import { useContext } from 'react';
import TranslationContext from '../Contexts/translationContext';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { t } = useContext(TranslationContext)

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr ' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} /> 
            </Box>
            <Text fontSize={'sm'}>
              © 2022. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader> {t('footer_menu_title')}</ListHeader>
            <Link href={'#'}> {t('footer_menu_option_1')}</Link>
            <Link href={'#'}> {t('footer_menu_option_2')}</Link>
            <Link href={'#'}> {t('footer_menu_option_3')}</Link>
            <Link href={'#'}> {t('footer_menu_option_4')}</Link>
            <Link href={'#'}> {t('footer_menu_option_5')}</Link>
            <Link href={'#'}> {t('footer_menu_option_6')}</Link>
          </Stack>
   
        </SimpleGrid>
      </Container>
    </Box>
  );
}