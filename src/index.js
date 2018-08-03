import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';
import {Title,Header} from './header/Title'




const ProjectDiv=Header.extend`
    height: 100px;
    background-color:#EEEFE8;
    `;

const ColumnDiv=ProjectDiv.extend`
    height:630px;
    padding: 50px;
    /* bg+ */
    background: white;
    display:flex;

    `;


const Body=styled.div`
    `;


const ProjectText=styled.p`
    color:#25A31D;    
    font-weight:bold;
    margin: 5px;
    font-size: 40px;
    display:inline-block;
    filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.16));
    `;        

// ---------------column------------------

const ColumnTitleDiv=styled.div`
    display:flex;
    width: 100%;
    `;

const ColumnTitle=styled.p`
    font-size: 17px;
    color:white;
    display:inline-block;
    margin-right:auto;
    font-weight:bold;
    padding: 10px;
    `;

    
const Column=styled.ul`
    /* padding:1em; */
    background-color: #46AB40;
    margin-right: 20px;
    padding: 0;
    width: 380px;
    height: 525px;
    display:flex;

    flex-direction:column;
    list-style:none;
    border-radius:5px;
    filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.3));
    `;

// ---------------Todo------------------

// columnTitledivと同地関係
const Todo=styled.div`
    display:flex;
    height: 70px;
    width: 360px;
    background-color:white;
    margin: 10px auto 0 10px;
    padding: 0;
    border-radius:5px;
    filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.3));
    `;

    // ColumnTitleと同地関係
const TodoText=styled.p`
    color:#25A31D;    
    font-weight:bold;
    padding: 5px;
    display:inline-block;
    margin-right: auto;

    
`;    


// --------------------Form---------------------


const Form=styled.div`
`;

const FormTextarea=styled.form`
    padding: 10px;

`;

// --------------------Buttom---------------------


const PlusButtom=styled.button`
    display:inline-block;
    color:${props=>
    props.reverse ? '#46AB40':'white'};
    background:${props=>
    props.reverse ? 'white':'#46AB40'};
    width:${props=>
    props.big ? '100px':'60px'};
    margin-left: 10px;
    font-weight:bold;
    font-size: 17px;
    text-decoration:none;
    border:none;
    border-radius:5px;
    &:hover{
        cursor: pointer;
        color:blue;
    }
    `;


// function TodoList(props){

// }

class App extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        return(
        <div id="wrap">
            <Header>
                <Title>The simple Todo List</Title>
            </Header>

            <Body>
            
                <ProjectDiv>
                    <ProjectText>
                    Project Name
                    </ProjectText>
                </ProjectDiv>
                
                <ColumnDiv>
                    <Column>
                        <ColumnTitleDiv>
                            <ColumnTitle>③ Todo</ColumnTitle>
                            <PlusButtom>+</PlusButtom>
                            <PlusButtom>・・・</PlusButtom>
                        </ColumnTitleDiv>

                        <Todo>
                            <TodoText>warota</TodoText>
                            <PlusButtom reverse>・・・</PlusButtom>                            
                        </Todo>
                        <Todo>
                            waroe
                        </Todo>
                        <Form>
                            <FormTextarea action="">
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </FormTextarea>
                            <PlusButtom reverse>put</PlusButtom>
                            <PlusButtom reverse big>cancele</PlusButtom>
                        </Form>
                    </Column>    
                   
                </ColumnDiv>
            </Body>
            <div className="footer">
            </div>

       </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
