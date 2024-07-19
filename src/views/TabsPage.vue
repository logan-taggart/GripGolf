<template>

  <ion-tabs>

    <ion-router-outlet></ion-router-outlet>

    <ion-tab-bar slot="bottom">

      <ion-tab-button tab="home" href="/home" layout="icon-top">
        <ion-icon :icon="home"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>
  
      <ion-tab-button tab="events" href="/events" layout="icon-top">
        <ion-icon :icon="calendar"></ion-icon>
        <ion-label>Events</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="shop" href="/shop" layout="icon-top">
        <ion-icon :icon="pricetag"></ion-icon>
        <ion-label>Shop</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="contact" href="/contact" layout="icon-top">
        <ion-icon :icon="call"></ion-icon>
        <ion-label>Contact</ion-label>
      </ion-tab-button>

    </ion-tab-bar>

  </ion-tabs>

</template>

<script setup lang="ts">
  import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/vue';
  import { home, calendar, pricetag, call } from 'ionicons/icons';
</script>

<style scoped>
  ion-content {
    padding-bottom: 100px;
  }

  ion-tab-bar {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    max-width: 600px;
    border-radius: 16px;
    border: 0.1px solid black;
    background-color: #fff;
    z-index: 10;
  }

  ion-tab-button {
    --color: var(--ion-color-medium);
    --color-selected: #0D8E45;
    background-color: transparent;

    &::before {
      background-color: transparent;
      display: block;
      content: "";
      margin: 0 auto;
      width: 20px;
      height: 2px;
    }

    &.tab-selected::before {
      background-color: #0D8E45;
    }
  }
</style>