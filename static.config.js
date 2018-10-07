import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { portfolioItems } from './src/db.json';
import { reloadRoutes } from 'react-static/node';
import chokidar from 'chokidar';

chokidar.watch('./src/db.json').on('all', () => {
  console.log('asda');
  reloadRoutes()
});

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    console.log(portfolioItems);
    const items = portfolioItems.item;
    return [
      {
        path: '/',
        component: 'src/components/PortfolioScreen',
      },
      {
        path: '/portfolio',
        component: 'src/components/PortfolioScreen',
        getData: () => ({
          items,
        }),
        children: items.map(item => ({
          path: `/${item.slug}`,
          component: 'src/components/CaseStudy',
          getData: () => ({
            item
          }),
        })),
      },
      {
        path: '/about',
        component: 'src/components/AboutScreen',
      },
      {
        path: '/resume',
        component: 'src/components/PortfolioScreen',
      },
      {
        path: '404',
        component: 'src/components/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules = [
      defaultLoaders.jsLoader,
      defaultLoaders.cssLoader,
      {
        loader: 'url-loader',
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        query: {
          limit: 10000,
          name: 'static/[name].[ext]',
        },
      }
    ];
    return config;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
            <link href="https://fonts.googleapis.com/css?family=Baumans|Muli:300,400,600,700|Nunito:300,400,600,700,800" rel="stylesheet" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
