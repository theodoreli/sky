import React from 'react'

export let __hotReload = true

var App = React.createClass({
    render: function() {
        return (
            <div>Hello World</div>
         ) 
     }
})

React.render(<App />, document.getElementById('app'));
