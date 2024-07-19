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
        <h1>Contact Us</h1>
      </div>

      <div class="content-wrapper">
        <div class="cards-container">
            
          <ion-card class="contact-card" href="tel:2089811201">
            <ion-icon :icon="call" class="icon phone-icon"></ion-icon>
            <hr class="divider">
            <h5>(208) 981-1201</h5>
          </ion-card>
  
          <ion-card class="contact-card" href="mailto:gripgolf208@gmail.com">
            <ion-icon :icon="mail" class="icon mail-icon"></ion-icon>
            <hr class="divider">
            <h5>gripgolf208@gmail.com</h5>
          </ion-card>
  
          <ion-card class="contact-card social-card" href="https://www.facebook.com/profile.php?id=61560908600765&mibextid=LQQJ4d">
            <ion-icon :icon="logoFacebook" class="icon facebook-icon"></ion-icon>
            <hr class="divider">
            <h5>Facebook</h5>
          </ion-card>
  
          <ion-card class="contact-card social-card" href="https://www.instagram.com/gripgolf208?igsh=bjhybTV3cmFycjQ4&utm_source=qr">
            <ion-icon :icon="logoInstagram" class="icon instagram-icon"></ion-icon>
            <hr class="divider">
            <h5>Instagram</h5>
          </ion-card>

        </div>
      </div>

    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
  import { IonContent, IonCard, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
  import { call, mail, logoFacebook, logoInstagram } from 'ionicons/icons';
</script>
  
<style scoped>
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-bottom: 15%;
  }

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

  .contact-card {
    flex: 1 1 calc(50% - 20px);
    padding: 15px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1.5px solid #0D8E45;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-height: 175px;
  }

  .contact-card a {
    color: #007bff;
    text-decoration: none;
  }

  .contact-card h6 {
    font-size: 18px;
    margin: 0;
    color: #007bff;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
  }

  .divider {
    width: 80%;
    border: 0;
    border-top: 1px solid #0D8E45;
    margin-left: 10%;
  }

  .facebook-icon {
    font-size: 48px;
    color: #007bff;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  .icon {
    font-size: 48px;
    margin-bottom: 10px;
  }

  .instagram-icon {
    font-size: 48px;
    color: #c13584;
  }
  
  ion-content {
    --background: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  
  .mail-icon, .phone-icon {
    font-size: 48px;
    color: black;
  }
  
  .social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .social-card span {
    font-size: 18px;
    color: #333;
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
  
  @media (max-width: 768px) {
    .contact-card {
      flex: 1 1 calc(100% - 20px);
    }
  }
</style>