import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

// Import Components
import NavBar from "./components/NavBar"
import ArtistList from "./components/ArtistList"
import Artist from "./components/Artist"

class App extends Component {

    // state = {
    //     artists: []
    // }

    // async componentWillMount () {
    //     try {
    //         const response = await axios.get('/api/artists')
    //         this.setState({artists: response.data})
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    render() {

        return (
            <Router>
                <div className="App">
                    <h1>Tunr</h1>

                    <NavBar/>

                    <Switch>
                        <Route exact path="/" component={ArtistList} />
                        <Route path="/artist/:id" component={Artist} />
                    </Switch>

                </div>
            </Router>
        )
    }
}

export default App