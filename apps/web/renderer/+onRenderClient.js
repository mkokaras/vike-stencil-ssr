// https://vike.dev/onRenderClient
export { onRenderClient };

import { getPageTitle } from './getPageTitle';
import { defineCustomElements } from 'ui-components/loader';

// let root;

async function onRenderClient(pageContext) {
  const { Page } = pageContext;

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined');

  const container = document.getElementById('root');

  if (!container) throw new Error('DOM element #root not found');

  defineCustomElements();

  document.title = getPageTitle(pageContext);
}
