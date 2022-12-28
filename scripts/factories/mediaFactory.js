function MediaFactory(data) {
    const { price, date, likes, title, photographerId, id } = data;

    const image = `assets/media/${image}`;
    const video = `assets/media/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        // link.setAttribute("href", lien);
        const img = document.createElement( 'img' );
        img.setAttribute("src", image)
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p = document.createElement( 'p' );
        // p.className = "";
        p.textContent = likes;
        const i = document.createElement( 'i' );
        i.className = "fa-solid fa-heart";
        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(i);
        return (article);
    }

    return {image, video, id, photographerId, price, date, getMediaCardDOM }
}

export default MediaFactory