import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LncComponent } from './lnc/lnc.component';
import { ProjectsComponent } from './projects/projects.component';
import { MycvComponent } from './mycv/mycv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


const routes: Routes = [
{path:'lnc',component:LncComponent},
{path:'projects',component:ProjectsComponent},
{path:'home',component:HomeComponent},
{path:'mycv',component:MycvComponent},
{path:'contacts',component:ContactsComponent},
{path:'aboutme',component:AboutmeComponent},
{path: '',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
