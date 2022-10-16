import type { NextPage } from 'next'
import { Title, Text, Box, Group, TextInput, Button, Grid } from '@mantine/core'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()
  const [id, setId] = useState("")
  const [scrapperName, setScrapperName] = useState("")

  const handleAccess = () => {
    if (scrapperName) {
      router.push(`/articles/${id}?scrapperName=${scrapperName}`)
    }
    else {
      router.push(`/articles/${id}`)
    }
  }

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto" my="xl">
      <Title order={2}>Home</Title>
      <Text>Enter the id and scraper name of an article to access it.</Text>
      <Grid mt="xl">
        <Grid.Col sm={6} xs={12}>
          <TextInput
            sx={{ width: "100%" }}
            withAsterisk
            label="ID"
            placeholder="Article ID..."
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </Grid.Col>
        <Grid.Col sm={6} xs={12}>
          <TextInput
            label="Scrapper name"
            placeholder="Article scrapper name..."
            value={scrapperName}
            onChange={e => setScrapperName(e.target.value)}
          />
        </Grid.Col>
      </Grid>
      <Group mt="md" position='right'>
        <Button onClick={handleAccess} disabled={!id}>Access</Button>
      </Group>
    </Box>
  )
}

export default Home
