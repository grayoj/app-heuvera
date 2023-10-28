import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Heuvera | Your Property Portal of Choice</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='description' content='Your Property Portal of Choice.' />
        <meta name='image' />
        <meta name='robots' content='index, follow' />
        <meta name='heuvera' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <meta name='application-name' content='Heuvera' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Heuvera' />
        <meta name='description' content='Your Property Portal of Choice' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-touch-icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Heuvera' />
        <meta
          property='og:description'
          content='Your Property Portal of Choice.'
        />
        <meta property='og:site_name' content='Heuvera' />
        <meta property='og:url' content='https://app.heuvera.com/' />
        <meta
          property='og:image'
          content='https://infrastructure.heuvera.com/apple-touch-icon.png'
        />
        <script id='theme-script' data-nscript='beforeInteractive' />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
