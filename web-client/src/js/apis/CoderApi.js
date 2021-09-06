export class CoderApi {

   /* editCoder(coder){
        return fetch(`/coders/edit/${id}`,
            {
               method: (coder.id) ? 'PUT' : 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(coder)
            }
            )
    }*/

    saveCoder(coder){
        return fetch("/add",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(coder)
            }

            )
    }

    getCoders() {
        return fetch( "/")
            .then(response => response.json())
    }
}