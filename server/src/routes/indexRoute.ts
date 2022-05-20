import {Router} from 'express';


class IndexRoute{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req, res)=>res.json({message: 'API REST at : http://localhost:3000/api/games'}));
    }
}

const indexRoute = new IndexRoute();
export default indexRoute.router;