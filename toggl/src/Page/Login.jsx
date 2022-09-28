import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import LogoButton from '../components/LogoButton'
import { useUserContext } from '../Context/userContext'
import LoginForm from '../components/LoginForm'

const Login = () => {

    const { user } = useUserContext()
    console.log(user)

    return (
        <Box py="8%" bgImage="url('https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg')" bgPosition="top" bgRepeat="no-repeat" backgroundSize="100% 30%" style={{ backdropFilter: "blur(5px)" }} >
            <Heading size="3xl">Log in to your account</Heading>
            <Text fontSize="2xl" my={5} fontWeight="bold" color="gray.500">Let's get tracking!</Text>
            <Box bg="#2C1118" textAlign="left" p={5} py={14} w="45%" margin="auto">
                <Flex justify="space-around">
                    <LogoButton logo="https://img.icons8.com/color/452/google-logo.png" title="Login via google" />
                    <LogoButton logo="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" title="Login via Apple" />
                </Flex>
                <Flex align="center" justify="space-around" mt={8}>
                    <Box borderBottom="2px solid gray" w="42%"></Box>
                    <Text fontWeight="bold"  >OR</Text>
                    <Box borderBottom="2px solid gray" w="42%"></Box>
                </Flex>
                <Box >
                    <LoginForm title="Log in" />
                </Box>
            </Box>
            <Box my="5%">
                <Text>Don't have an account?</Text>
                <Button mt={8} h="48px" type="submit" bg="#E57CD8" borderRadius="3xl" p="5px 40px">
                    Sign up for free
                </Button>
            </Box>
        </Box>
    )
}

export default Login
