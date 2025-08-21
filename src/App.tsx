import { Card, Divider, FloatButton, Layout } from 'antd'
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons';

import './App.css'

const announcements = [
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
  {
    title: 'test',
    description: 'miau',
  },
]

function App() {
  return (
    <>
      <FloatButton
        icon={<PlusOutlined />}
        style={{
          color: "green"
        }}
      />
      <Layout>
        <Layout.Header>Feel Informed!</Layout.Header>
        <Layout.Content>
          {
            announcements.map(
              announcement => (
                <Card title={announcement.title} >
                  <p>
                    {announcement.description}
                  </p>
                </Card>
              )
            )
          }
        </Layout.Content>
      </Layout>
    </>
  )
}

export default App
