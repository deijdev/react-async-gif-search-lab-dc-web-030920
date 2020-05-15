import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component{

    constructor(){
        super()
        this.state = {
            gifList : [],
            gifSearch : 'code'
        }
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.gifSearch}&api_key=5rnG20J313UYJ1U83AD92YF9K1hLeyO8`)
        .then(resp => resp.json())
        .then(gifArray => {
            this.setState({
                gifList : gifArray.data.slice(0, 3)
            })
        })
    }



    handleSubmit = (event) => {
        event.preventDefault()
        const input = event.target.children[0].value   

        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=5rnG20J313UYJ1U83AD92YF9K1hLeyO8`)
        .then(resp => resp.json())
        .then(gifArray => {
            this.setState({
                gifList : gifArray.data.slice(0, 3),
                gifSearch: input
            })
        })

        event.target.reset()
    }

    render(){
   
        return(
            <div className='ui container'>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <br></br>
                <GifList gifList={this.state}/>      
            </div>

        )
    }

}

export default GifListContainer