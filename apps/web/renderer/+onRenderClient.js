// https://vike.dev/onRenderClient
export { onRenderClient };

import { getPageTitle } from './getPageTitle';

import { hydrateDocument } from '../../../packages/ui-components/hydrate';

// let root;
async function onRenderClient(pageContext) {
  const { Page } = pageContext;

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined');

  const container = document.getElementById('react-root');
  if (!container) throw new Error('DOM element #react-root not found');

  if (pageContext.isHydration) {
    // hydrateRoot(container, <PageShell pageContext={pageContext} />)
  } else {
    // root = createRoot(container)
    // root.render(<PageShell pageContext={pageContext} />)
  }

  await hydrateDocument(Window.document);

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