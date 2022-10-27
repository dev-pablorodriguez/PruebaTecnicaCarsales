import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ListadoComponent as ListPersonajesComponent }  from '../app/personajes/pages/listado/listado.component'
import { DetalleComponent as DetallePersonajeComponent } from './personajes/pages/detalle/detalle.component'
import { ListadoComponent as ListEpisodiosComponent } from './episodios/pages/listado/listado.component'

const routes: Routes = [
    {
        path: '',
        component: ListPersonajesComponent,
        pathMatch: 'full'
    },
    // {
    //     path: 'personajes',
    //     component: ListPersonajesComponent,
    // },
    {
        path: 'personajes/:id',
        component: DetallePersonajeComponent,
    },
    {
        path: 'episodios',
        component: ListEpisodiosComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}