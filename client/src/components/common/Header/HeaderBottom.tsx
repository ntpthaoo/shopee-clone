import React from "react";
import { Box, Hidden } from "@material-ui/core";
import logo from "../../../assets/images/shopee-logo.png";
import SearchBox from "./SearchBox";
import HeaderCart from "./HeaderCart";

const HeaderBottom = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box width="162px">
                <img src={logo} alt="" style={{ maxWidth: "100%" }} />
            </Box>
            <Hidden smDown>
                <SearchBox />
            </Hidden>
            <HeaderCart />
        </Box>
    );
};

export default HeaderBottom;