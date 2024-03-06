import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import {
  Button,
  Card,
  CloseButton,
  Group,
  Input,
  NativeSelect,
  Text,
} from "@mantine/core";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";

const DevloperTask = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Navbar />
      <div className="flex justify-end gap-x-4 mr-24">
        <div>
          <NativeSelect
            withAsterisk
            rightSection={<IconChevronDown style={{ width: 16, height: 16 }} />}
            data={["Low", "Medile", "High"]}
            mt="md"
            size="md"
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
            pr="md"
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
      <div className="flex justify-evenly pl-20 pr-20 gap-8">
        <div className="mt-6 ">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <div>
                <Text fw={500}>Task Title </Text>
              </div>
              <div className="flex gap-x-4">
                <div>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-sky-200 rounded-md"
                  >
                    Task Status: complated
                  </Button>
                </div>
                <div>
                  {" "}
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-sky-600 rounded-md"
                  >
                    Change Status
                  </Button>
                </div>
              </div>
            </Group>

            <Text className="text-justify " size="sm" c="dimmed">
              This is Task Description With Fjord Tours you can explore more of
              the magical fjord landscapes with tours and activities. of the
              magical fjord landscapes with tours and activities.
            </Text>

            {/* Task footer */}
            <Group justify="flex-end" mt="md" mb="xs">
              <div>
                <Text c="dimmed" fw={300}>
                  Priority: High{" "}
                </Text>
              </div>
              <div>
                <Text c="dimmed"> Created At: 2/10/2014 </Text>
              </div>
              <div>
                <Text c="dimmed"> Updated At: 2/19/2024 </Text>
              </div>
            </Group>
          </Card>
        </div>
        <div className="mt-6 ">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mt="md" mb="xs">
              <div>
                <Text fw={500}>Task Title </Text>
              </div>
              <div className="flex gap-x-4">
                <div>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-sky-200 rounded-md"
                  >
                    Task Status: complated
                  </Button>
                </div>
                <div>
                  {" "}
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-sky-600 rounded-md"
                  >
                    Assignee to Dev. Solomon
                  </Button>
                </div>
              </div>
            </Group>

            <Text className="text-justify " size="sm" c="dimmed">
              This is Task Description With Fjord Tours you can explore more of
              the magical fjord landscapes with tours and activities. of the
              magical fjord landscapes with tours and activities.
            </Text>

            {/* Task footer */}
            <Group justify="flex-end" mt="md" mb="xs">
              <div>
                <Text c="dimmed" fw={300}>
                  Priority: High{" "}
                </Text>
              </div>
              <div>
                <Text c="dimmed"> Created At: 2/10/2014 </Text>
              </div>
              <div>
                <Text c="dimmed"> Updated At: 2/19/2024 </Text>
              </div>
            </Group>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DevloperTask;
