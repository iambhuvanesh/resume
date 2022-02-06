import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReatMarkdown from 'react-markdown';
import Header from '../../components/header';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Blogs({ slug, metadata, content }) {
  console.log('meta',metadata,content)
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-6xl">{metadata?.title}</h1>
        <div className="text-base">{metadata?.date}</div>
        <ReatMarkdown children={content} components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }} />
      </div>

    </div>
  )
}

export function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'markdowns', `${params.blog}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data: metadata, content } = matter(fileContent);
  return {
    props: {
      slug: params.blog,
      metadata:metadata,
      content
    }
  }
}

export function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'markdowns'))
  const paths = files.map(file => ({ params: { blog: file.split('.md')[0] } }))
  console.log(paths)
  return {
    paths,
    fallback: true
  }
}