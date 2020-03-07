import React from 'react';
import TitleSearch from './components/TitleSearch';
import ResultTable from './components/ResultTable';

class App extends React.Component {
    
    

    render()  {
      return(
        <div>
          <h2> Title Search </h2>
          <TitleSearch />
          <ResultTable />
        </div>
      );
    }

  }

  export default App;





}
