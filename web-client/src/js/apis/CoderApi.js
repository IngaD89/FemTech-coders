export class CoderApi {

    getCoders() {
        return fetch("/coders")
            .then(response => response.json())
    }
}