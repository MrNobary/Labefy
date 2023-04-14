import React from "react";

import { Home } from "./Pages/Home";
import { Playlist } from "./Pages/Playlist";

export default class App extends React.Component {

  state = {
    currentPage: 'Home',
    currentPlaylistId: '',
    currentPlaylistName: ''
  }


  goToPlaylist = (id, name) => {
    this.setState({
      currentPage: 'Playlist', 
      currentPlaylistId: id,
      currentPlaylistName: name
    })
  }

  goToHome = () => {
    this.setState({currentPage: 'Home', currentPlaylistId: '', currentPlaylistName:''})
  }


  changePage = () => {
    switch(this.state.currentPage) {
      case 'Home':
        return <Home changePage={this.goToPlaylist}/>
      case 'Playlist':
        return <Playlist 
        id={this.state.currentPlaylistId} 
        name={this.state.currentPlaylistName}
        changePage={this.goToHome}
        />
    }
  }



  render() {
    return(
      <div>
        {this.changePage()}
      </div>
    )
  }
}
