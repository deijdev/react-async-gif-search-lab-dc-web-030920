import React, {Component} from 'react'

class GifList extends Component{

   

    render(){
        
        const gifLis = this.props.gifList.gifList.map( gif => {
            return <li><img src={gif.images.original.url} /></li>
            })
 
        return(
            <div>
                <ul> 
                    {gifLis}
                </ul>
            </div>
        )
    }

}
export default GifList