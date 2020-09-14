// Copyright Nova Code (http://www.novacode.nl)
// See LICENSE file for full licensing details.

import { OdooFormioForm } from "./formio_form.js";

const { xml } = owl.tags;
const { whenReady } = owl.utils;

class App extends OdooFormioForm {
    static template = xml`<div id="formio_form"></div>`;

    setUrls() {
        this.config_url = '/formio/form/' + this.form_uuid + '/config';
        this.submission_url = '/formio/form/' + this.form_uuid + '/submission';
        this.submit_url = '/formio/form/' + this.form_uuid + '/submit';
    }
}

function setup() {
    const app = new App();
    app.mount(document.getElementById('formio_form_app'));
}

whenReady(setup);