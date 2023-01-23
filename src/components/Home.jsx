import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const handlingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box h="100vh" w="full">
          <img src={img1} h={'full'} w="full" objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.500'} color="white" {...handlingOption}>
            Watch the Future
          </Heading>
        </Box>

        <Box h="100vh" w="full">
          <img src={img2} h={'full'} w="full" objectFit={'cover'} />
          <Heading bgColor={'whiteAlpha.600'} color="Black" {...handlingOption}>
            Future is Gaming
          </Heading>
        </Box>

        <Box h="100vh" w="full">
          <img src={img3} h={'full'} w="full" objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.900'} color="white" {...handlingOption}>
            Gaming in Console
          </Heading>
        </Box>

        <Box h="100vh" w="full">
          <img src={img4} h={'full'} w="full" objectFit={'cover'} />
          <Heading bgColor={'blackAlpha.700'} color="white" {...handlingOption}>
            Beautiful Night
          </Heading>
        </Box>
      </Carousel>
      ;
      <Container minH={'100vh'} p="16" maxW={'sm'}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <img src={img5} h={['40', '400']} filter={'hue-rotate(-130degree)'} />
          <text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['2', '12']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cum exercitationem porro atque deleniti eveniet quia
            dolorum? Earum cumque placeat laudantium nemo repellendus in,
            accusantium ratione. Iure obcaecati eveniet rem.
          </text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
