import React from "react";
import { Box, Button, Group, NativeSelect, TextInput } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Radio } from "@mantine/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAddUserMutation } from "../../Redux/features/api/userApi";
import axios from "axios";

const AddUser = ({ onCloseModal }) => {
  const schema = Yup.object().shape({
    name: Yup.string().min(3, "Name should have at least 3 letters"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().matches(/^(09|07)\d{8}$/, "Invalid phone number"),
    jobTitle: Yup.string().required("Job Title is required"),
    gender: Yup.string().required("Select Gender pleace"),
    password: Yup.string().min(3,"pleace inter atlice 3 character"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      gender: "",
    },
  });

  const [addUser] = useAddUserMutation();
  const notifyAdd = () =>
    toast.success("Sucessfully Save user!", { autoClose: 1000 });

  const onSubmit = async (data) => {
    await addUser(data);
    notifyAdd();
    onCloseModal();
    console.log(data);
  };

  return (
    <div>
      <Box maw={340} mx="auto">
        <h4 className="mt-0">Add New Developer</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Developer Name"
            size="sm"
            mt="sm"
            required
            {...register("name")}
          />
          {errors.name && (
            <span style={{ color: "red" }}>** {errors.name.message}</span>
          )}

          <TextInput
            withAsterisk
            label="Email"
            placeholder="Email"
            size="sm"
            mt="sm"
            required
            {...register("email")}
          />
          {errors.email && (
            <span style={{ color: "red" }}>** {errors.email.message}</span>
          )}

          <TextInput
            withAsterisk
            label="Phone Number"
            placeholder="Phone Number"
            size="sm"
            mt="sm"
            required
            {...register("phone")}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>** {errors.phone.message}</span>
          )}

          <Radio.Group label="Gender? " mt="sm" withAsterisk required>
            <Group mt="sm">
              <Radio
                value="Male"
                label="Male"
                {...register("gender", { required: true })}
              />
              <Radio
                value="Female"
                label="Female"
                {...register("gender", { required: true })}
              />
            </Group>
          </Radio.Group>

          {errors.gender && (
            <span style={{ color: "red" }}>** {errors.gender.message} </span>
          )}

          <NativeSelect
            mt="sm"
            label="Job Title"
            rightSection={<IconChevronDown style={{ width: 16, height: 16 }} />}
            required
            {...register("jobTitle")}
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </NativeSelect>
          {errors.jobTitle && (
            <span style={{ color: "red" }}>** {errors.jobTitle.message} </span>
          )}

          <TextInput
            withAsterisk
            label="Password"
            placeholder="Password"
            type="password"
            size="sm"
            mt="sm"
            required
            {...register("password")}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>** {errors.phone.message}</span>
          )}

          <Group justify="flex-end" mt="sm">
            <Button size="sm" type="submit">
              Save
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default AddUser;
