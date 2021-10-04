const Form = ({ setInputText }) => {
  //Here I can write JS code and functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <form>
      <input onChange={inputTextHandler} type='text' className='todo-input' />
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

export default Form;
