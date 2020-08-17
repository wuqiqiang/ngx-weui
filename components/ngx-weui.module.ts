import { NgModule } from '@angular/core';

import { AccordionModule } from 'evm-ngx-weui/accordion';
import { ActionSheetModule } from 'evm-ngx-weui/actionsheet';
import { ButtonModule } from 'evm-ngx-weui/button';
import { CellModule } from 'evm-ngx-weui/cell';
import { ChartG2Module } from 'evm-ngx-weui/chart-g2';
import { warnDeprecation } from 'evm-ngx-weui/core';
import { DialogModule } from 'evm-ngx-weui/dialog';
import { FormModule } from 'evm-ngx-weui/form';
import { GalleryModule } from 'evm-ngx-weui/gallery';
import { InfiniteLoaderModule } from 'evm-ngx-weui/infiniteloader';
import { JWeiXinModule } from 'evm-ngx-weui/jweixin';
import { LoadmoreModule } from 'evm-ngx-weui/loadmore';
import { MaskModule } from 'evm-ngx-weui/mask';
import { PaginationModule } from 'evm-ngx-weui/pagination';
import { PickerModule } from 'evm-ngx-weui/picker';
import { PopupModule } from 'evm-ngx-weui/popup';
import { ProgressModule } from 'evm-ngx-weui/progress';
import { PTRModule } from 'evm-ngx-weui/ptr';
import { RatingModule } from 'evm-ngx-weui/rating';
import { SearchBarModule } from 'evm-ngx-weui/searchbar';
import { SidebarModule } from 'evm-ngx-weui/sidebar';
import { SliderModule } from 'evm-ngx-weui/slider';
import { StepperModule } from 'evm-ngx-weui/stepper';
import { SwiperModule } from 'evm-ngx-weui/swiper';
import { TabModule } from 'evm-ngx-weui/tab';
import { ToastModule } from 'evm-ngx-weui/toast';
import { ToptipsModule } from 'evm-ngx-weui/toptips';
import { UploaderModule } from 'evm-ngx-weui/uploader';

const MODULES = [
  CellModule,
  ButtonModule,
  FormModule,
  SliderModule,
  UploaderModule,
  ActionSheetModule,
  DialogModule,
  LoadmoreModule,
  ProgressModule,
  GalleryModule,
  PickerModule,
  SearchBarModule,
  TabModule,
  ToastModule,
  ToptipsModule,
  PopupModule,
  PTRModule,
  InfiniteLoaderModule,
  SidebarModule,
  SwiperModule,
  ChartG2Module,
  JWeiXinModule,
  AccordionModule,
  MaskModule,
  RatingModule,
  StepperModule,
  PaginationModule,
];

/**
 * @deprecated Use secondary entry eg: `import { ButtonModule } from 'evm-ngx-weui/button';`.
 */
@NgModule({ exports: MODULES })
export class WeUiModule {
  constructor() {
    warnDeprecation(
      "The `WeUiModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { ButtonModule } from 'evm-ngx-weui/button';`",
    );
  }
}
