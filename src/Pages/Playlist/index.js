import React from "react";
import axios from "axios";
// Api
import { urlBase, header } from "../../Services/api";
// Style
import { Title, Body, Tracklist, NewTrack, ShowNewTrack } from "./style";
// Components
import { TrackCard } from "../../Componentes/trackCard";

export class Playlist extends React.Component {

    state = {
        currentPlaylist: [],

        nameValue: '',
        artistValue: '',
        urlValue: '',

        newTrackFieldState: false
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    componentDidUpdate() {
        this.getPlaylistTracks()
    }

    showNewTrackField = () => {
        this.setState({newTrackFieldState: true})
    }

    getName = (e) => {
        this.setState({nameValue: e.target.value})
    } 

    getArtist = (e) => {
        this.setState({artistValue: e.target.value})
    } 

    getUrl = (e) => {
        this.setState({urlValue: e.target.value})
    } 

    getPlaylistTracks = () => {
        axios.get(`${urlBase}/${this.props.id}/tracks`, header)
        .then((res) => {
            this.setState({currentPlaylist: res.data.result.tracks})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.nameValue,
            artist: this.state.artistValue,
            url: this.state.urlValue
        }

        axios.post(`${urlBase}/${this.props.id}/tracks`, body, header)
        .then((res) => {
            
        })
        .catch((err) => {
            console.log(err)
        })

        this.setState({newTrackFieldState: false})
    }


    deleteTrack = (id) => {
        axios.delete(`${urlBase}/${this.props.id}/tracks/${id}`, header)
        .then((res) => {

        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {

        const renderTracks = this.state.currentPlaylist.map((track) => {
            return(
                <TrackCard 
                key={track.id}
                name={track.name}
                artist={track.artist}
                url={track.url}
                deleteTrack={() => this.deleteTrack(track.id)}
                />
            )
        })


        return(
            <Body>
                <Title>
                    <button onClick={() => this.props.changePage()}>← Voltar</button>
                    <h1>{this.props.name}</h1>
                </Title>
                <ShowNewTrack onClick={this.showNewTrackField}>Nova música</ShowNewTrack>
                {this.state.newTrackFieldState === true ?                 
                    <NewTrack>
                        <input 
                        placeholder="Nome da música"
                        value={this.state.nameValue}
                        onChange={this.getName}
                        />

                        <input 
                        placeholder="Nome do Artista"
                        value={this.state.artistValue}
                        onChange={this.getArtist}
                        />

                        <input 
                        placeholder="Url da música"
                        value={this.state.urlValue}
                        onChange={this.getUrl}
                        />
                        <button onClick={()=>this.addTrackToPlaylist()}>Adicionar</button>
                    </NewTrack> : <div></div>}
                <Tracklist>
                    {renderTracks}
                </Tracklist>
            </Body>
        )
    }
}
