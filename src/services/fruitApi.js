// https://www.fruityvice.com/#3

const getFruits = async () => {
    const response = await fetch('http://34.95.134.169:5566/fruits');
    const fruits = await response.json();
    console.log(fruits)
    return fruits;
};

const getFruit = async (idFruit) => {
    const response = await fetch(`hhttp://34.95.134.169:5566/fruit/${idFruit}`);
    const fruits = await response.json();
    return fruits;
};

export { getFruit, getFruits };
