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
        border-radius:5px;
    
    }
    `;

// ------------------機能-------------------


// --------------------------React--------------

const todos=[];






function TodoItem(props){
    return(
        <Todo>
            <TodoText key={props.todo.id}>
                {props.todo.title}
            </TodoText>
            <PlusButtom reverse onClick={()=>
            props.deleteTodo(props.todo)} >✖</PlusButtom>
        </Todo>
        
    )
}

function TodoList(props){
    const todos=props.todos.map(todo=>{
        return(
            <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            />
        );
    });
    return(
        <span>{todos}</span>
    );
};

function Todoform(props){
    return(
    <Form>
        <FormTextarea onSubmit={props.addTodo} action="">
            <input type="text" name="" id="" cols="38" rows="3"
            value={props.item} onChange={props.updateItem} ></input>
        <PlusButtom type='submit' reverse>put</PlusButtom>
            {/* <input type="submit" value="Add"/> */}
        </FormTextarea>
        <PlusButtom reverse big>cancele</PlusButtom>
    </Form>
        
    )
}

function WorkTitle(){
    return(
    <ColumnTitleDiv>
        <ColumnTitle>① 数学</ColumnTitle>
        <PlusButtom>+</PlusButtom>
        <PlusButtom>・・・</PlusButtom>
    </ColumnTitleDiv>

    )
}

function getUniqueID(){
    return new Date().getTime().toString(36)
}

class App extends React.Component{
    constructor(){
        super();
        this.state={
            todos:todos,
            item:''
        };
        this.deleteTodo=this.deleteTodo.bind(this);
        this.updateItem=this.updateItem.bind(this);
        this.addTodo=this.addTodo.bind(this);

    }

    // stateをいじるときは、コンポーネントの中に書く
    deleteTodo(todo){
        if(!window.confirm('are you ready?')){
            return;
        } 
        const todos=this.state.todos.slice();
        const pos=this.state.todos.indexOf(todo);
    
        todos.splice(pos,1);
        this.setState({
            todos:todos
        })}

    updateItem(e){
        this.setState({
            item: e.target.value
        });
    }

    addTodo(e){
        e.preventDefault();
        // 提出した後も画面が遷移しない↑
        if(this.state.item.trim()===''){
            return;
        }

        const item={
            title:this.state.item,
            id:getUniqueID()
        };
        const todos=this.state.todos.slice();
        // todosをコピーしている↑
        
        
        todos.push(item);
        // todosにitemを追加している↑
        this.setState({
            todos:todos,
            item:''
        });
        // SetstateでUIを更新している。
        // itemの値は、inputの初期値なので消している↑
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
                   大学院試勉強
                    </ProjectText>
                </ProjectDiv>
                
                <ColumnDiv>
                    <Column>
                     
                <WorkTitle/>

                    <TodoList
                        todos={this.state.todos}   
                        deleteTodo={this.deleteTodo}
                    />

                    <Todoform
                        item={this.state.item}
                        updateItem={this.updateItem} 
                        addTodo={this.addTodo}></Todoform>                      
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
