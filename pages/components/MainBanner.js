

import React, { useEffect, useState } from "react"

// material ui things
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

//redux things
import {connect} from 'react-redux';
import {get_api_load} from '../../redux/actions/get_api_actions';
import {post_api_load} from '../../redux/actions/post_api_actions';

//custom styles
import styles from "./MainBanner.module.css"

//custom components
import PostForm from "./PostForm"

const MainBanner = (props) => {

    const {

    } = props

    const [hide_form, set_hide_form] = useState(false)

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
                        <CardActionArea onClick={() => { window.location.href = 'https://randomuser.me/api' }}>
                            <CardHeader
                                title="Info obtenida de api pública"
                                subheader="Presiona aqui para ver la api"
                            />
                        </CardActionArea>

                        <CardContent>
                            {props.is_get_api_loading ? 
                                <Skeleton height={"160px"}/>
                                        :
                                "Dumb data result: "+props.get_api_data
                            }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card>
                        <CardActionArea onClick={() => { window.location.href = '/api/postHandler' }}>
                            <CardHeader
                                title="Form destinado a api pública"
                                subheader="Presiona aqui para ver la api"
                            />
                        </CardActionArea>

                        <CardContent >
                            
                            {hide_form ? 
                                props.is_post_api_loading ? 
                                    <div className={styles.centered_row}>
                                        <CircularProgress />
                                    </div>
                                         :
                                    "Dumb post response: "+props.post_api_data
                                :   
                                <PostForm 
                                    hide = {false}
                                    onSubmit={(data) => {
                                        // Do visualization stuff
                                        console.debug("Form data:", data)
                                        set_hide_form(true)
                                        props.post_api_load({form_data:data})
                                }}/>
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

const mapStateToProps = state => {
    //console.log(state) // state
    return {
        //form_data: state.form.PostForm,
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