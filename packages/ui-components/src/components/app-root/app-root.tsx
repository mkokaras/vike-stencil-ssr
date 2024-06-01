import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Fragment>
        <app-card index={1}></app-card>
        <app-card index={2}></app-card>
      </Fragment>
    );
  }
}
