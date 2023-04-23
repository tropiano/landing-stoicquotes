import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Stoic Quotes" />
        <p className="description">
          Inspiration by Stoic Philosophers'
        </p>
          <script async data-uid="357e149466" src="https://tropianhs.ck.page/357e149466/index.js"></script>
      </main>
      <Footer />
    </div>
  )
}
