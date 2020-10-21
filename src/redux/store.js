import {createStore} from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './action';

export const store = createStore(todoApp);

// 打印初始状态
console.log(store.getState());

//每次state更新时，打印日志
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducer'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
export const test = '11111';