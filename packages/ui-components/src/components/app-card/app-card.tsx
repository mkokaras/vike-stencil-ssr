import { Component, h, Prop, State } from '@stencil/core';
import { getPost, Post } from '../../utils';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true,
})
export class AppCard {
  @State() post: Post;
  @Prop() index!: number;
  @State() votes = 0;

  componentWillLoad() {
    return getPost(this.index).then(post => {
      this.post = post;
    });
  }

  render() {
    return (
      <article>
        <h2>{this.post.title}</h2>
        <p>{this.post.body}</p>
        <button
          onClick={() => {
            this.votes++;
          }}
        >
          Upvote {this.votes}
        </button>
      </article>
    );
  }
}
