import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {

    state = {
        artist: {},
        songs: []
    }

    componentWillMount() {
        const artistId = this.props.match.params.id;
        this.fetchArtistAndSongData(artistId)
    }
    
    fetchArtistAndSongData = async (artistId) => {
        try {
            const artistData = await axios.get(`/api/artists/${artistId}`)
            await this.setState({
                artist: artistData.data.artist,
                songs: artistData.data.songs
            });

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.artist.name}</h1>
                {/* <pre>{JSON.stringify(this.state.artist)}</pre> */}
                <img src={this.state.artist.photo_url} alt={this.state.artist.name + "'s Artist Photo"} />
                {this.state.songs.map(song => (
                    <div key={song.id}>
                        <h4>{song.title}</h4>
                        <audio controls src={song.preview_url}></audio>
                    </div>
                ))}                    
            </div>
        );
    }
}

export default Artist;