import {
  Box,
  Button,
  Group,
  NativeSelect,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  useAddTaskMutation,
  useGetuserListQuery,
  useProjectListsQuery,
} from "../../Redux/features/api/userApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from "@mantine/core";

const AddTask = ({ onCloseModal }) => {
  const { data: ProjectList, error } = useProjectListsQuery();
  const { data: userList } = useGetuserListQuery();
  const [addTask] = useAddTaskMutation();

  const schema = Yup.object().shape({
    title: Yup.string().min(5, "Name should have at least 5 letters"),
    description: Yup.string().min(
      10,
      "description should have at least 10 letters"
    ),
    projectName: Yup.string().required("Project Name should be selected"),
    assigneeTo: Yup.string().required("You should be selecte Assignee "),
    priority: Yup.string().required("Name should be selected"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      projectName: "",
      assigneeTo: "",
      priority: "",
    },
  });

  const notifyAdd = () =>
    toast.success("Sucessfully add Task !", { autoClose: 1000 });

  const onSubmit = async (data) => {
    await addTask(data);
    notifyAdd();
    onCloseModal();
    console.log(data);
  };

  return (
    <div>
      <Box maw={550} mx="auto">
        <h4>Add New Task</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Title"
                placeholder="Position Name"
                title="Enter Task Title"
                size="sm"
                mt="lg"
                required
                {...register("title")}
              />
              {errors.title && (
                <span style={{ color: "red" }}>** {errors.title.message}</span>
              )}
            </Grid.Col>
            <Grid.Col span={6}>
              <NativeSelect
                withAsterisk
                rightSection={
                  <IconChevronDown style={{ width: 16, height: 16 }} />
                }
                label="Project Title"
                title="Select Project id that task is exist"
                data={ProjectList?.map((project) => project.title)}
                mt="md"
                {...register("projectName")}
              />
            </Grid.Col>
          </Grid>

          <Textarea
            withAsterisk
            label="Description"
            placeholder="Task Description"
            autosize
            mt="md"
            minRows={2}
            maxRows={5}
            required
            title="Enter Task Description"
            {...register("description")}
          />
          {errors.description && (
            <span style={{ color: "red" }}>
              ** {errors.description.message}
            </span>
          )}

          <Grid>
            <Grid.Col span={6}>
              <NativeSelect
                withAsterisk
                rightSection={
                  <IconChevronDown style={{ width: 16, height: 16 }} />
                }
                label="Assignee To"
                title="Select Task Worker"
                data={userList?.map((user) => user.name)}
                mt="md"
                {...register("assigneeTo")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NativeSelect
                rightSection={
                  <IconChevronDown style={{ width: 16, height: 16 }} />
                }
                label="Priority"
                title="Select Task priority"
                data={["Low", "Medile", "High"]}
                mt="md"
                {...register("priority")}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={6}>
              <NativeSelect
                rightSection={
                  <IconChevronDown style={{ width: 16, height: 16 }} />
                }
                label="Status"
                title="Select Task Status"
                data={["Back Drop", "On doing", "Complited"]}
                mt="md"
                {...register("status")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateTimePicker
                clearable
                mt="md"
                defaultValue={new Date()}
                dropdownType="modal"
                label="Pick date and time"
                placeholder="Pick date and time"
              />
            </Grid.Col>
          </Grid>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Save</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default AddTask;
