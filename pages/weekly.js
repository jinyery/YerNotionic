import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import WeeklyHero from '@/components/Hero/Weekly'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyWeekly: true })

  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'weekly')

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  return {
    props: {
      posts,
      blockMap
    },
    revalidate: 1
  }
}

const Weekly = ({ posts, blockMap }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <Container title={t.NAV.WEEKLY + ' - ' + BLOG.title}>
      <WeeklyHero blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default Weekly
