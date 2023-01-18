function MediaFactory(data) {
    const { price, date, likes, title, photographerId, video, id } = data;

    const imageUrl = `assets/media/${data.image}`;
    const videoUrl = `assets/media/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        // link.setAttribute("href", lien);
        // if(imageUrl === false) {
        //    créer l'img
        // } else {
        //    créer la video
        // }
        const img = document.createElement( 'img' );
        img.setAttribute("src", imageUrl)
        img.setAttribute("width", 500)
        img.setAttribute("height", 500)
        const div = document.createElement( 'div');
        div.className = "photos-grid-text";
        const div2 = document.createElement( 'div' );
        div2.className = "photos-grid-likes";
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p = document.createElement( 'p' );
        // p.className = "";
        p.textContent = likes;
        const i = document.createElement( 'i' );
        i.className = "fa-solid fa-heart";
        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(div);
        div.appendChild(div2);
        div.appendChild(h2);
        div2.appendChild(p);
        div2.appendChild(i);
        return (article);
    }

    return {image: imageUrl, video: videoUrl, id, photographerId, price, date, getMediaCardDOM }
}

export default MediaFactory