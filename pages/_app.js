//componentes
import React from 'react';
import Version from "../Components/Version";

//css
import '../css/base/base.css';
import '../css/animations/animations.css';
import '../css/wrappers/wraps.css';
import '../css/modules/mod.css';

//tema:

import '../css/theme/light.css';
// import '../css/theme/dark.css;'

export default function MyApp({ Component, pageProps }) {
    return <Version>
     <Component {...pageProps} />
  </Version>
  }