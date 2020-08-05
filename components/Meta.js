const Meta = (props) => (
  <>
    {/* Must  */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
    />
    <meta name="keywords" content="Keywords" />
    <title>Jay Fallon - Strategy, Design & Development</title>

    {/* Progressive Web App: Match the width of app’s content with width of viewport for mobile devices */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Android   */}
    <meta name="theme-color" content="red" />
    <meta name="mobile-web-app-capable" content="yes" />

    {/* iOS  */}
    <meta name="apple-mobile-web-app-title" content="Application Title" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />

    {/* Windows   */}
    <meta name="msapplication-navbutton-color" content="red" />
    <meta name="msapplication-TileColor" content="red" />
    <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
    <meta name="msapplication-config" content="browserconfig.xml" />

    {/* Pinned Sites   */}
    <meta name="application-name" content="Application Name" />
    <meta name="msapplication-tooltip" content="Tooltip Text" />
    <meta name="msapplication-starturl" content="/" />

    {/* Tap highlighting   */}
    <meta name="msapplication-tap-highlight" content="no" />

    {/* UC Mobile Browser   */}
    <meta name="full-screen" content="yes" />
    <meta name="browsermode" content="application" />

    {/* Disable night mode for this page   */}
    <meta name="nightmode" content="enable/disable" />

    {/* Fitscreen   */}
    {/* <meta name="viewport" content="uc-fitscreen=yes" /> */}

    {/* Layout mode  */}
    <meta name="layoutmode" content="fitscreen/standard" />

    {/* imagemode - show image even in text only mode   */}
    <meta name="imagemode" content="force" />

    {/* SEO: App description for search-engine optimization */}
    <meta name="Description" content={props.description} />

    {/* Bonus: Have beautiful preview tiles when users share your website on social media */}
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.thumbnail} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.thumbnail} />

    {/* Orientation   */}
    <meta name="screen-orientation" content="portrait" />
    {/* Main Link Tags   */}
    <link
      href="/images/icons/favicon-16x16.png"
      rel="icon"
      type="image/png"
      sizes="16x16"
    />
    <link
      href="/images/icons/favicon-32x32.png"
      rel="icon"
      type="image/png"
      sizes="32x32"
    />

    {/* iOS   */}
    <link
      href="/images/icons/icons/apple-touch-icon.png"
      rel="apple-touch-icon"
    />
    <link
      href="/images/icons/icons/apple-touch-icon.png"
      rel="apple-touch-icon"
      sizes="76x76"
    />
    <link
      href="/images/icons/apple-touch-icon.png"
      rel="apple-touch-icon"
      sizes="120x120"
    />
    <link
      href="/images/icons/icon-152x152.png"
      rel="apple-touch-icon"
      sizes="152x152"
    />

    {/* Startup Image   */}
    <link
      href="/images/icons/icon-384x384.png.png"
      rel="apple-touch-startup-image"
    />

    {/* Pinned Tab   */}
    <link href="path/to/icon.svg" rel="mask-icon" size="any" color="red" />

    {/* Android   */}
    <link href="/images/icons/icon-192x192.png" rel="icon" sizes="192x192" />
    <link href="/images/icons/icon-128x128.png" rel="icon" sizes="128x128" />

    {/* Others  */}
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

    {/* UC Browser   */}
    <link
      href="/images/icons/icon-52x52.png"
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
    />
    <link
      href="/images/icons/icon-72x72.png"
      rel="apple-touch-icon"
      sizes="72x72"
    />

    <link rel="icon" href="/favicon.ico" />

    {/* Manifest.json   */}
    <link href="/manifest.json" rel="manifest" />

    {/* Fonts from Adobe */}
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles/nprogress.css" />
  </>
);

export default Meta;
