function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toLocaleUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i=0; i<array.length;){
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");

}

function camelCase(str) {
    str = str.replace(/[^a-zA-Z ]/g, ' ');
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i=0; i<array.length;){
        array[i] = ucfirst(array[i++]);
    }

    return array.join("");
}


