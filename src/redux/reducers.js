import {combineReducers} from 'redux';
import {
  VisibilityFilters, 
  SET_VISIBILITY_FILTER, 
  ADD_TODO, 
  TOGGLE_TODO, 
} from './action';

const {  SHOW_ALL } = VisibilityFilters;

/**
 * 
  {
    visibilityFilter: 'SHOW_ALL',
    todos: [
      {
        text: 'Consider using Redux',
        completed: true,
      },
      {
        text: 'Keep all state in a single tree',
        completed: false
      }
    ]
  }
 */

 /**
 *  注意每个 reducer 只负责管理全局 state 中它负责的一部分
 *  每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据
 */


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return([
        ...state, 
        {
          text: action.text,
          completed: false
        }
      ]);
    case TOGGLE_TODO:
      return(state.map((todo, index) => {
        if (index === action.index) {
          return ({
            ...todo, 
            ...{completed: !todo.completed}
          })
        }
        return todo;
      }));
      default:
        return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
//  || 与上
//  || 面等
//  || 价
const todoApp = combineReducers({
  visibilityFilter,// 等价于visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  todos  //等价于todos: todos(state.todos, action)
});

export default todoApp;