import React from "react";
import { useMediaQuery, useTheme} from '@mui/material';

import './Section2Column.css'


function TwoColumn(props) {
    const theme = useTheme();
    const mediaSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {
                mediaSM ? (
                    <div className="twoColumnMobile">
                        <div className="colMobile">{props.leftColumn}</div>
                        <div className="colMobile">{props.rightColumn}</div>

                    </div>

                ) : (
                    <div className="twoColumnDesktop">
                        <div className="colDesktop">{props.leftColumn}</div>
                        <div className="colDesktop">{props.rightColumn}</div>
                    </div>
                )
            }
        </>
    )

}

export default TwoColumn;