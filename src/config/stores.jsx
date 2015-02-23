import Fluxible from 'fluxible';
import ApplicationStore from '../App/shared/stores/ApplicationStore';
import routes from './routes';


// Starts up the Stores Manager
let storesManager = new Fluxible({ appComponent: routes });

// Register each Store Invidually
storesManager.registerStore(ApplicationStore);

export default storesManager;
