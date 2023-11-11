import {Component} from 'react' 

import './index.css'

class Counter extends Component{
    state={count:0}

    incrementCount = ()=>{
        this.setState((p)=>({count:p.count+1}))
    }

    render(){
        const {count} = this.state
        return <div>
            <h1 className=' m-1'>The Button has been clicked <span className='spanElement'>{count} </span>times</h1>

            <div >
                <p>Click the button to increase the count!</p>
                <button type='button' className='btn btn-primary' onClick={this.incrementCount}>Click Me!</button>
            </div>
        </div>
    }
}

export default Counter