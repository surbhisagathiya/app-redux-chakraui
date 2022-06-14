import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdded } from "./usersSlice";

function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleFile = (e) => {
    const [file] = e.target.files;
    setFile(URL.createObjectURL(file));
    console.log(file.name);
  };
  const handleDate = (e) => setDate(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    console.log(name, email, gender, file, date);
    if (name && email && gender && file && date) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
          gender,
          file,
          date,
        })
      );
      setError(null);
      toast({
        title: "User created",
        status: "success",
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      navigate("/userlist");
    } else {
      setError("Fill in All Field");
    }
    setName("");
    setEmail("");
    setGender("");
    setFile("");
    setDate("");
  };

  return (
    <Container maxW="container.sm" boxShadow="lg" mt={10} p={8} rounded="md">
      <IconButton
        variant="link"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        onClick={() => navigate(-1)}
        _focus={{ boxShadow: "none" }}
        icon={<ChevronLeftIcon />}
      />
      <Heading as="h3" size="lg" color="green" align="center">
        Add User
      </Heading>
      <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              onChange={handleName}
              value={name}
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your Email"
              onChange={handleEmail}
              value={email}
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="Male" checked={gender == "Male"}>
                  Male
                </Radio>
                <Radio value="Female" checked={gender == "Female"}>
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>File Upload</FormLabel>
            <Input
              type="file"
              placeholder="Select File"
              onChange={handleFile}
              // value={" "}
            />
          </FormControl>

          <FormControl>
            <FormLabel>BirthDate</FormLabel>
            <Input
              type="date"
              placeholder="select date"
              onChange={handleDate}
              value={date}
            />
          </FormControl>

          {error && error}
          <ButtonGroup
            variant="outline"
            spacing="6"
            display="block"
            align="right"
            my={4}
          >
            <Button colorScheme="blue" onClick={handleClick}>
              Save
            </Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </form>
      </Box>
    </Container>
  );
}

export default AddUser;
