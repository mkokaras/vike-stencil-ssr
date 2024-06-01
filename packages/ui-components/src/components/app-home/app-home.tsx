import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <div>
          <main>
            <h1>Home Page!!!!</h1>
          </main>
        </div>
      </Host>
    );
  }
}
