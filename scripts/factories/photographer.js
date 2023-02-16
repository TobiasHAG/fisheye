/**
 * It takes a data object as an argument, and returns an object with the same properties as the data
 * object, plus a few methods
 * @param data - the data object that we get from the API
 * @returns The function getUserCardDOM, getSingleUserCardDOM and getSingleUserNameDOM
 */

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const lien = `photographer.html?id=${id}`;

    /**
     * It creates a DOM element for a user card, and returns it
     * @returns the article element with all the child elements.
     */

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

    /**
     * It creates a div, adds a button, a title, a description, a place, and an image, and returns the
     * div
     * @returns A div with a button, an image, a title, a place and a description.
     */

    function getSingleUserCardDOM() {
        const div = document.createElement( 'div' );
        div.className = "photograph-header-div";
        const button = document.createElement( 'button' );
        button.className = "contact_button";
        button.textContent = "Contactez-moi";
        button.setAttribute("onclick", "displayModal()");
        const div2 = document.createElement( 'div' );
        div2.className = "div-photographer-info";
        const titre = document.createElement( 'h1' );
        titre.textContent = name;
        const p1 = document.createElement( 'p' );
        p1.className = "photographer_description";
        p1.textContent = tagline;
        const place = document.createElement( 'p' );
        place.className = "photographer_place";
        place.textContent = city + ', ' + country;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const prix = document.querySelector(".price");
        prix.textContent = price + " € / jour";
        div.appendChild(div2);
        div.appendChild(button);
        div.appendChild(img);
        div2.appendChild(titre);
        div2.appendChild(place);
        div2.appendChild(p1);
        return (div);
    }

    /**
     * It creates a div element, adds a class name to it, creates an h2 element, adds a class name to
     * it, adds the name of the photographer to the h2 element, and then adds the h2 element to the div
     * element
     * @returns the div element with the h2 element nested inside.
     */
    
    function getSingleUserNameDOM() {
        const div = document.createElement( 'div' );
        div.className = "modal-photographer-div";
        const h2 = document.createElement( 'h2' );
        h2.className = "modal-photographer-name";
        h2.textContent = name;
        div.appendChild(h2);
        return (div);
    }

    return { name, picture, id, getUserCardDOM, getSingleUserCardDOM, getSingleUserNameDOM }
}

export default photographerFactory