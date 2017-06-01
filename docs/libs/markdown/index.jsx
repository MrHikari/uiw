import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

import Canvas from './canvas';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.components = new Map;
  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }

  getPageName() {
    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);
    if (routes) {
      return routes[2];
    }
    return 'quick-start';
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);

      if (div instanceof HTMLElement) {
        ReactDOM.unmountComponentAtNode(div);
        ReactDOM.render(component, div);
      }
    }
  }

  render() {
    const {prefixCls} = this.props;
    const document = this.document(localStorage.getItem('W_LANGUAGE') || 'zh-CN',this.getPageName());

    if (typeof document === 'string') {
      this.components.clear();

      const html = marked(document.replace(/\<\!--\s?DemoStart\s?--\>([^]+?)\<\!--\s?End\s?--\>/g, (match, p1, offset) => {
        const id = offset.toString(36);

        this.components.set(id, React.createElement(Canvas, Object.assign({
          name: this.constructor.name.toLowerCase()
        }, this.props), p1));

        return `<div id=${id}></div>`;
      }));

      return (
        <div className={`${prefixCls}-content-warpper`} dangerouslySetInnerHTML={{
          __html: html
        }} />
      )
    } else {
      return <span />
    }
  }
}

Markdown.defaultProps = {
  prefixCls: 'w-docs',
}