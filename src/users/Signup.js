import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(useSelector);

  const onSubmit = (data) => {
    //   dispatch(signupUser(data))
    console.log(data);
  };

  useEffect(() => {
    return () => {
    //   dispatch(cleanState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
    //   dispatch(cleanState());
      navigate("/");
    }
    if (isError) {
      Toast.error(errorMessage);
    //   dispatch(cleanState);
    }
  }, [isSuccess, isError]);

  return (
    <Container>
      <Heading as="h2">Sign Up to your account</Heading>
      <Box>
        <form y="6" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Emial</FormLabel>
          </FormControl>
        </form>
      </Box>
      <Box color="gray.500" mt="6" display="flex" justifyContent="center">
        <Link to="/login">Login</Link>
      </Box>
    </Container>
  );
};

export default Signup;
