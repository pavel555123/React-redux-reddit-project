import express from 'express';
import ReactDOM from 'react-dom/server';
import {indexTemplate} from './indexTemplate';
import {App} from "../App";
import axios from "axios";

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:2000/auth`,
        {
            auth: {username: process.env.CLIENT_ID, password: 'QmBYEgVCGvRPeb6WM_pd1HXop4zS5g'},
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
    )
        .then(({data}) => {
            console.log(data);
            res.send(
                indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
            );
        })
        .catch(console.log)
});

app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.listen(2000, () => {
    console.log('Server started on http://localhost:2000');
});