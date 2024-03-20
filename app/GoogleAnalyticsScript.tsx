import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
      ></Script>
      <Script id="google-analytics">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'YOUR_GA_TRACKING_ID');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
