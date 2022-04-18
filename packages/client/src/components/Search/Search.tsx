import "./Search.scss";
import * as React from "react";
import { SearchProps } from "./models/SearchTypes";
import { Input, Select } from "antd";

const Search = (props: SearchProps) => {
    const { nameQuery, pokemonTypesList, nameQueryHandler, typeQueryHandler } = props;
    const { Option } = Select;

    return (
        <div className="Search">
            <Input
                type="text"
                size="large"
                placeholder="Search Pokémon by name"
                value={nameQuery}
                onChange={e => nameQueryHandler(e.target.value)}
            />
            <Select
                className="Search__dropdown"
                defaultValue="All types"
                size="large"
                dropdownMatchSelectWidth
                onChange={(e) => typeQueryHandler(e)}
            >
                <Option key="all" value="">All types</Option>
                {pokemonTypesList && pokemonTypesList.pokemonsTypes.map((type, idx) => (
                    <Option key={idx} value={type}>{type}</Option>
                ))}
            </Select>
        </div>
    );
}

export default Search;