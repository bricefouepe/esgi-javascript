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
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9-]/g, ' ');
    const array = str.toLowerCase().split(" ");
    for (let i=0; i<array.length;){
        array[i] = ucfirst(array[i++]);
    }

    return array.join("");
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9-]/g, ' ');
    const array = str.toLowerCase().split(" ");
    for (let i=0; i<array.length;){
        array[i] = (array[i++]).toLowerCase();
    }
    return array.join("_");
}


