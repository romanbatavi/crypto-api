const Coins = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  return (
    <div className='coin_container'>
      <div className='coin_row'>
        <div className='coin'>
          <img src={image} alt={name} className='coin_image' />
            <h1 className='coin_h1'>{name}</h1>
            <p className='coin_symbol'>{symbol}</p>
        </div>
      </div>
    </div>
  )
}

export default Coins;
