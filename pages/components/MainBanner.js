

import React, { useEffect, useState } from "react"

// material ui things
import styles from "./MainBanner.module.css"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';

//redux things
import {connect} from 'react-redux';
import {get_api_load} from '../redux/actions/get_api_actions';
import {post_api_load} from '../redux/actions/post_api_actions';

const MainBanner = (props) => {

    const [hide_post_button, set_hide_post_button] = useState(false)

    useEffect(() => {

        // load the "get api" only on load using the redux middleware:
        props.get_api_load()

    }, [props.is_get_api_loading]);

    return (
        <div className={styles.text_container}>
            <h1 className={styles.tittle1}>
                Bienvenido a la aplicacion de Juan David Ramirez
        </h1>
            <h3 className={styles.tittle3}>
                Encuentra el código fuente <a href="https://github.com/juanda2222/cryptoanalisis_test.git">aqui</a>
            </h3>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={5}>
                    <Card>
                        <CardActionArea onClick={() => { window.location.href = 'https://whatismyipaddress.com/' }}>
                            <CardHeader
                                title="Info obtenida de api pública"
                                subheader="Presiona aqui para ver la api"
                            />
                        </CardActionArea>

                        <CardContent>
                            Some content bby bby hey this is content  you nok what to do
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <CardActionArea onClick={() => { window.location.href = 'https://whatismyipaddress.com/' }}>
                            <CardHeader
                                title="Form destinado a api pública"
                                subheader="Presiona aqui para ver la api"
                            />
                        </CardActionArea>

                        <CardContent>
                            {hide_post_button ? 
                                props.is_post_api_loading ? 
                                    <Skeleton variant="rect" width={"100%"} height={40}/> : 
                                    props.post_api_data
                                :   <Button 
                                        variant="contained"
                                        onClick={()=>{
                                            set_hide_post_button(true)
                                            props.post_api_load()
                                        }}>
                                        Post Data
                                    </Button>}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

const mapStateToProps = state => {
    console.log(state) // state
    return {
        is_get_api_loading: state.get_api.is_loading,
        get_api_data:state.get_api.api_data,
        is_post_api_loading: state.post_api.is_loading,
        post_api_data:state.post_api.api_data,
    }
};

const mapDispatchToProps = {
    get_api_load: get_api_load,
    post_api_load: post_api_load,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBanner);