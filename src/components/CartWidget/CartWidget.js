import cartImg from '../../assets/pngwing.com.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='menu-navbar__logo'>
            <img className='menu-navbar__img' src={cartImg} alt='cart-widget'/>
        </div>
    )
}

export default CartWidget