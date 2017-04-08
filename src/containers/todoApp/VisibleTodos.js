import  {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { toggleTodo, removeTodo } from '../../actions/todoActions';
import  TodoList  from '../../components/todoApp/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default :
        return 'all'
  }
}

const mapStateToProps = (state, {match} ) => {
    return {
        todos : getVisibleTodos(state.Todos, match.params.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
              dispatch : bindActionCreators({toggleTodo, removeTodo}, dispatch)
        }
    }

const VisibleTodos = withRouter(connect(mapStateToProps,mapDispatchToProps)(TodoList));

export default VisibleTodos;
