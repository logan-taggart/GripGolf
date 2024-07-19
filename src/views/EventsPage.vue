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
        <h1>Our Upcoming Events:</h1>
      </div>
        
      <div class="event-wrapper">

      <ion-card v-for="event in events" :key="event.id" class="event-card">

        <div style="width: 100%">
          <iframe :src="getMapSrc(event.address)"
            width="100%"
            height="250"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
          </iframe>
        </div>

          <hr class="divider" />

          <h3>{{ event.locationName }}</h3>
          <h3>{{ event.formattedDate }}</h3>
          <h3>{{ event.time }}</h3>

      </ion-card>

        </div>

    </ion-content>  

  </ion-page>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  import { db } from '../main';
  import { collection, getDocs } from 'firebase/firestore';
  
  import { IonContent, IonCard, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

  const events = ref([]);

  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const today = getLocalDate();

    events.value = querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      return {
        id: doc.id,
        ...data,
        formattedDate: formatDate(data.date)
      };
    })
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  };

  const formatDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [year, month, day] = dateString.split('-');
    const monthName = monthNames[parseInt(month) - 1];
    
    return `${monthName} ${day}, ${year}`;
  };

  const getLocalDate = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();

    now.setMinutes(now.getMinutes() - offset);

    return now.toISOString().split('T')[0];
  };

  const getMapSrc = (address) => {
    return `https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${encodeURIComponent(address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
  };

  onMounted(() => {
    fetchEvents();
  });
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
    margin: 15px 0;
  }

  .event-card {
    width: calc(50% - 40px);
    padding: 15px;
    margin: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1.5px solid #0D8E45;
  }

  .event-card h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  .event-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 15%;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  ion-content {
    --background: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px; 
    padding-bottom: calc(40px + var(--ion-safe-area-bottom));
    overflow-y: auto;
  }

  ion-toolbar {
    --background: #0D8E45;
    color: white;
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

  @media (max-width: 1200px) {
    .event-card {
      width: calc(50% - 40px);
    }
  }
  
  @media (max-width: 768px) {
    .event-card {
      width: calc(100% - 40px);
    }
  }
</style>