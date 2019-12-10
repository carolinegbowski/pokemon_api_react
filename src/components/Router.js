import React from 'react';
import { Route } from 'react-router-dom';
import Pokemon from './Pokemon';
import Team from './Team';


function Router() {
    return(
        <div>
            <Route path="/search" component={Pokemon}/>
            <Route path="/my_team" component={Team}/>
        </div>
    )
}

export default Router;