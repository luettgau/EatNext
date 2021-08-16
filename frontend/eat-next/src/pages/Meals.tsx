import {
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { add, person } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Meals.css';

const Meals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical='top' horizontal='end' edge slot='fixed'>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side='end'>
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side='end'>
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

        <IonList>
          <IonItem>
            <IonLabel>Input:</IonLabel>
            <IonInput placeholder='Your Input'></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot='end'></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel>Radio</IonLabel>
            <IonRadio slot='end'></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot='start' />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Meals;
