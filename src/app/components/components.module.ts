import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddItemModalComponent } from './modals/add-item-modal/add-item-modal.component'
import { CustomImageUploadComponent } from './util/custom-image-upload/custom-image-upload.component'
import { DrawerComponent } from './drawer/drawer.component';
import { MenuItemCardComponent } from './cards/menu-item-card/menu-item-card.component'
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { DrawerDirective } from './drawer/drawer.directive'
import { DemoComponent } from './demo/demo.component';
import { DrawerPreviewDirective } from './drawer/drawer-preview.directive';
import { CartComponent } from './drawer/cart/cart/cart.component';
import { CartPreviewComponent } from './drawer/cart/cart-preview/cart-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddItemModalComponent,
    CartComponent,
    CartPreviewComponent,
    CustomImageUploadComponent,
    DemoComponent,
    DrawerComponent,
    MenuItemCardComponent,
    MenuItemsComponent,
    DrawerDirective,
    DrawerPreviewDirective
  ],
  exports: [
    AddItemModalComponent,
    CartComponent,
    CartPreviewComponent,
    CustomImageUploadComponent,
    DemoComponent,
    DrawerComponent,
    MenuItemCardComponent,
    MenuItemsComponent
  ]
})

export class ComponentsModule {}
