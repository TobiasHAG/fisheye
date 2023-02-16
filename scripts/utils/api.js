/* I'm trying to fetch data from an API and then create a new object with the photographer's
information and the media information.
</code> */

class API {
    baseURL = "data/photographers.json";
    _photographers = [];
    _photographer = {};
    userCurrentId = null;
    PhotographersError = {
        "name": "Unknown",
        "id": 0,
        "city": "Unknown",
        "country": "Unknown",
        "tagline": "Unknown",
        "price": 0,
        "portrait": ""
    };

    /* Fetching data from the API. */
    async fetchData() {
        try {
            const res = await fetch(this.baseURL);
            const datas = await res.json();
            this._photographers = datas;
            return datas;
        } catch(err) {
            console.log(err);
            return [PhotographersError]; // ou catch (error) { console.log(error) }
        }
    };

/* Creating a new object with the photographer's information and the media information. */
    _buildPhotograph(id) {
        const userId = Number(id);
        this._photographer = this._photographers.photographers.find(
            (item) => item.id === userId
        );
        const photographerMedia = this._photographers.media.filter(
            (item) => item.photographerId === userId
        ); // [{}; {}]

    this._photographer = {
        ...this._photographer,
        medias: photographerMedia,
        };
    };

    get photographers() {
        return this._photographers;
    }

    get photographer() {
        const params = new URL(document.location).searchParams;
        const id = params.get("id");

        this._buildPhotograph(id);
        return this._photographer;
    }
}

const api = new API();
export default api;