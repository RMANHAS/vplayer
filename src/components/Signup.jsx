import React from 'react';
import {
  Button,
  Container,
  Heading,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';

import { Form, Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h="1000vh" p="16">
      <Form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '100']}
          m={'auto'}
          my={'15'}
        >
          <Heading>VPLAYER</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <input placeholder={'name'} type={'NAME'} required />
          <input placeholder={'email'} type={'email'} required />
          <input placeholder={'password'} type={'password'} required />

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Sign Up{''}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </Form>
    </Container>
  );
};

export default Signup;
