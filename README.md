# Project structure

```
strio project
│   README.md
│   CNAME
│   vue.config.js
└───src
│   │   App.vue
│   │   main.js
│   │
│   └───assets
│       │   ...
│   └───components
│       │   ...
│   └───views
│   └───router
│   └───plugin
│   └───store
│   
└───dist
    │   builds...
```

## Guideline
<ul>
    <li>
        src: project source code
        <ul>
            <li>assets: static files, images...</li>
            <li>components: Vue components go here</li>
            <li>views: Vue components that represent pages</li>
            <li>router: Switch between views</li>
            <li>plugin: Plugins for Vue engine (ex. Vuetify)</li>
            <li>store: Memory store for global variables or code</li>
        </ul>
    </li>
    <li>dist: Built folder with static files ready for deployment</li>
</ul>

## Deploy landing page

### Production

For production we're using github pages. For deploying there is a script "gh-pages-deploy.sh" in scripts folder that must be run from master branch. We can choose which commit we want to deploy, move the HEAD of git repo to that commit and then run the script to deploy.

### Demo version

Demo version of Strio landing lives on Heroku platform. For deploy on Demo version first need to merge the local branch into Demo branch and then run script "demo-deploy.sh"


## Strio Tokens info (rinkeby)

https://github.com/Strio-DAO/sstrio-token-rinkeby


# landing-page
...

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
