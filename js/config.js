var config = {
    elementId: 'cms',
    mode: 'GITHUB',

    github: {
        username: 'sn9527',
        repo: 'study-note',
        branch: 'master',
        host: 'https://api.github.com',
    },

    layoutDirectory: 'layouts',

    errorLayout: 'error',
    defaultView: 'page',

    types: [
        {name: 'page', layout: { list: 'page-list', single: 'page' }},
    ],
};
new CMS(config);
