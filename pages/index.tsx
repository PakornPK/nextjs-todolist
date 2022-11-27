import {
  Container,
  Row,
  Col,
  Text,
  Input,
  Button,
  Table,
  Spacer,
  Checkbox,
  FormElement,
  Tooltip,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { getTodolist, setTodolist } from '../store/todolistState'
import { IconButton } from '../Components/IconButton'
import { EditIcon } from '../Components/EditIcon'
import { DeleteIcon } from '../Components/DeleteIcon'

export default () => {
  const [task, setTask] = useState('')
  const [id, setId] = useState(0)
  const todo = getTodolist()
  const setNewTask = setTodolist()
  const columns = [
    {
      key: "id",
      label: "NO",
    },
    {
      key: "task",
      label: "TASK",
    },
    {
      key: "isComplete",
      label: "STATUS",
    },
    {
      key: "actions",
      label: "ACTIONS",
    }
  ];
  const handleChange = (e: React.ChangeEvent<FormElement>): void => {
    setTask(e.currentTarget.value)
  }

  const handlePress = () => {
    const newTask: ITodolists = {
      key: id.toString(),
      id: id + 1,
      task: task,
      isComplete: false
    }

    setNewTask((oldTodoList: ITodolists[]) => [...oldTodoList, newTask]);
    setTask('')
    setId(newTask.id)
  }


  return (
    <Container gap={0}>
      <Row gap={1} justify='center' align='center'>
        <Text size={45} css={{ fontWeight: 800 }}>to-do-list</Text>
      </Row>
      <Row gap={1} justify='center' align='center'>
        <Col>
          <Input
            id='input-task'
            bordered
            width='100%'
            css={{ backgroundColor: "#fff" }}
            value={task}
            onChange={handleChange}
          />
        </Col>
        <Col span={4}>
          <Button
            id='button-add'
            css={{
              width: "100%"
            }}
            onClick={handlePress}
          >Add</Button>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1} justify='center' align='center'>
        <Col span={12}>
          <Table
            css={{
              height: "auto",
              minWidth: "100%",
              background: "#fff"
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column 
                  key={column.key}
                  hideHeader={column.key === "actions"}
                  align={column.key === "actions" ? "center" : "start"} 
                  css={{
                    width: column.key === "task" ? "70%" : "10%"
                  }}>
                  {column.label}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body items={todo}>
              {(item: any) => (
                <Table.Row>
                  <Table.Cell>{item['id']}</Table.Cell>
                  <Table.Cell>{item['task']}</Table.Cell>
                  <Table.Cell>{<Checkbox defaultSelected={item["isComplete"]} />}</Table.Cell>
                  <Table.Cell>
                    <Row justify="center" align="center">
                      <Col css={{ d: "flex" }}>
                        <Tooltip content="Edit Task">
                          <IconButton onClick={() => console.log("Edit task", item?.id)}>
                            <EditIcon size={20} fill="#979797" />
                          </IconButton>
                        </Tooltip>
                      </Col>
                      <Col css={{ d: "flex" }}>
                        <Tooltip
                          content="Delete Task"
                          color="error"
                          onClick={() => console.log("Delete task", item?.id)}
                        >
                          <IconButton>
                            <DeleteIcon size={20} fill="#FF0080" />
                          </IconButton>
                        </Tooltip>
                      </Col>
                    </Row>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Container >
  )
}
