function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const lien = 'photographer.html';

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", lien);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        p.className = "photographer_city_country";
        p.textContent = city + ', ' + country;
        const p2 = document.createElement( 'p' );
        p2.className = "photographer_tagline";
        p2.textContent = tagline;
        const p3 = document.createElement( 'p' );
        p3.className = "photographer_price";
        p3.textContent = price +'€/jour';
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(p3);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}