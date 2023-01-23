import { Button, Container, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Form, Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h="1000vh" p="16">
      {' '}
      <Form>
        //{' '}
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '100']}
          m={'auto'}
          my={'15'}
        >
          <Heading>Welcome Back</Heading>
          <input placeholder={'email'} type={'email'} required />
          <input placeholder={'password'} type={'password'} required />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forget password'}>forget password?</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Submit
          </Button>
          <Text textAlign={'right'}>
            New User?{''}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </Form>
    </Container>
  );
};

export default Login;
