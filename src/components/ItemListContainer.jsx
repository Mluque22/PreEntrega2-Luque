const ItemListContainer=({greeting, texto})=>{
    return (
        <div className="itemContainer" style={{ height: '100%', paddingBottom: '60px', boxSizing: 'border-box' }}>
            <h1 className="text-center">{greeting}: <span style={{ textTransform: 'capitalize', color: 'grey' }}></span></h1>
            <p className="pTexto">{texto}</p></div>
);};
export default ItemListContainer