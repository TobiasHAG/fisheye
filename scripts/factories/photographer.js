function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const lien = `photographer.html?id=${id}`;

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

    function getSingleUserCardDOM() {
        const div = document.createElement( 'div' );
        const titre = document.createElement( 'h1' );
        titre.textContent = name;
        const p1 = document.createElement( 'p' );
        p1.className = "photographer_tagline";
        p1.textContent = tagline;
        div.appendChild(titre);
        div.appendChild(p1);
        return (div);
    }

    return { name, picture, id, getUserCardDOM, getSingleUserCardDOM }
}

export default photographerFactory