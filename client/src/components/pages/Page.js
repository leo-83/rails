const Page = ({ id, title, body, author, created_at }) => (
    <>
      <h1>{title}</h1>
      <h3>Author: {author}</h3>
      <h3>Date: {created_at}</h3>
      <p>{body}</p>
    </>
  )
  
  export default Page;