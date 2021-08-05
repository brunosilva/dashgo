// packages
import React from "react";
import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Input } from "../components/Form/Input";

type SigInFormData = {
  email: string;
  password: string;
}

const signIngFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),

})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signIngFormSchema)
  });


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
            {...register("email")} 
            //{...register("email", { required: 'E-mail obrigatório' })}  - validation without 'yup'
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            error={errors.password} 
            {...register("password")} 
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
