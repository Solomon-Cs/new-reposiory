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
import { useProjectListQuery } from "../../Redux/features/api/userApi";

const Detail = ({projectId}) => {

const {data , error } = useProjectListQuery(projectId);

  return (
    <div>
      <Box maw={340} mx="auto">
        <h4>Project Detail Explanation</h4>
        <Table striped highlightOnHover withColumnBorders verticalSpacing="lg">
          <Table.Tr>
            <Table.Th>Project Title:</Table.Th>
            <Table.Td> {data && data.title} </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Project Discription:</Table.Th>
            <Table.Td>{data && data.description}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Is Active:</Table.Th>
            <Table.Td>{data && data.isActive}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Create At:</Table.Th>
            <Table.Td>{data && data.createdAt}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Updated At:</Table.Th>
            <Table.Td>{data && data.updatedAt}</Table.Td>
          </Table.Tr>
        </Table>
      </Box>
    </div>
  );
};

export default Detail;
