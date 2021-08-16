import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
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
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Meals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Meals' />
      </IonContent>
    </IonPage>
  );
};

export default Meals;
