import {
  Button,
  CloseButton,
  Grid,
  Paper,
  Box,
  Input,
  Group,
  Card,
  Divider,
  Image,
  Text,
  Badge,
  Modal,
  NativeSelect,
} from "@mantine/core";

import { IconSearch, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useProjectListsQuery,
  useTaskListsQuery,
} from "../../Redux/features/api/userApi";

const Tasks = () => {
  const [value, setValue] = useState("");

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleCloseModal = () => {
    setOpen1(false);
    setOpen2(false);
  };

  const [taskId, setTaskId] = useState("");
  const handleEdit = (taskid) => {
    setTaskId(taskid);
    setOpen2(true);
  };
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { data: TaskLists, error } = useTaskListsQuery();
  const { data: ProjectLists } = useProjectListsQuery();

  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (index) => {
    // Check if the button is already active
    if (activeButtons.includes(index)) {
      // Remove the button index from the activeButtons array
      setActiveButtons(activeButtons.filter((btnIndex) => btnIndex !== index));
    } else {
      // Add the button index to the activeButtons array
      setActiveButtons([...activeButtons, index]);
    }
  };

  return (
    <div>
      <ToastContainer
        style={{ width: "300px", height: "80px" }}
        position="bottom-right"
        autoClose={1700}
        closeButton={false}
      />
      <Grid>
        <Grid.Col span={3} h={"1000px"}>
          <Box sx={{ height: "100%" }}>
            {/* Left Side Content */}
            <div>
              <Button
                onClick={() => setOpen1(true)}
                w={110}
                mt="md"
                mb="md"
                variant="outline"
              >
                Add Task
              </Button>
            </div>

            <Divider />

            <div className="mt-6">
              <Button
                size="lg"
                w={240}
                m={12}
                className={activeButtons.includes(0) ? "bg-blue-500" : ""}
                variant="default"
                onClick={() => handleButtonClick(0)}
              >
                All Project Tasks
              </Button>

              {ProjectLists?.map((task, index) => (
                <Button
                  key={index}
                  size="lg"
                  w={240}
                  m={8}
                  className={
                    activeButtons.includes(index + 2) ? "bg-blue-500" : ""
                  }
                  variant="default"
                  onClick={() => handleButtonClick(index + 1)}
                >
                  {task.title}
                </Button>
              ))}
            </div>
          </Box>
        </Grid.Col>

        <Grid.Col span={9} h={700}>
          <Box sx={{ height: "100%" }}>
            {/* Taks head */}
            <div className="flex justify-end gap-x-4">
              <div>
                <NativeSelect
                  withAsterisk
                  rightSection={
                    <IconChevronDown style={{ width: 16, height: 16 }} />
                  }
                  data={["Back Drop", "To do", "Doing", "Done"]}
                  mt="md"
                  size="md"
                  title="Filter Task By thire Status"
                />
              </div>
              <div>
                <NativeSelect
                  withAsterisk
                  rightSection={
                    <IconChevronDown style={{ width: 16, height: 16 }} />
                  }
                  data={["Low", "Medile", "High"]}
                  mt="md"
                  size="md"
                  title="Filter Task By thire Priority"
                />
              </div>
              <div>
                <Input
                  size="md"
                  w={280}
                  placeholder="Search ..."
                  leftSection={<IconSearch size={16} />}
                  value={value}
                  onChange={(event) => setValue(event.currentTarget.value)}
                  rightSectionPointerEvents="all"
                  mt="md"
                  mb="sm"
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
            <Divider />

            {/* Task body */}

            <div className="mt-6 ">
              {TaskLists?.map((task) => (
                <div className="mt-6 ">
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                      <div className="text-blue-600/100 ">
                        <Text className="indent-5 text-2xl">
                          {" "}
                          {task.title}{" "}
                        </Text>
                      </div>
                      <div className="flex gap-x-4">
                        <div>
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-sky-200 rounded-md"
                          >
                            Task Status: {task.status}
                          </Button>
                        </div>
                        <div>
                          {" "}
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-sky-600 rounded-md"
                          >
                            Assignee to {task.assigneeTo}
                          </Button>
                        </div>
                      </div>
                    </Group>

                    <article className="text-justify text-wrap indent-3">
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {task.description.slice(0, 100)}
                      </p>
                      <p style={{ whiteSpace: "normal" }}>
                        {task.description.slice(100)}
                      </p>
                    </article>

                    {/* Task footer */}

                    <Group justify="flex-end" mt="md" mb="xs">
                      <div>
                        <Text c="dimmed" fw={300}>
                          Priority: {task.priority}
                        </Text>
                      </div>
                      <div>
                        <Text c="dimmed"> Created At: 2/10/2014 </Text>
                      </div>
                      <div>
                        <Text c="dimmed"> Updated At: 2/19/2024 </Text>
                      </div>
                      <div>
                        <Text
                          className="hover:text-lg text-cyan-600 "
                          onClick={() => handleEdit(task.id)}
                        >
                          {" "}
                          Updated{" "}
                        </Text>
                      </div>
                    </Group>
                  </Card>
                </div>
              ))}
            </div>
          </Box>
        </Grid.Col>
      </Grid>

      <Modal
        opened={open1}
        onClose={handleCloseModal}
        yOffset="11vh"
        size="55%"
      >
        <AddTask onCloseModal={handleCloseModal} />
      </Modal>
      <Modal
        opened={open2}
        onClose={handleCloseModal}
        yOffset="13vh"
        size="55%"
      >
        <UpdateTask taskId={taskId} onCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Tasks;
