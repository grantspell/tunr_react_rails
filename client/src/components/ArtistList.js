import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class ArtistList extends Component {
    
    state = {
        artists: []
    }
    

    async componentWillMount() {
        try {

            const artistsData = await axios.get('/api/artists')
            await this.setState({artists: artistsData.data})
            return artistsData.data
            
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>

                <h1>All Artists</h1>
                {this.state.artists.map(artist => (
                    <div key={artist.id}>
                        <Link to={`/artist/${artist.id}`} >{artist.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList;

// const ArtistListComponent = () => (<ArtistList artists={this.state.artists}/>)

// const ArtistList = (props) => {
//     return (
//         <div>
//             <h1>All Artists</h1>
//             {
//                 props.artists.map((artist) => {
//                     return (
//                         <div>
//                             <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default ArtistList