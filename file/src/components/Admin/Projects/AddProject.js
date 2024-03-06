import React from "react";
import { Box, Button, Group, NativeSelect, TextInput,Textarea } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Radio } from "@mantine/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useAddProjectMutation } from "../../Redux/features/api/userApi";

const AddProject = ({ onCloseModal }) => {
  const schema = Yup.object().shape({
    title: Yup.string().min(3, "Name should have at least 3 letters"),
    description: Yup.string().min(3, "Name should have at least 3 letters"),
    isActive: Yup.string().required("Select Gender pleace"),
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
      isActive: "",
    },
  });

  const [addProject] = useAddProjectMutation();
  const notifyAdd = () =>
    toast.success("Sucessfully Save user!", { autoClose: 1000 });

  const onSubmit = async (data) => {
    // Handle form submission logic, e.g., make API call
    await addProject(data);
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
            label="Title"
            placeholder="Project Title"
            size="sm"
            mt="sm"
            title="Enter Project Title"
            required
            {...register("title")}
          />
          {errors.title && (
            <span style={{ color: "red" }}>** {errors.title.message}</span>
          )}

          <Textarea
            withAsterisk
            label="Description"
            placeholder="Description"
            size="sm"
            mt="md"
            minRows={2}
            maxRows={5}
            required
            title="Enter Project Description"
            {...register("description")}
          />
          {errors.description && (
            <span style={{ color: "red" }}>
              ** {errors.description.message}
            </span>
          )}

          <Radio.Group
            label="Is Active? "
            mt="sm"
            withAsterisk
            required
            title="Select whither Project Is Acrive"
          >
            <Group mt="sm">
              <Radio
                value="true"
                label="Yes"
                {...register("isActive", { required: true })}
              />
              <Radio
                value="false"
                label="No"
                {...register("isActive", { required: true })}
              />
            </Group>
          </Radio.Group>

          {errors.isActive && (
            <span style={{ color: "red" }}>** {errors.isActive.message} </span>
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

export default AddProject;

// import React from "react";
// import {
//   Group,
//   Box,
//   Input,
//   TextInput,
//   Textarea,
//   Button,
//   Radio,
// } from "@mantine/core";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useAddProjectMutation } from "../../Redux/features/api/userApi";

// const AddProject = ({ onCloseModal }) => {
//   const schema = Yup.object().shape({
//     title: Yup.string().min(5, "Name should have at least 5 letters"),
//     description: Yup.string().min(
//       10,
//       "description should have at least 10 letters"
//     ),
//     isAdmin: Yup.string().required("Select pleace it"),
//   });

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       title: "",
//       description: "",
//       isActive: "",
//     },
//   });

//   const [addProject] = useAddProjectMutation();
//   const notifyAdd = () =>
//     toast.success("Sucessfully Save user!", { autoClose: 1000 });

//   const onSubmit = async (data) => {
//     // Handle form submission logic, e.g., make API call
//     // await addProject(data);
//     // notifyAdd();
//     // onCloseModal();
//     console.log(data);
//   };

//   return (
//     <div>
//       <Box maw={340} mx="auto">
//         <h4>Add New Project</h4>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextInput
//             withAsterisk
//             label="Title"
//             placeholder="Position Name"
//             size="md"
//             mt="xl"
//             required
//             {...register("title")}
//           />
//           {errors.title && (
//             <span style={{ fontSize: "14px", color: "red" }}>
//               ** {errors.title.message}
//             </span>
//           )}

//           <Textarea
//             withAsterisk
//             label="Project description"
//             placeholder="Project description "
//             autosize
//             mt={"lg"}
//             minRows={2}
//             maxRows={7}
//             required
//             {...register("description")}
//           />
//           {errors.description && (
//             <span style={{ fontSize: "14px", color: "red" }}>
//               ** {errors.description.message}
//             </span>
//           )}

//           <Radio.Group label="IsActive? " mt="sm" withAsterisk required>
//             <Group mt="sm">
//               <Radio
//                 value="true"
//                 label="Yes"
//                 {...register("isActive", { required: true })}
//               />
//               <Radio
//                 value="false"
//                 label="No"
//                 {...register("isActive", { required: true })}
//               />
//             </Group>
//           </Radio.Group>
//           {errors.isActive && (
//             <span style={{ color: "red" }}>** {errors.isActive.message} </span>
//           )}

//           <Group justify="flex-end" mt="sm">
//             <Button size="sm" type="submit">
//               Save
//             </Button>
//           </Group>
//         </form>
//       </Box>
//     </div>
//   );
// };

// export default AddProject;
