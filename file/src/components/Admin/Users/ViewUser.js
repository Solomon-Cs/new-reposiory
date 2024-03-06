import {
  Group,
  Box,
  Input,
  TextInput,
  Textarea,
  Button,
  Table,
} from "@mantine/core";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useGetuserQuery } from "../../Redux/features/api/userApi";

const ViewUser = ({ userId }) => {

  const { data, error } = useGetuserQuery(userId);

  return (
    <div>
      <Box maw={340} mx="auto">
        <h4 className="ml-16">Developer Profile </h4>
        <Table striped highlightOnHover withColumnBorders verticalSpacing="sm">
          <Table.Tr>
            <Table.Th>Name:</Table.Th>
            <Table.Td> {data && data.name} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Email:</Table.Th>
            <Table.Td>{data && data.email} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Phone :</Table.Th>
            <Table.Td>{data && data.phone} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Job Title:</Table.Th>
            <Table.Td>{data && data.jobTitle} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Is Admin:</Table.Th>
            <Table.Td>{data && data.isAdmin} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Is Active:</Table.Th>
            <Table.Td>"No" </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Create At:</Table.Th>
            <Table.Td>11/22/2016 </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Updated At:</Table.Th>
            <Table.Td>11/22/2016  </Table.Td>
          </Table.Tr>
        </Table>
      </Box>
    </div>
  );
};

export default ViewUser;
