import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-layout',
  styleUrl: 'app-layout.css',
  shadow: true,
})
export class AppLayout {
  render() {
    return (
      <Host>
        <div>
          <aside>
            <ul>
              <li>Create</li>
              <li>Edit</li>
            </ul>
          </aside>
          <main>
            <slot></slot>
          </main>
        </div>
      </Host>
    );
  }
}
