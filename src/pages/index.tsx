import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from "../components/Form/Input";

type SigInFormData = {
  email: string;
  password: string;
}
export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignIn: SubmitHandler<SigInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  return (
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            error={errors.email} 
            {...register("email", { required: 'E-mail obrigatório' })} 
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            error={errors.password} 
            {...register("password", { required: 'Senha obrigatório' })} 
          />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg" 
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
