export default function filterPublishedPosts({
  posts,
  onlyWeekly,
  onlyPost,
  onlyHidden
}) {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      onlyWeekly
        ? post?.type?.[0] === 'Weekly'
        : post
    )
    .filter((post) =>
      onlyPost
        ? post?.type?.[0] === 'Post'
        : post
    )
    .filter((post) =>
      onlyHidden
        ? post?.type?.[0] === 'Hidden'
        : post?.type?.[0] !== 'Hidden'
    )
    .filter((post) => {
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        post.date <= new Date()
      )
    })
}
