export default async function getWod() {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    let key = Math.floor(Math.random() * Object.keys(data).length);
    let girl = Object.keys(data)[key];
    return data[girl];
}