class API {
    baseURL = "data/photographers.json";
    photographers = [];
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
            this.photographers = datas;
            return datas;
        } catch(err) {
            console.log(err);
            return [PhotographersError]; // ou catch (error) { console.log(error) }
        }
    };

    _buildPhotograph(id) {
        const userId = Number(id);
        this._photographer = this.photographers.photographers.find(
            (item) => item.id === userId
        );
        const PhotographerMedia = this.photographers.media.filter(
            (item) => item.photographerId === userId
        ); // [{}; {}]

    this.photographer = {
        ...this.photographer,
        medias: photographerMedia,
        };
    };

    get photographers() {
        return this.photographers;
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