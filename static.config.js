import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { portfolioItems } from './src/db.json';
import favicon from './src/assets/JamesFavicon.png';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const items = portfolioItems.item;
    return [
      {
        path: '/',
        component: 'src/components/PortfolioScreen',
      },
      {
        path: '/work',
        component: 'src/components/PortfolioScreen',
        getData: () => ({
          items,
        }),
        children: items.map(item => {
          return ({
          path: `/${item.slug}`,
          component: `src/components/${item.component}`,
          getData: () => ({
            item
          }),
        }) }),
      },
      {
        path: '/about',
        component: 'src/components/AboutScreen',
      },
      {
        path: '/resume',
        component: 'src/components/ResumeScreen',
      },
      {
        path: '/researchproject',
        component: 'src/components/ResearchStudy',
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
    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin([{ from: `${__dirname}/src/assets/JamesFavicon.png`, to: './static/JamesFavicon.png' }])
    ]
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
            <title>James McDowell | UX Researcher and Designer</title>
            <meta name="description" content="UX Researcher and Designer who is passionate about bringing genuine value to people's life yet considerate of the impact of design on an individual, their relationships with others, and society as a whole."/>
            <meta name="author" content="James McDowell"/>
            <meta name="keywords" content="ux researcher, ux designer, ux development" />
            <link rel="canonical" href="https://jamesnmcdowell.com" />
            <link rel="icon" href="/static/JamesFavicon.png" />
            {renderMeta.styleTags}
            <link href="https://fonts.googleapis.com/css?family=Baumans|Muli:300,400,600,700|Nunito:300,400,600,700,800" rel="stylesheet" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
