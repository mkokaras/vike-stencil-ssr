import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
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
            <app-card index={1}></app-card>
            <app-card index={2}></app-card>
          </main>
        </div>
      </Host>
    );
  }
}
