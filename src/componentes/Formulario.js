
import { setTask } from './firebase'
import '../App.css'



const Formulario = () => {

    
  let inicial = {

  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    //name === 'title' ? inicial.title = value : inicial.description = value;
    inicial = {
      ...inicial,
      [name]: value,
    }

  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inicial);
    setTask(inicial);
  }


    return (

        <div>


            <form onSubmit={handleSubmit}>
                <label>titulo</label>
                <input type='text' name='title' onChange={handleChange} />
                <label>description:
                    <textarea name='description' onChange={handleChange} />
                </label>

                <input type='submit' value='enviar' />
            </form>

        </div>


    )
}

export default Formulario