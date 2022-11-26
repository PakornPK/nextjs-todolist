import { Container, Row, Col, Text, Input, Button, Table, Spacer,Checkbox  } from '@nextui-org/react';
import { getTodolist, setTodolist } from '../store/todolistState'

export default () => {
  const todo= getTodolist()
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
  ];

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  // setTodo(test)
  // setTodolist()
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
            css={{backgroundColor: "#fff"}}
            // onChange={onChange}
          />
        </Col>
        <Col span={4}>
          <Button 
            id='button-add' 
            css={{
              width:"100%"
            }}
          >Add</Button>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1} justify='center' align='center'>
        <Col span={12}>
          <Table
            id='table-data'
            css={{
              height: "auto",
              minWidth: "100%",
              background: "#fff"
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.key} css={{
                  width: column.key === "task"? "60%": "20%"
                }}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={todo}>
              {(item : any) => (
                <Table.Row key={item.key}>
                  {(col) => col === "isComplete" ? 
                    <Table.Cell>{<Checkbox defaultSelected={item[col]} />}</Table.Cell> : 
                    <Table.Cell>{item[col]}</Table.Cell>}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Container >
  )
}
