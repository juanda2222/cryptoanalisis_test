
import Router from 'next/router'

import React, { useEffect, useState } from "react"

import styles from "./MainBanner.module.css"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

export default (props) => {

    const [is_get_loading, set_is_get_loading] = useState(true)
    
    useEffect(() => {

        // load the "get api" only on load:


        set_is_get_loading(false)
    }, [is_get_loading]);

    return (
        <main className={styles.text_container}>
            <h1 className={styles.tittle1}>
                Bienvenido a la aplicacion de Juan David Ramirez
        </h1>
            <h3 className={styles.tittle3}>
                Encuentra el código fuente <a href="https://github.com/juanda2222/cryptoanalisis_test.git">aqui</a>
            </h3>
            <Grid>
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
                <Card>

                </Card>
            </Grid>

        </main>
    )
}