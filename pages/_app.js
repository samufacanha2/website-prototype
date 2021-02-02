import React from 'react';
import '../css/base/base.css';
import '../css/animations/animations.css';
import '../css/modules/mod.css';
import '../css/wrappers/wraps.css';
import '../css/theme/light.css';
// import '../css/theme/dark.css;'
import Version from "../Components/Version";

export default function MyApp({ Component, pageProps }) {
    return <Version>
     <Component {...pageProps} />
  </Version>
  }