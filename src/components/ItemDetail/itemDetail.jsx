const itemDetail = ({ detail }) => {
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        flexDirection: "column"
    }}
    >
        <img src={detail.img} alt={detail.name} width="200px" />
        <h2>{detail.id}</h2>
        <h3>{detail.price}</h3>
        <h3>Descripcion: {detail.description}</h3>
        <h3>Varietal: {detail.varietal}</h3>
        <h3>Stock: {detail.stock}</h3>
    </div>
    );
};

export default itemDetail