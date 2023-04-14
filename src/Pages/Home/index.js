import React from "react";
import axios from "axios";
// components
import { Header } from "../../Componentes/header";
import { PlaylistCard } from "../../Componentes/playlistCard";
// style
import { Body, Topfield, Biblioteca, NewPlaylist } from "./style";
// Api
import { urlBase, header } from "../../Services/api";

export class Home extends React.Component {

    state = {
        playlists: [],

        inputValue: '',
        showAddPlaylist: false
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    changeInputValue = (e) => {
        this.setState({inputValue: e.target.value})
    }

    getAllPlaylists = () => {
        axios.get(urlBase, header)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    createPlaylist = () => {

        const body = {
            name: this.state.inputValue
        }

        axios.post(urlBase, body, header)
        .then((res) => {
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

        this.setState({showAddPlaylist: false})
    }

    deletePlaylist = (id) => {
        axios.delete(`${urlBase}/${id}`, header)
        .then((res) => {
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    addPlaylistField = () => {
        this.setState({showAddPlaylist: true})
    }

    render() {
        const renderPlaylistsNames = this.state.playlists.map((playlist) => {
            return (
                <PlaylistCard 
                key={playlist.id} 
                nome={playlist.name} 
                deleteButton={() => this.deletePlaylist(playlist.id)}
                changePage={() => this.props.changePage(playlist.id, playlist.name)}
                />
            )
        })

        return(
            <Body>
                <Header />
                <Topfield>
                <button className="newPlaylist" onClick={this.addPlaylistField}>Criar Playlist</button>
                {this.state.showAddPlaylist === true ? 
                <div>
                    <input 
                    placeholder="Nome da Playlist"
                    value={this.state.inputValue}
                    onChange={this.changeInputValue}
                    />
                    <button className="addPlaylist" onClick={this.createPlaylist}>Adicionar</button>
                </div>
                 :
                 <div></div>}
                 </Topfield>
                <Biblioteca>
                    {renderPlaylistsNames}
                </Biblioteca>
            </Body>
        )
    }
}