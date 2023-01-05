import Formulario from './componentes/Formulario';
import Principal from './componentes/Principal';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Bienvenidos a Matematicas con Elias</h1>
        <hr />
        <Principal 
          nombre='Elias'
          pais='Bolivia'
          imagen='2'
          cargo='Ingeniera de Soft'
          empresa='Spotify'
          testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivispasajes de Lorem Ipsum.'
        />
        <Principal 
          nombre='Alejandra'
          pais='Mexico'
          imagen='3'
          cargo='Ingeniera de Soft'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non mattis libero, vel lobortis enim. Quisque mauris augue, sodales vitae vestibulum quis, pellentesque vitae sem. Quisque euismod dolor id est posuere lacinia. Aenean pulvinar nulla ac metus euismod porta. Fusce nisi mauris'
        />
        <Principal 
          nombre='Sara'
          pais='Israel'
          imagen='1'
          cargo='Desarrolladora'
          empresa='Spotify'
          testimonio='Quisque euismod dolor id est posuere lacinia. Aenean pulvinar nulla ac metus euismod porta. Fusce nisi mauris, condimentum sit amet commodo in, sollicitudin eu ligula. Morbi ex magna, semper vitae elit tempor, hendrerit laoreet mi. Morbi lorem velit, hendrerit in dignissim eget, ornare vel risus'
        />

        <Formulario />
      </div>
    </div>
  );
}

export default App;
