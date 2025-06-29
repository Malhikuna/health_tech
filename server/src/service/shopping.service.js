import {validate} from "../validation/validation.js";
import {getOnlineShopValidation} from "../validation/shopping.validation.js";
import axios from "axios";
import {buildOverpassQuery} from "../util/overpass.js";
import {getDistanceInKm} from "../util/distance.js";

const getOnlineShop = async (ingredient) => {
  ingredient = validate(getOnlineShopValidation, ingredient);

  const ingredientWord = ingredient.toLowerCase().split(" ");

  let ingredientWords = "";

  for (let i = 0; i < ingredientWord.length; i++) {
    if (i === ingredientWord.length - 1) {
      ingredientWords += `${ingredientWord[i]}`;
    } else {
      ingredientWords += `${ingredientWord[i]}+`;
    }
  }

  const tokopediaUrl = `https://www.tokopedia.com/search?navsource=home&q=${ingredientWords}&source=universe&st=product`

  const shopeeUrl = `https://shopee.co.id/search?keyword=${ingredientWords.replaceAll('+', '%20')}`

  return {
    namaBahan: ingredient,
    shoppingLinks: [
      {
        platform: "Tokopedia",
        url: tokopediaUrl,
      },
      {
        platform: "Shopee",
        url: shopeeUrl,
      }
    ]
  }
}

const getNearbyOfflineShop = async (request) => {
  const {lat, lon, radius, type} = validate(getOnlineShopValidation, request);

  const overpassUrl = 'https://overpass-api.de/api/interpreter';
  const overpassQuery = buildOverpassQuery(lat, lon, radius, type);

  const response = await axios.post(overpassUrl, overpassQuery, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  const osmData = response.data;

  const places = osmData.elements.map(element => {
    const location = element.type === 'way' ? element.center : element;

    return {
      osm_id: element.id,
      name: element.tags.name || 'Nama tidak tersedia',
      lat: location.lat,
      lon: location.lon,
      tags: element.tags
    };
  });

  const placesWithDistance = places.map(place => ({
    ...place,
    distance_km: getDistanceInKm(lat, lon, place.lat, place.lon)
  }));

  placesWithDistance.sort((a, b) => a.distance_km - b.distance_km);

  return {}
}

export default {getOnlineShop, getNearbyOfflineShop}