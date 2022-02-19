import { BearingCatalougeTableComponent } from './../../../shared/components/bearing-catalouge-table/bearing-catalouge-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalAppsPaperIndustryComponent } from './technical-apps-paper-industry.component';
import { technicalAppsPaperIndustryRoutingModule } from './technical-apps-paper-industry.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import {  Ng2SearchPipeModule  } from 'ng2-search-filter';

import { DeepGrooveComponent } from './deep-groove/deep-groove.component';
import { AngularContactComponent } from './angular-contact/angular-contact.component';
import { SearchPipe } from 'src/app/shared/pips/search/search.pipe';
import { DeepGrooveTableComponent } from './deep-groove/deep-groove-table/deep-groove-table.component';
import { AngularContactTableComponent } from './angular-contact/angular-contact-table/angular-contact-table.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DeepGrooveSingleRowComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepGrooveSingleRow.component';
import { DeepGrooveDoubleComponent } from './Deep groove ball bearing/deepGrooveDouble/deepGrooveDouble.component';
import { ExtraSmallMiniatureBallBearingsComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/extraSmallMiniatureBallBearings.component';
import { AngularcontactsinglerowComponent } from './Angular contact ball bearing/Angularcontactsinglerow/Angularcontactsinglerow.component';
import { AngularcontactdoublerowComponent } from './Angular contact ball bearing/Angularcontactdoublerow/Angularcontactdoublerow.component';
import { AngularcontactmatchedpairComponent } from './Angular contact ball bearing/Angularcontactmatchedpair/Angularcontactmatchedpair.component';
import { SelfAligningopentypeComponent } from './Self-aligning ball bearings/Self-aligningopentype/Self-aligningopentype.component';
import { SelfAligningsealedtypeComponent } from './Self-aligning ball bearings/Self-aligningsealedtype/Self-aligningsealedtype.component';
import { SelfAligningringtypeComponent } from './Self-aligning ball bearings/Self-aligningringtype/Self-aligningringtype.component';
import { SelfAligningadapterassembliesComponent } from './Self-aligning ball bearings/Self-aligningadapterassemblies/Self-aligningadapterassemblies.component';
import { CylindricalrollersinglerowComponent } from './Cylindrical roller bearings/Cylindricalrollersinglerow/Cylindricalrollersinglerow.component';
import { CylindricalrollerdoublerowComponent } from './Cylindrical roller bearings/Cylindricalrollerdoublerow/Cylindricalrollerdoublerow.component';
import { CylindricalrollerthrustcollarsComponent } from './Cylindrical roller bearings/Cylindricalrollerthrustcollars/Cylindricalrollerthrustcollars.component';

@NgModule({
  declarations: [
    TechnicalAppsPaperIndustryComponent,
    DeepGrooveComponent,
    DeepGrooveTableComponent,
    AngularContactComponent,
    AngularContactTableComponent,
    BearingCatalougeTableComponent,
    SearchPipe,
    DeepGrooveSingleRowComponent,
    DeepGrooveDoubleComponent,
    ExtraSmallMiniatureBallBearingsComponent,
    AngularcontactsinglerowComponent,
    AngularcontactdoublerowComponent,
    AngularcontactmatchedpairComponent,
    SelfAligningopentypeComponent,
    SelfAligningsealedtypeComponent,
    SelfAligningringtypeComponent,
    SelfAligningadapterassembliesComponent,
    CylindricalrollersinglerowComponent,
    CylindricalrollerdoublerowComponent,
    CylindricalrollerthrustcollarsComponent,

   
  ],
  imports: [CommonModule, technicalAppsPaperIndustryRoutingModule, SharedModule,  PanelMenuModule, Ng2SearchPipeModule],
  exports: [SearchPipe],
})
export class TechnicalAppsPaperIndustryModule {}
