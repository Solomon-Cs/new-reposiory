import { useGetuserListQuery } from "../../Redux/features/api/userApi";
import {
  Button,
  CloseButton,
  Card,
  Divider,
  Grid,
  Input,
  Modal,
  Table,
  Group,
} from "@mantine/core";
import React, { useState } from "react";
import { IconEdit, IconSearch } from "@tabler/icons-react";
import DeleteIcon from "@mui/icons-material/ViewList";
import ViewListIcon from "@mui/icons-material/ViewList";
import { IconLock, IconLockOpen } from "@tabler/icons-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";

const Users = () => {
  const [value, setValue] = useState("");

  const [userId, setUserId] = useState("");
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
  } = useGetuserListQuery();

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

  const handleView = (userId) => {
    setUserId(userId);
    setOpen2(true);
  };

  const handleEdit = (userId) => {
    setUserId(userId);
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
            Add Developer
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
                <Table.Th>Developer Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Is Admim</Table.Th>
                <Table.Th>Job Title</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {developerList?.map((user) => (
                <Table.Tr key={user.id}>
                  <Table.Td>{no++}</Table.Td>
                  <Table.Td>{user.name}</Table.Td>
                  <Table.Td>{user.email}</Table.Td>
                  <Table.Td>{user.isAdmin}</Table.Td>
                  <Table.Td>{user.jobTitle}</Table.Td>
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

        <Pagination total={10} />
        
      </Card>

      <Modal
        opened={open1}
        onClose={handleCloseModal1}
        yOffset="11vh"
      >
        <AddUser onCloseModal={handleCloseModal1} />
      </Modal>

      <Modal opened={open2} onClose={handleCloseModal2} yOffset="13vh">
        <ViewUser userId={userId} onCloseModal={handleCloseModal2} />
      </Modal>

      <Modal opened={open3} onClose={handleCloseModal3} yOffset="12vh">
        <UpdateUser userId={userId} onCloseModal={handleCloseModal3} />
      </Modal>
    </div>
  );
};

export default Users;
