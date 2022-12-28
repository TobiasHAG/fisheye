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