import { Head } from "next/document";

const CustomHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* bootstrap */}
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous"
    />
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossOrigin="anonymous"
    />

    {/* admin-lte */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css"
      integrity="sha256-MeSf8Rmg3b5qLFlijnpxk6l+IJkiR91//YGPCrCmogU="
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.12/css/AdminLTE.min.css"
      integrity="sha256-3erATO26AUHbD7yzfeSJyFSrcNQ88SkDAXvt0ZMT38U="
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.12/css/skins/_all-skins.min.css"
      integrity="sha256-ZlEo/0WbhG/pXIL3zcbJoTW9lFxlmSu8a7syXHfTURo="
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.12/css/alt/AdminLTE-select2.min.css"
      integrity="sha256-Jd7x6gXzrE78/Wh23JolPNVifWZaEn5ZCEvU7FehKBQ="
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"
      integrity="sha256-GHC3xFbrevQ0aRcWg5JElUOncXYXxTtMOuA74cWAPTw="
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.12/js/adminlte.min.js"
      integrity="sha256-1LHRbcgIgH8dB6nzzUOnjRzh8mwxxJAa2UYfJYH3QJM="
      crossOrigin="anonymous"
    />

    {/* fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css"
      integrity="sha256-kx16nUTlNRyEpdk7cvpnqblbDbTe/nADul9o2uYeGSw="
      crossOrigin="anonymous"
    />
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossOrigin="anonymous"
    />

    {/* nprogress */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY="
      crossOrigin="anonymous"
    />

    {/* custom css: adminlte, nprogress */}
    <style>{`
      .content-wrapper {
        min-height: 1092px;
      }

      #nprogress .bar {
        background: orange;
      }

      #nprogress .spinner-icon {
        border-top-color: orange;
        border-left-color: orange;
        display: none;
      }
    `}</style>

    <link rel="stylesheet" href="/static/css/switch.css" />
  </Head>
);

export default CustomHead;
