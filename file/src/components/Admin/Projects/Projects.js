import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  Button,
  Modal,
  CloseButton,
  Input,
  Paper,
  Table,
  Card,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { randomId } from "@mantine/hooks";
import { Pagination, Text } from "@mantine/core";
import AddProject from "./AddProject";

import { IconEdit, IconSearch } from "@tabler/icons-react";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewListIcon from "@mui/icons-material/ViewList";
import { IconLock, IconLockOpen } from "@tabler/icons-react";
import Detail from "./Detail";
import UpdateProject from "./UpdateProject";
import { useProjectListsQuery } from "../../Redux/features/api/userApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const elements = [
  {
    projectName: "Project 1",
    description: "This project 1 description",
    isActive: "No",
  },
  {
    projectName: "Project 2",
    description: "This project 2 description",
    isActive: "No",
  },
  {
    projectName: "Project 3",
    description: "This project 3 description",
    isActive: "No",
  },
  {
    projectName: "Project 4",
    description: "This project 4 description",
    isActive: "No",
  },
];

const Projects = () => {
  const [value, setValue] = useState("");

  const [projectId, setProjectId] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleCloseModal1 = () => {
    setOpen1(false);
  };
  const handleCloseModal2 = () => {
    setOpen2(false);
  };
  const handleCloseModal3 = () => {
    setOpen3(false);
  };

  const [isActive, setIsActive] = useState(false);

  // To display the user form json server
  const {
    data: developerList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useProjectListsQuery();

  let content;
  let content2;
  if (isLoading) {
    content = <h1>Loading ...</h1>;
  } else if (isSuccess) {
    content = JSON.stringify(developerList);
  } else if (isError) {
    content = <h1>Error ....</h1>;
  }

  let no = 1;

  const handleView = (projectId) => {
    setProjectId(projectId);
    setOpen2(true);
  };

  const handleEdit = (projectId) => {
    setProjectId(projectId);
    setOpen3(true);
  };

  return (
    <div>
      <ToastContainer
        style={{ width: "300px", height: "80px" }}
        position="bottom-right"
        autoClose={1700}
        closeButton={false}
      />
      <div className="flex justify-between mb-3">
        <div>
          <Button
            variant="outline"
            className="ml-16"
            mt="md"
            size="md"
            onClick={() => setOpen1(true)}
          >
            Add Project
          </Button>
        </div>
        <div className="flex justify-end gap-x-4">
          <div>
            <Button variant="default" mt="md" size="md">
              Not Assinee
            </Button>
          </div>
          <div>
            <Input
              size="md"
              placeholder="Search ..."
              leftSection={<IconSearch size={16} />}
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              mt="md"
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setValue("")}
                  style={{ display: value ? undefined : "none" }}
                />
              }
            />
          </div>
        </div>
      </div>
      <Divider />

      <Card shadow="sm" padding="lg" radius="md" mt="md" h={500} withBorder>
        <div className="flex justify-center">
          <Table
            className="table-auto"
            style={{
              width: "1200px",
              margin: "10 auto",
              borderRadius: "40px",
              paddingTop: "20px",
            }}
            stickyHeaderOffset={60}
            horizontalSpacing="sm"
            verticalSpacing="sm"
            borderRadius="50px"
            mt="md"
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>NO. </Table.Th>
                <Table.Th>Project Title</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Is Active</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {developerList?.map((user) => (
                <Table.Tr key={user.id}>
                  <Table.Td>{no++}</Table.Td>
                  <Table.Td>{user.title}</Table.Td>
                  <Table.Td>{user.description}</Table.Td>
                  <Table.Td>{user.isActive}</Table.Td>
                  <Table.Td>
                    <Group justify="center">
                      <Button
                        onClick={() => handleView(user.id)}
                        variant="outline"
                      >
                        <ViewListIcon />
                      </Button>
                      <Button
                        onClick={() => handleEdit(user.id)}
                        variant="outline"
                      >
                        <IconEdit />
                      </Button>
                      <Button
                        onClick={() => setIsActive(!isActive)}
                        className=""
                        variant="outline"
                      >
                        {isActive ? <IconLockOpen /> : <IconLock />}
                      </Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </Card>

      <Modal
        opened={open1}
        onClose={handleCloseModal1}
        yOffset="12vh"
        // xOffset= "0hv"
      >
        <AddProject projectId={projectId} onCloseModal={handleCloseModal1} />
      </Modal>

      <Modal opened={open2} onClose={handleCloseModal2} yOffset="13vh">
        <Detail projectId={projectId} onCloseModal={handleCloseModal3} />
      </Modal>
      <Modal opened={open3} onClose={handleCloseModal3} yOffset="13vh">
        <UpdateProject projectId={projectId} onCloseModal={handleCloseModal3} />
      </Modal>
    </div>
  );
};

export default Projects;
