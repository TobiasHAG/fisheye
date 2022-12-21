class API {

    _photographers = [];
    _photographer = [];
    photographerMedia = [];
    PhotographersError = [{
        "name": "Unknown",
        "id": 0,
        "city": "Unknown",
        "country": "Unknown",
        "tagline": "Unknown",
        "price": 0,
        "portrait": ""
    }];

    async fetchData() {
        try {
            photographers = fetch(`data/photographers.json`);
            return photographers.json();
        } catch {
            return this.PhotographersError; // ou catch (error) { console.log(error) }
        }
    };

    _buildPhotograph(id) {
        userId = Number(id);
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