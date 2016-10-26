import { ingredients as i } from "./ingredients-mock";

export const pizzas = [
    {
        id: 0,
        name: "Margherita",
        ingredients: [i[0], i[1]],
        price: 15.50
    },
    {
        id: 1,
        name: "Prosciutto",
        ingredients: [i[0], i[1], i[4]],
        price: 16.20
    },
    {
        id: 2,
        name: "Tonno",
        ingredients: [i[0], i[1], i[2], i[3]],
        price: 17
    },
    {
        id: 3,
        name: "Calzone",
        ingredients: [i[0], i[1], i[3], i[4]],
        price: 18
    },
    {
        id: 4,
        name: "Hawaii",
        ingredients: [i[0], i[1], i[4], i[5]],
        price: 18.5
    },
    {
        id: 5,
        name: "Diavolo",
        ingredients: [i[0], i[1], i[6], i[7]],
        price: 19.90
    },
    {
        id: 6,
        name: "Fancylicious",
        ingredients: [i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8]],
        price: 25.50
    }
];