import styles from './Search.module.css'

const SearchBar = ({ ...rest }) => {
  return (
    <div input className={styles.coin_search}>
       <input className={styles.coin_input} {...rest} />
    </div>
  );
};

export default SearchBar;


