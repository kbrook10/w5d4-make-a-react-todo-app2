import React from 'react';

//Lesson(1): Write Hello World!
//<---------------------------------------------------->
//<-----This is the first way to create a component---->
// class App extends React.Component {
//     render(){
//         return <h1>Hello Guys</h1>
//     }
// }

//Only use one of these: either 'class' or 'const'

//<-----This is another way to create a component------->
//This uses 'const' variable
// const App = () => <h1>Hello Eggheads</h1>

//Lesson(2): Display Output in React with a Component's render Method
//<---------------------------------------------------->
class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <b>Bold</b>
            </div>
        );
    }
}

export default App
