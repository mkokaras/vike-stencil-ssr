import { render } from 'vike/abort';

export async function guard(pageContext) {
  if (!pageContext?.user?.isAdmin) {
    throw render(401, "You aren't allowed to access this page.");
  }
}
