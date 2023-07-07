import BLOG from '@/blog.config'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const Utterances = ({ layout }) => {
  const { theme, setTheme } = useTheme()
  const preferred_theme = theme === 'light'
   ? 'github-light' : 'github-dark'
  useEffect(() => {
    const utterances_theme =
      BLOG.appearance === 'auto'
        ? preferred_theme
        : BLOG.appearance === 'light'
          ? 'github-light'
          : 'github-dark'
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    script.setAttribute('repo', BLOG.comment.utterancesConfig.repo)
    script.setAttribute('issue-term', BLOG.comment.utterancesConfig.issue_term)
    script.setAttribute('theme', utterances_theme)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return (
    <>
      <div
        id='comments'
        className={layout && layout === 'fullWidth' ? '' : 'md:-ml-16'}
      >
      </div>
    </>
  )
}

export default Utterances
