<template>

  <ion-page>

    <ion-header>

      <ion-toolbar class="larger-header">
          <img src="../images/gripGolfDogLogo.png" class="companyLogo" slot="start"></img>
          <ion-title class="companyTitle">Get A Grip Golf</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content>

      <div class="title">
        <h1>Shop</h1>
      </div>
      
      <div class="event-wrapper">
        
        <ion-card class="event-card" v-for="(item, index) in items" :key="index">

          <div class="img-wrapper">
            <ion-img :src="item.imageURL" alt="Item Image" class="itemImg"></ion-img>
          </div>

          <hr class="divider">

          <h3>{{ item.name }}</h3>
          <h3>${{ item.price }}</h3>
          <p>{{ item.description }}</p>

        </ion-card>

      </div>

    </ion-content>  

  </ion-page>

</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  import { db } from '../main';
  import { collection, getDocs } from 'firebase/firestore';

  import { IonContent, IonCard, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/vue';

  const items = ref([]);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'));
    items.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  onMounted(fetchItems);
</script>

<style scoped>
  .companyLogo {
    width: 60px;
    height: 60px;
    margin-left: 5%;
    background: transparent;
  }

  .companyTitle {
    flex: 1;
    justify-content: center;
    color: #fff;
  }
  
  .divider {
    border: 0;
    border-top: 1px solid #0D8E45;
    margin: 10px 0;
  }

  .event-card {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1.5px solid #0D8E45;
  }

  .event-card h3 {
    font-size: 14px;
    margin: 5px 0;
    color: #333;
  }

  .event-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    gap: 10px 20px;
    padding: 0 20px;
    padding-bottom: 15%;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  .img-wrapper {
    margin-bottom: 10px;
  }

  ion-content {
    --background: #f8f9fa;
    padding: 40px 20px;
    padding-bottom: calc(40px + var(--ion-safe-area-bottom));
    overflow-y: auto;
  }

  ion-toolbar {
    --background: #0D8E45;
    color: white;
  }

  .itemImg {
    border: 3px solid green;
    border-radius: 2px;
    width: 60%; 
    max-width: 100%; 
    max-height: 5%;
    height: auto; 
    display: block; 
    margin: 0 auto; 
  }

  .larger-header {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px 0px black;
    background-color: #0D8E45;
  }

  .title {
    background: #0D8E45;
    text-align: center;
    padding: 60px 20px;
    color: #fff;
    border-bottom: 2px solid #0D8E45;
  }

  .title h1 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  @media (max-width: 600px) {
    .event-wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .event-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 901px) {
    .event-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>