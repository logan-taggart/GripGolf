<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Admin Panel</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <div class="content-wrapper">
          <div class="card-wrapper">
            <ion-card>

            <ion-card-header>
              <ion-card-title>Add New Event</ion-card-title>
            </ion-card-header>

            <ion-card-content>

              <ion-item>
                <ion-label position="floating">Event Date (YYYY-MM-DD)</ion-label>
                <br>
                <ion-input type="text" v-model="eventDate"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Event Time</ion-label>
                <br>
                <ion-input type="text" v-model="eventTime"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Location Name</ion-label>
                <br>
                <ion-input type="text" v-model="eventLocationName"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Address</ion-label>
                <br>
                <ion-input type="text" v-model="eventAddress"></ion-input>
              </ion-item>

              <ion-button class="divButton" expand="full" @click="addEvent">Add Event</ion-button>

            </ion-card-content>

          </ion-card>
  
          <ion-card>

            <ion-card-header>
              <ion-card-title>Add New Shop Item</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              
              <ion-item>
                <ion-label position="floating">Item Name</ion-label>
                <br />
                <ion-input v-model="itemName"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Item Price</ion-label>
                <br />
                <ion-input v-model="itemPrice"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Item Description</ion-label>
                <br />
                <ion-input v-model="itemDescription"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Item Image</ion-label>
                <br/><br/>
                <input type="file" @change="handleItemImageUpload">
              </ion-item>

              <ion-button class="divButton" expand="full" @click="addItem">Add Item</ion-button>

            </ion-card-content>

          </ion-card>
          </div>
  
          <ion-card>

          <ion-card-header>
            <ion-card-title>Events</ion-card-title>
          </ion-card-header>

          <ion-card-content>

            <ion-list>
              <ion-item v-for="(event, index) in events" :key="index">

                <ion-label>
                  <h2>{{ event.locationName }}</h2>
                  <p>{{ event.date }} - {{ event.time }} - {{ event.address }}</p>
                </ion-label>

                <ion-buttons slot="end">
                  <ion-button @click="editEvent(event, index)">Edit</ion-button>
                  <ion-button color="danger" @click="deleteEvent(index)">Delete</ion-button>
                </ion-buttons>

              </ion-item>
            </ion-list>

          </ion-card-content>
        </ion-card>
  
        <ion-card>
          
          <ion-card-header>
            <ion-card-title>Shop Items</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-list>
              <ion-item v-for="(item, index) in items" :key="index">
                <ion-label>
                  <h2>{{ item.name }}</h2>
                  <p>${{ item.price }}</p>
                  <p>{{ item.description }}</p>
                </ion-label>

                <ion-buttons slot="end">
                  <ion-button @click="editItem(item, index)">Edit</ion-button>
                  <ion-button color="danger" @click="deleteItem(index)">Delete</ion-button>
                </ion-buttons>

              </ion-item>
            </ion-list>

          </ion-card-content>
        </ion-card>
        </div>

      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  import { db, storage } from '../main';
  import { collection, getDocs, doc, setDoc, deleteDoc, query, orderBy } from "firebase/firestore";
  import { ref as storageRef, getStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
 
  import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonButtons
  } from '@ionic/vue';
  
  const events = ref([]);
  const items = ref([]);

  const eventDate = ref('');
  const eventTime = ref('');
  const eventLocationName = ref('');
  const eventAddress = ref('');

  const itemName = ref('');
  const itemPrice = ref('');
  const itemDescription = ref('');
  const itemImageFile = ref(null);

  const uploadImage = async (file, folder) => {
    const fileRef = storageRef(storage, `${folder}/${file.name}`);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  };

  const handleItemImageUpload = (event) => {
    const file = event.target.files[0];
    itemImageFile.value = file;
  };

  const fetchEvents = async () => {
    const q = query(collection(db, 'events'), orderBy('date'));
    const querySnapshot = await getDocs(q);
    events.value = querySnapshot.docs.map(doc => doc.data());
  };

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    items.value = querySnapshot.docs.map(doc => doc.data());
  };

  onMounted(() => {
    fetchEvents();
    fetchItems();
  });

  const addEvent = async () => {
    try {
      const eventRef = doc(db, 'events', eventDate.value);

      await setDoc(eventRef, {
        date: eventDate.value,
        time: eventTime.value,
        locationName: eventLocationName.value,
        address: eventAddress.value
      });

      console.log('Event added');

      eventDate.value = '';
      eventTime.value = '';
      eventLocationName.value = '';
      eventAddress.value = '';

      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const addItem = async () => {
    try {
      const itemRef = doc(db, 'items', itemName.value);
      const imageURL = itemImageFile.value ? await uploadImage(itemImageFile.value, 'item_images') : null;

      await setDoc(itemRef, {
        name: itemName.value,
        price: parseFloat(itemPrice.value),
        description: itemDescription.value,
        imageURL: imageURL
      });
      
      console.log('Item added');

      itemName.value = '';
      itemPrice.value = '';
      itemDescription.value = '';

    fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const editEvent = (event, index) => {};

  const deleteEvent = async (index) => {
    try {
      const eventToDelete = events.value[index];
      const docRef = doc(db, "events", eventToDelete.date);

      await deleteDoc(docRef);
      events.value.splice(index, 1);
      console.log("Event deleted");
    } catch (e) {
      console.error("Error deleting event: ", e);
    }
  };

  const editItem = (item, index) => {};

  const deleteItem = async (index) => {
    try {
      const itemToDelete = items.value[index];
      const docRef = doc(db, "items", itemToDelete.name);

      await deleteDoc(docRef);

      const firebaseStorage = getStorage();
      const fileRef = storageRef(firebaseStorage, itemToDelete.imageURL);

      await deleteObject(fileRef);
      items.value.splice(index, 1);
      console.log("Item and associated photo deleted successfully");
    } catch (error) {
      console.error("Error deleting item and photo:", error);
    }
  };
</script>
  
<style scoped>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: whitesmoke;
  }
  
  .divButton {
    background-color: #0D8E45;
  }
  
  ion-button {
    --background: transparent;
    margin: 5px 0;
    margin-top: 20px;
  }
  
  ion-button[color="danger"] {
    --background: #eb445a;
    --background-activated: #c0392b;
  }

  ion-button[color="primary"] {
    --background: #0D8E45;
  }
  
  ion-button:hover {
    --background-hover: #77b07e;
  }
  
  ion-buttons {
    display: flex;
    flex-direction: column;
  }

  ion-card {
    width: 100%;
    max-width: 400px;
    margin: 10px;
    border-radius: 8px;
    border: 1.5px solid black;
  }
  
  ion-card-content {
    padding: 20px;
  }

  ion-card-header {
    background-color: #0D8E45;
    border-radius: 0px;
  }
  
  ion-card-title {
    font-weight: bold;
    font-size: 1.2em;
    color: white;
  }
  
  ion-item {
    margin-bottom: 15px;
  }

  ion-item h2 {
    font-size: 1.1em;
    font-weight: bold;
  }

  ion-item p {
    font-size: 0.9em;
    color: #666;
  }
   
  ion-list {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    ion-card {
      flex: 1 1 calc(50% - 20px);
      max-width: none;
    }
  }
  
  @media (max-width: 767px) {
    ion-card {
      width: 100%;
    }
  }
</style>