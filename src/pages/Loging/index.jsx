import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {TextField, Typography} from "@mui/material";
import GDSEButton from "../../components/common/button";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.Login_Cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h4">Loging</Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="User Name" variant="outlined"/>
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined"/>
                    </div>
                    <div className={classes.button_container}>
                        <GDSEButton variant="contained" label="Loging"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)