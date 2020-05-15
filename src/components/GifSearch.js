import React, {Component} from 'react'

class GifSearch extends Component{

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                <input placeholder='search gifs..'/>
                <button value='submit'>Submit</button>
                </form>
            </div>
        )
    }

}
export default GifSearch