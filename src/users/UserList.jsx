import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, userDeleted } from "./usersSlice";

function UserList() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(userDeleted({ id }));
  };
  return (
    <div>
      <Container maxW="container.lg">
        <Stack spacing={4} p={6}>
          <Box display="flex" justifyContent="space-between">
            <Heading as="h1" size="md" color="primary.900">
              Redux Crud App with slice
            </Heading>
            <Wrap>
              <Link to="/add-user">
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Add user
                </Button>
              </Link>
              <Button
                rightIcon={<RepeatIcon />}
                colorScheme="teal"
                variant="outline"
                onClick={() => dispatch(fetchUsers())}
              >
                Load User
              </Button>
            </Wrap>
          </Box>
        </Stack>
        <div className="row">
          {loading ? (
            "Loading"
          ) : (
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {entities.map(({ id, name, email }, i) => (
                    <Tr key={i}>
                      <Td>{id}</Td>
                      <Td>{name}</Td>
                      <Td>{email}</Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(id)}
                          right="3"
                        >
                          Delete
                        </Button>
                        <Link to={`/edit-user/${id}`}>
                          <Button colorScheme="blue">Edit</Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            // <table className="u-full-width">
            //   <thead>
            //     <tr>
            //       <th>ID</th>
            //       <th>Name</th>
            //       <th>Email</th>
            //       <th>Actions</th>
            //     </tr>
            //   </thead>
            //   <tbody>
            //     {entities.map(({ id, name, email }, i) => (
            //       <tr key={i}>
            //         <td>{id}</td>
            //         <td>{name}</td>
            //         <td>{email}</td>
            //         <td>
            //           <button onClick={() => handleDelete(id)}>Delete</button>
            //           <Link to={`/edit-user/${id}`}>
            //             <button>Edit</button>
            //           </Link>
            //         </td>
            //       </tr>
            //     ))}
            //   </tbody>
            // </table>
          )}
        </div>
      </Container>
    </div>
  );
}

export default UserList;
