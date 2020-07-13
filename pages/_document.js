import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Overwatch Hero Counter Picker</title>
          <meta property="og:title" content="Overwatch Hero Counter Picker"/>
          <meta property="og:description" content="A cheatsheet of hero picking in Overwatch. Who's countering who."/>
          <meta property="og:url" content="https://overwatch-counter.vercel.app/" />
          <meta name="twitter:card" content="summary" />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <link rel="icon" href="/favicon.png" type="image/x-icon" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60704805-5"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument