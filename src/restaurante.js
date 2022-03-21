const loadInfo=()=>{
    return `<div id='info'><ul><li id='home'>Home</li><li id='contact'>Contact</li><li id='menu'>Menu</li></ul></div>`;
}
const loadPage=()=>{
    return `
        <h1>Restaurante 5 Pacos</h1>
        <p>Aquí lo mejor</p>
    `;
}
const loadContact=()=>{
    return `
        <h1>Contact</h1>
        <p>666666666</p>
    `;
}
const loadMenu=()=>{
    return `
        <h1>Menu</h1>
        <ul>
        <li>Menú del día</li>
        <li>Menú carnívoro</li>
        <li>Menú vegano</li>
        </ul>
    `;
}
export {loadInfo, loadPage, loadContact, loadMenu};