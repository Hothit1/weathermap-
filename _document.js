import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.AIzaSyCKmk3ynV5V8MBEAeukiXC1MrfkTAYFdew}&libraries=places`}></script>
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