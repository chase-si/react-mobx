import api from './index';

export function getConfiguration() {
    return api.get('/app/configuration');
}
