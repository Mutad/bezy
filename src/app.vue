<script>
import appConfig from '@src/app.config'
import Application from './state/models/Application'
import Block from './state/models/Block'
import Element from './state/models/Element'

export default {
  mounted() {
    const data = [
      {
        id: 1,
        name: 'News application',
        pages: [
          {
            id: 1,
            name: 'Page 1',
            application_id: 1,
            blocks_pages: [
              { id: 3, block_id: 3, order: 1 },
              { id: 1, block_id: 1, order: 2 },
              { id: 2, block_id: 2, order: 3 },
            ],
          },
          { id: 2, name: 'Page 2', application_id: 1 },
        ],
        consumers: [
          {
            id: 1,
            name: 'news api',
            lang: 'json',
            application_id: 1,
            url: 'https://api.spaceflightnewsapi.net/',
            endpoints: [
              {
                id: 1,
                path: '/v3/articles',
              },
              {
                id: 2,
                path: '/v3/reports',
              },
            ],
          },
        ],
      },
    ]
    Application.insert({
      data: data,
    })

    Element.insert({
      data: [
        {
          id: 1,
          name: 'heading',
          type: 'h1',
          children: [
            {
              id: 1,
              parent_id: 1,
              parent_type: 'elements',
              child_id: 4,
              child_type: 'elements',
            },
          ],
        },
        {
          id: 2,
          name: 'paragraph',
          type: 'p',
          children: [
            {
              id: 2,
              parent_id: 2,
              parent_type: 'elements',
              child_id: 4,
              child_type: 'elements',
            },
          ],
        },
        {
          id: 3,
          name: 'input text',
          type: 'input',
        },
        {
          id: 4,
          name: 'static text',
          type: 'text',
        },
      ],
    })

    Block.insert({
      data: [
        {
          id: 1,
          name: 'text',
          children: [
            {
              id: 3,
              parent_id: 1,
              parent_type: 'blocks',
              child_id: 2,
              child_type: 'elements',
            },
            {
              id: 4,
              parent_id: 1,
              parent_type: 'blocks',
              child_id: 2,
              child_type: 'blocks',
            },
          ],
        },
        {
          id: 2,
          name: 'input',
          children: [
            {
              id: 5,
              parent_id: 2,
              parent_type: 'blocks',
              child_id: 3,
              child_type: 'elements',
            },
          ],
        },
        {
          id: 3,
          name: 'heading',
          children: [
            {
              id: 6,
              parent_id: 3,
              parent_type: 'blocks',
              child_id: 1,
              child_type: 'elements',
            },
          ],
        },
      ],
    })
  },
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

// Design variables and utilities from src/design.
@import '@design';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: $color-body-bg;
}
#app {
  @extend %typography-small;
}

// ===
// Base element styles
// ===

a,
a:visited {
  color: $color-link-text;
}

h1 {
  @extend %typography-xxlarge;
}

h2 {
  @extend %typography-xlarge;
}

h3 {
  @extend %typography-large;
}

h4 {
  @extend %typography-medium;
}

h5,
h6 {
  @extend %typography-small;
}

// ===
// Vendor
// ===

#nprogress .bar {
  background: $color-link-text;
}
</style>
