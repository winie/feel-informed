import { Card, Layout } from 'antd'

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
  )
}

export default App
