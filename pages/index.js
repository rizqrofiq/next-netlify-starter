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
        <Header title="Selamat Datang" />
        <p className="description">
          Situs ini masih dalam tahap pengembangan😊🙌
        </p>
      </main>

      <Footer />
    </div>
  )
}
