import React from 'react'

export let __hotReload = true

// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var peer = new Peer({ key: 'vhlr16yw7jfqd7vi', debug: 3, config: {'iceServers': [
      { url: 'stun:stun.l.google.com:19302' } // Pass in optional STUN and TURN server for maximum network compatibility
]}});

var App = React.createClass({
    getInitialState: function() {
        return {
            src: ''
        }
    },

    componentDidMount: function()  {
        console.log('did mount')
        var succ = (stream) => {
            //var myVideo = React.findDOMNode(this.refs.myVideo)
            //console.log(myVideo)
            var src = URL.createObjectURL(stream)
            this.setState({src})

            window.localStream = stream
        }
        var fail = () => console.log('failed')

        navigator.getUserMedia({audio: true, video: true}, succ, fail) 

        peer.on('open', () => {
            this.setState({peerId: peer.id})
        })
    },

    render: function() {
        var peerIdBlock = this.state.peerId ? this.state.peerId: ''

        return (
            <div>
              <div className='video-container'>
                <video className='their-video' autoplay></video>
                <video className='my-video' muted='true' autoPlay ref='myVideo' src={this.state.src}></video>
              </div>
              <div>
                {peerIdBlock}
              </div>
            </div>
         ) 
     }
})

React.render(<App />, document.getElementById('app'));
