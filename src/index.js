import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';


const Button = styled.button`
    background: red;
    border-radius: 8px;
    padding:10px 20px;
    color: white;
`;

const Column=styled.ul`
    /* padding:1em; */
    background:papayawhip;
    display:flex;
    `
const Todo=styled.li`
    border-style:solid;
    flex-direction:column;
    
    `

// const backgroundColor=({primary,secondary,background})=>
// primary ? "#3F51B5" : secondary ? "#E91E63" : background;

// const Button =styled.button`
//     `
  

class App extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
        <div id="wrap">
            <div className="header">
                <div className="logo">Logo</div>
                <nav></nav>
                
            
            </div>
            <div className="body">
                <Column>
                    <Todo>
                        warota
                    </Todo>
                    <Todo>
                        waroe
                    </Todo>
                    <div className="container">
                        <form action="">
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </form>
                        <Button>put</Button>
                        <Button>cancele</Button>
                    </div>
                </Column>
            </div>
            <div className="footer">
            </div>

       </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
