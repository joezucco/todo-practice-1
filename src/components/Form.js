const Form = (props) => {
  return (
    <form>
      <input type='text' className='todo-input' />
      <button className='todo-button'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' id='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Complete</option>
          <option value='uncompleted'>Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form