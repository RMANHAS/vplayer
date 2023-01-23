import {
  Box,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Grid, GridItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="4" color={'white'}>
      <Grid templateColumns="repeat(5, 1fr)" gap={8}>
        <GridItem colSpan={2} bgColor={'purple.900'} h="8">
          <Heading size="md" textTransform={'uppercase'}>
            subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter The Email HERE"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </button>
          </HStack>
        </GridItem>

        <GridItem w="100%" h="8">
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textAlign={'center'} textTransform={'uppercase'}>
              Video Hub
            </Heading>
            <Text>All rights recived</Text>
          </VStack>
        </GridItem>

        <GridItem colStart={4} colEnd={6} bgColor={'purple.900'} h="7">
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button colorScheme={'white'} variant={'link'}>
              <a target={'blank'} href="https://youtube.com">
                You Tube
              </a>
            </Button>
            <Button colorScheme={'white'} variant={'link'}>
              <a target={'blank'} href="https://instagram.com">
                Instagram
              </a>
            </Button>
            <Button colorScheme={'white'} variant={'link'}>
              <a target={'blank'} href="https://facebook.com">
                Facebook
              </a>
            </Button>
          </VStack>
        </GridItem>
      </Grid>

      {/* <stack direction={['column', 'row']}>
        <HStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading size="md" textTransform={'uppercase'}>
            subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter The Email HERE"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </button>
          </HStack>
        </HStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>all rights recived</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a target={'blank'} href="https://youtube.com">
              You Tube
            </a>
          </Button>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a target={'blank'} href="https://instagram.com">
              Instagram
            </a>
          </Button>
          <Button colorScheme={'whiteAlpha'} variant={'link'}>
            <a target={'blank'} href="https://facebook.com">
              Facebook
            </a>
          </Button>
        </VStack>
      </stack> */}
    </Box>
  );
};

export default Footer;
