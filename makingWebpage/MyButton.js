function MyButton(props) {
    const [isClicked, setIsClicked1] = React.useState(false);

    return React.createElement(
        'button',
        {onClick: () => setIsClicked1(true)},
        isClicked ? 'Clicked' : 'Clicked here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);