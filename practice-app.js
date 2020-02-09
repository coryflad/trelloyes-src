import React from 'react'
import List from './practice-list'
import './App.css'

class App extends React.Component {
    static defaultProps = {
        store: {
            list: [],
            allCards: {},
        }
    };

    render() {
        const { store } = this.props
        return (
            <main className='App'>
                <header className='App-header'>
                    <h1>Trelloyes!</h1>
                </header>
                <div className='App-list'>
                    {store.lists.map(list => (
                        <List
                            key={list.id}
                            header={list.header}
                            card={list.cardIds.map(id => store.allCards[id])}
                        />
                    ))}
                </div>
            </main>
        );
    }
}

export default App