// import {
//   Button,
//   Group,
//   ModalBody,
//   Paper,
//   TextInput,
//   Textarea,
//   Box,
// } from "@mantine/core";
// import React from "react";

// const UpdateProject = () => {
//   return (
//     <div>
//       <Box maw={340} mx="auto">
//         <h4>Edit Project</h4>
//         <form>
//           <TextInput
//             withAsterisk
//             label="Title"
//             placeholder="Position Name"
//             size="md"
//             mt="lg"
//             required
//           />

//           <TextInput
//             withAsterisk
//             label="Description"
//             placeholder="Position Description"
//             size="md"
//             mt="lg"
//             required
//           />
//           <Textarea
//             label="Autosize with 4 rows max"
//             placeholder="Autosize with 4 rows max"
//             autosize
//             minRows={2}
//             maxRows={5}
//           />

//           <Group justify="flex-end" mt="xl">
//             <Button type="submit">Save</Button>
//           </Group>
//         </form>
//       </Box>
//     </div>
//   );
// };

// export default UpdateProject;

import {
  Box,
  Button,
  Group,
  NativeSelect,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Radio } from "@mantine/core";

import React, { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { set } from "react-hook-form";
import {
  useGetuserQuery,
  useProjectListQuery,
  useUpdateProjectMutation,
} from "../../Redux/features/api/userApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProject = ({ projectId, onCloseModal }) => {
  const { data, error } = useProjectListQuery(projectId);
  const [updateProject] = useUpdateProjectMutation(projectId);
  const [editmode, setEditmode] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    isAdmin: false,
  });

  const { title, description, isAdmin } = formValue;
  const notifyUpdate = () =>
    toast.success("Sucessfully Updated!", { autoClose: 1000 });

  useEffect(() => {
    if (error && projectId) {
      console.log("error has been");
    }
  }, [error]);

  useEffect(() => {
    if (projectId) {
      setEditmode(true);
      if (data) {
        setFormValue({ ...data });
      }
    } else {
      setEditmode(false);
      setFormValue({});
    }
  }, [projectId, data]);

  const handleInputValue = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject(formValue);
    notifyUpdate();
    onCloseModal();
    console.log(formValue);

  };

  return (
    <div>
      <Box maw={340} mx="auto">
        <h4 className="mt-0">Update Project </h4>
        <form onSubmit={handleSubmit}>
          <TextInput
            withAsterisk
            label="Title"
            placeholder="Project Title"
            size="sm"
            mt="sm"
            name="title"
            value={title}
            onChange={handleInputValue}
            required
          />
          <Textarea
            withAsterisk
            label="Description"
            placeholder="description"
            size="sm"
            mt="md"
            minRows={2}
            maxRows={5}
            name="description"
            value={description}
            onChange={handleInputValue}
            required
          />

          <Radio.Group
            label="Is Active?"
            mt="sm"
            withAsterisk
            name="isAdmin"
            value={isAdmin}
          >
            <Group mt="xs">
              <Radio value="true" label="Yes" onChange={handleInputValue} />
              <Radio value="false" label="No" onChange={handleInputValue} />
            </Group>
          </Radio.Group>

          <Group justify="flex-end" mt="0px">
            <Button type="submit">Save</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default UpdateProject;
