import styled from 'styled-components'

const SearchArea= styled.input`
    background-image: url('https://universidadeniltonlins.com.br/wp-content/plugins/supportboard/supportboard/media/icons/png/icon-search.png');
    background-position: 10px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-color: rgb(245, 244, 244);
    border: none;
    height: 50px;
    max-width: 100%;
    margin-bottom: 10%;
    border-radius: 10px;
    padding: 0px 20px 0px 50px;
    font-size: 20px;

    &:focus{
        outline: none;
        background-color: rgb(196, 193, 193);
    }
`
 export default SearchArea