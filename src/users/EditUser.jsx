import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./usersSlice";
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
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [file, setFile] = useState(user.file);
  const [date, setDate] = useState(user.date);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleFile = (e) => setFile(e.target.files[0]);
  const handleDate = (e) => setDate(e.target.value);
  const handleClick = () => {
    if (name && email && gender && file && date) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
          gender,
          file,
          date,
        })
      );

      setError(null);
      navigate("/userlist");
    } else {
      setError("Fill in all fields");
    }
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
        Edit user
      </Heading>
      <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Name"
              onChange={handleName}
              value={name}
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@mailbox.com"
              id="emailInput"
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
              // placeholder="Select File"
              onChange={handleFile}
              // value={file}
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
