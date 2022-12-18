import React,{useState, useRef, useEffect} from 'react'
import { StyleSearchBar, MagnifierImg, SearchBoxStyle } from './styles';
import Magnifier from "../../../assets/magnifier.svg";
import { requestSearch } from '../../../apis/index';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [isSuccess, setIsSuccess] = useState(true);
    const navigate = useNavigate();
    
    console.log(search)
    const input = useRef();


    const searchQuery = (query) => {
        if (query === "") return;
        try {
            requestSearch(query)
                .then((res) => {
                    // if (res.data === []) setIsSuccess(false);
                    // else setIsSuccess(true);

                    setResult(res.data);
                    console.log(search);
                    console.log(result);
                })
                .catch((e) => {
                    setResult([]);
                    setIsSuccess(false);
                });
        } catch (err) {
            console.log(err);
        } finally {
        }
    };


    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // useEffect(() => {
    //     setResult();
    //     setSearch();
    // })

    // const onClickSearchHandler = () => {
    //     navigate("/search");
    // }

    return (
        <>
            <SearchBoxStyle>
                <StyleSearchBar
                    ref={input}
                    value={search}
                    onChange={onChangeSearch}
                    onKeyDown={() => {
                        if (window.event.keyCode === 13) {
                            searchQuery(search);
                            navigate("/search", {
                                state: {
                                    content: search,
                                    searchResult: result,
                                }
                            });
                            setSearch("");
                            
                        }
                    }}
                    onSubmit={(e)=>{
                        searchQuery(search);
                        setSearch(e.target.value);
                        input.current.value = "";
                    }}
                    placeholder="검색어를 입력하세요">
                </StyleSearchBar>
                <MagnifierImg src={Magnifier}></MagnifierImg>
            </SearchBoxStyle>
            {search !== "" && isSuccess && result.length > 0 }
            
        </>
    );
};

export default SearchBar