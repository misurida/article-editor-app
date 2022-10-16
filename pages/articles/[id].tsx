import type { NextPage } from 'next'
import { Text, Box, Paper, Breadcrumbs, Anchor, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Article } from '../../utils/types'
import { fakeArticle } from '../../utils/globals'
import Link from 'next/link'

const Home: NextPage = () => {

  const router = useRouter()
  const [article, setArticle] = useState<Article | undefined>()

  useEffect(() => {
    if (router.query.id) {
      const url = router.query.scrapperName ?
        `http://localhost:3000/api/articles/${router.query.id}?scrapperName=${router.query.scrapperName}` :
        `http://localhost:3000/api/articles/${router.query.id}`
      if (false) {
        fetch(url)
          .then(r => r.json())
          .then(data => setArticle(data));
      }
      else {
        setArticle(fakeArticle)
      }
    }
  }, [router.query])

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto" my="xl">
      <Breadcrumbs mb="md">
        <Text><Link href="/">Home</Link></Text>
        <Text>Article</Text>
      </Breadcrumbs>
      <Paper withBorder p="md">
        <Title order={2} mb="md">{article?.std?.title}</Title>
        <Text>{article?.std?.body}</Text>
      </Paper>
    </Box>
  )
}

export default Home
