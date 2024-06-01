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
  if (!container) throw new Error('DOM element #react-root not found');

  if (pageContext.isHydration) {
    defineCustomElements();
    // const results = await hydrateDocument(document);
    // console.log(results);
    // hydrateRoot(container, <PageShell pageContext={pageContext} />)
  } else {
    // root = createRoot(container)
    // root.render(<PageShell pageContext={pageContext} />)
  }

  // const page = (
  //   <PageShell pageContext={pageContext}>
  //     <Page />
  //   </PageShell>
  // )
  // if (pageContext.isHydration) {
  //   root = ReactDOM.hydrateRoot(container, page)
  // } else {
  //   if (!root) {
  //     root = ReactDOM.createRoot(container)
  //   }
  //   root.render(page)
  // }
  document.title = getPageTitle(pageContext);
}
