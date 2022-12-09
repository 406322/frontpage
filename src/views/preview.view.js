import config from '../config/config.js';

const servicesHost = config.get('servicesHostname');

const basepath = config.get('basePath');

// The meta tag is a bit scetchy, but we need to load the script from http. Better solution?

export default function renderPreview({ publication }) {
  return `
    <!doctype html>
    <html>
    <head>
        <title>Preview</title>
        <script type="module" src="https://assets.acdn.no/pkg/@amedia/include/v3/include.js"></script>
    </head>
    <body>
        <!-- Parameter til komponenten sendes inn som attributter med prefix param -->

        <amedia-include param-publication="${publication}" manifest="https://${servicesHost}/api/brandheader/v1/components/header/${publication}/manifest/"></amedia-include>

        <amedia-include param-publication="${publication}" manifest="${basepath}/manifest"></amedia-include>
    </body>
    </html>
    `;
}
