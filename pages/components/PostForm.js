

import React from "react"

//material ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//redux related
import { Control, Form } from 'react-redux-form';

//custom styles
import styles from "./MainBanner.module.css"


const PostForm = (props) => {

    return (
            <Form  
                model={"post_form"}
                onSubmit={props.onSubmit}> {/*// this one is passed by the form middleware*/}
                <div className={styles.centered_column}>
                    <Control 
                        component={TextField} 
                        model="post_form.firstName" 

                        type="text" 
                        label="Nombre"
                        required
                        />

                    <Control 
                        component={TextField} 
                        model="post_form.lastName" 

                        
                        type="text" 
                        label="Apellido"
                        required
                        style={{marginTop:"5px"}}
                        />
                    <Button 
                        style = {{marginTop:"20px"}}
                        variant="contained"
                        type="submit">
                        Post Data
                    </Button>
                </div>                                        
            </Form>
    )
}

export default PostForm