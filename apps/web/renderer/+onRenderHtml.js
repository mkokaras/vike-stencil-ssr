// https://vike.dev/onRenderHtml
export { onRenderHtml };

import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import logoUrl from './logo.svg';
import { getPageTitle } from './getPageTitle';

const { renderToString } = require('../../../packages/ui-components/hydrate');

async function onRenderHtml(pageContext) {
  const { Page, Layout } = pageContext.config;

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined');

  // Alternativly, we can use an HTML stream, see https://vike.dev/streaming

  /** Stencil issue */
  const pageHtml = await renderToString(Layout(Page()), {
    prettyHtml: true,
    removeScripts: true,
  });

  // See https://vike.dev/head
  const title = getPageTitle(pageContext);
  const desc = pageContext.data?.description || pageContext.config.description || 'Demo of using Vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml.html)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    },
  };
}
