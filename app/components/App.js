import React from 'react'

export let __hotReload = true

// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var peer = new Peer({ key: 'vhlr16yw7jfqd7vi', debug: 3, config: {'iceServers': [
      { url: 'stun:stun.l.google.com:19302' } // Pass in optional STUN and TURN server for maximum network compatibility
]}});

var App = React.createClass({
    getInitialState() {
        return {
            src: '',
            peerTarget: '',
        }
    },

    componentDidMount()  {
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

        peer.on('call', (call) => {
          // Answer the call automatically (instead of prompting user) for demo purposes
          call.answer(window.localStream);
          this._connect(call);
        });
    },

    _changeField: function(event) {
        this.setState({peerTarget: event.currentTarget.value})
    },

    _connectHandler(e) {
        console.log('i was clicked')
        var call = peer.call(this.state.peerTarget, window.localStream) 
        this._connect(call)
    },

    _connect(call) {
        if (window.existingCall) { window.existingCall.close()}

        call.on('stream', (stream) => {
          this.setState({theirVideo: URL.createObjectURL(stream)})
        });

        window.existingCall = call;
    },

    render() {
        var renderConnect = () => {
            return (
                <div>
                  <input value={this.state.peerTarget} placeholder='Connect to peer' onChange={this._changeField} />
                  <button onClick={this._connectHandler}>Connect</button>
                </div>
            )
        }
        var peerIdBlock = this.state.peerId ? this.state.peerId: ''
        var connectTo = this.state.src ? renderConnect(): ''

        return (
            <div>
              <div className='video-container'>
                <video className='their-video' autoPlay src={this.state.theirVideo}></video>
                <video className='my-video' muted='true' autoPlay ref='myVideo' src={this.state.src}></video>
              </div>
              <div>
                {peerIdBlock}
                {connectTo}
              </div>
            </div>
         ) 
     }
})

React.render(<App />, document.getElementById('app'));
