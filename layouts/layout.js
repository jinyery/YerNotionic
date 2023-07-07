import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import { motion } from 'framer-motion'

import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Aside from '@/components/Post/Aside'
import Comments from '@/components/Post/Comments'
import PostFooter from '@/components/Post/PostFooter'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Layout = ({ blockMap, frontMatter, fullWidth = false, subPage = false }) => {
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  const pageTitle = getPageTitle(blockMap)
  useEffect(() => {
    if (frontMatter.title !== pageTitle) {
      setShowSubPageTitle(true)
    }
  }, [frontMatter, pageTitle, subPage])

  const { locale } = useRouter()
  const t = lang[locale]
  const SUPER_PAGES = ['PROJECTS', 'ABOUT', 'BOOKS', 'FRINEDS']
  function firstTitle() {
    if (t.NAV.hasOwnProperty(`${frontMatter.title}`.toUpperCase())) {
      const tmpTitle = t.NAV[`${frontMatter.title}`.toUpperCase()]
      return `${tmpTitle}${frontMatter.title === pageTitle ? '' : ' | ' + pageTitle}`
    }
    return `${frontMatter.title}${frontMatter.title === pageTitle ? '' : ' | ' + pageTitle}`
  }

  return (
    <Container
      title={firstTitle() + ' - ' + BLOG.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
      fullWidth={fullWidth}
    >
      <motion.div className='flex flex-row'>
        <Content
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
        />
        <Aside
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
        />
      </motion.div>
      <PostFooter />
      <Comments />
    </Container>
  )
}

export default Layout
