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
            const artist = await axios.get(`/api/artists/${artistId}`)
            await this.setState({
                artist: artist.data.artist,
                songs: artist.data.songs
            });

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.artist.name}</h1>
                <pre>{JSON.stringify(this.state.artist)}</pre>
                <img src={this.state.artist.photo_url} alt={this.state.artist.name + "'s Artist Photo"} />
                <ul>

                </ul>
            </div>
        );
    }
}

export default Artist;