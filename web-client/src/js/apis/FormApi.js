export class FormApi {

    getForm() {
        return fetch("/coders/add")
            .then(response => response.json())
    }
}