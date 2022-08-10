import http from 'k6/http';
import { sleep } from 'k6';
import { printMessage } from './utils.js';

export const options = {
    teardownTimeout: '200s',
    vus : 10,
    duration : '30s',
}

export default function () {
    printMessage();
    http.get('https://kubeshop.github.io/testkube/');
    sleep(1);
}
