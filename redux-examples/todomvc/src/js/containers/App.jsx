import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import '../../css/app.css'
const store=configureStore();
class App extends Component {
    render() {
        const { todos, actions } = this.props
        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

const AppComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

render(
    <Provider store={store}>
        <AppComp />
    </Provider>,
    document.getElementById('app')
);
