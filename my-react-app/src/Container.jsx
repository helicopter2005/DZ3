import { Counter } from './components/Counter';
import { GetRandomNumbersSum } from './components/GetRanfomNumbersSum';
import { FocusAndPreviousInput } from './components/FocusInput';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { TodoListReducer } from './components/TodoList';

function Container () {

    return (
          <div>
            <ThemeToggleButton />
            <h1>Здравия желаю!</h1>
            <Counter />
            <GetRandomNumbersSum />
            <FocusAndPreviousInput />
            <TodoListReducer />
          </div>
    );
}

export default Container;