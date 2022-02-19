import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularcontactdoublerowComponent } from './Angular contact ball bearing/Angularcontactdoublerow/Angularcontactdoublerow.component';
import { AngularcontactmatchedpairComponent } from './Angular contact ball bearing/Angularcontactmatchedpair/Angularcontactmatchedpair.component';
import { AngularcontactsinglerowComponent } from './Angular contact ball bearing/Angularcontactsinglerow/Angularcontactsinglerow.component';
import { AngularContactComponent } from './angular-contact/angular-contact.component';
import { CylindricalrollerdoublerowComponent } from './Cylindrical roller bearings/Cylindricalrollerdoublerow/Cylindricalrollerdoublerow.component';
import { CylindricalrollersinglerowComponent } from './Cylindrical roller bearings/Cylindricalrollersinglerow/Cylindricalrollersinglerow.component';
import { CylindricalrollerthrustcollarsComponent } from './Cylindrical roller bearings/Cylindricalrollerthrustcollars/Cylindricalrollerthrustcollars.component';
import { DeepGrooveDoubleComponent } from './Deep groove ball bearing/deepGrooveDouble/deepGrooveDouble.component';
import { DeepGrooveSingleRowComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepGrooveSingleRow.component';
import { ExtraSmallMiniatureBallBearingsComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/extraSmallMiniatureBallBearings.component';
import { DeepGrooveComponent } from './deep-groove/deep-groove.component';
import { ResolveGuard } from './resolve/resolve.guard';
import { SelfAligningadapterassembliesComponent } from './Self-aligning ball bearings/Self-aligningadapterassemblies/Self-aligningadapterassemblies.component';
import { SelfAligningopentypeComponent } from './Self-aligning ball bearings/Self-aligningopentype/Self-aligningopentype.component';
import { SelfAligningringtypeComponent } from './Self-aligning ball bearings/Self-aligningringtype/Self-aligningringtype.component';
import { SelfAligningsealedtypeComponent } from './Self-aligning ball bearings/Self-aligningsealedtype/Self-aligningsealedtype.component';
import { TechnicalAppsPaperIndustryComponent } from './technical-apps-paper-industry.component';


const routes: Routes = [
  {
    path: '',
    component: TechnicalAppsPaperIndustryComponent,
    children: [
      // { path: '', redirectTo: 'calculation' },
      // {
      //   path: 'calculation/:id',
      //   component: CalculationComponent,
      //   resolve: {
      //     data: ResolveGuard,
      //   },
      // },
      {
        path: 'deepGroove',
        component: DeepGrooveComponent,
      },
      {
        path: 'angularContact',
        component: AngularContactComponent,
      },
      {
        path: 'deepGroovesinglerow',
        component: DeepGrooveSingleRowComponent,
      },
      {
        path: 'deepGrooveextrasmallminiature',
        component: ExtraSmallMiniatureBallBearingsComponent,
      },
      {
        path: 'deepGroovedouble',
        component: DeepGrooveDoubleComponent,
      },
      {
        path: 'angularcontactsinglerow',
        component: AngularcontactsinglerowComponent ,
      },
      {
        path: 'angularcontactdoublerow',
        component: AngularcontactdoublerowComponent ,
      },
      {
        path: 'angularcontactmatchedpair',
        component: AngularcontactmatchedpairComponent ,
      },
      {
        path: 'selfaligningopentype',
        component: SelfAligningopentypeComponent ,
      },
      {
        path: 'selfaligningsealedtype',
        component: SelfAligningsealedtypeComponent ,
      },
      {
        path: 'selfaligningringtype',
        component: SelfAligningringtypeComponent ,
      },
      {
        path: 'selfaligningadapterassemblies',
        component: SelfAligningadapterassembliesComponent ,
      },
      {
        path: 'cylindricalrollersinglerow',
        component: CylindricalrollersinglerowComponent ,
      },
      {
        path: 'cylindricalrollerdoublerow',
        component: CylindricalrollerdoublerowComponent ,
      },
      {
        path: 'cylindricalrollerthrustcollars',
        component: CylindricalrollerthrustcollarsComponent ,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class technicalAppsPaperIndustryRoutingModule {}
