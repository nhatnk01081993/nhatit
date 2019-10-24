import React from "react";
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';

export default function MenuInfo() {
    return (
        <div style={{ width: '100%', height: 35 }}>
            <Box color="primary.main" display="flex" justifyContent='center' p={1} bgcolor="palevioletred">
                <Box display="flex" justifyContent='center' flexDirection="row" flex={1}>
                    <PhoneIcon color='primary' />
                    <Typography variant="subtitle1" component="h6" >
                        : 0762605363
                    </Typography>
                </Box>
                <Box display="flex" justifyContent='center' flexDirection="row" flex={1}>
                    <LocationOnIcon fontSize='small' color='primary' />
                    <Typography variant="subtitle1" component="h6">
                        : 79 Trần Quốc Toản - Tây Lộc - Huế
                    </Typography>
                </Box>
                <Box display="flex" flex={1} justifyContent='center' flexDirection="row">
                    <FacebookIcon color='primary' />
                    <Typography variant="subtitle1" component="h6">
                        : fb.com/nhatit
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}