marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

function myPlugin() {
    console.log('loading test plugin');
}

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

    plugins: [
        myPlugin,
    ],
    markdownEngine: marked.parse,

    onload: function() {
        console.log('cms.js ready');

        document.getElementById('sort').addEventListener('click', function() {
            var sortFunc = function(a, b) {
                if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                return 0;
            }
            blog.sort('posts', sortFunc);
        });

        document.getElementById('search').addEventListener('input', function(e) {
            blog.search('posts', 'title', e.target.value);
        });

        // Access the loaded plugins like this.
        // blog.myPlugin();
    },    
};
var blog = new CMS(config);
