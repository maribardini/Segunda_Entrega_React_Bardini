import './style.css'

const CartWidget = () => {
    return (
        <div>
            <img className="img-carrito" src="/img/carrito.png" alt="Carrito" />
            <span id="NumeroContador">4</span>
        </div>
    )
}

export default CartWidget;