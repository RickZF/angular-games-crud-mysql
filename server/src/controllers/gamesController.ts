import { Request, Response } from "express";
import pool from "../database";


class GamesController{

    public async create (req: Request, res: Response){
        const result =await pool.promise().query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'Game Saved'});
    }

    public async list (req: Request, res: Response){
        const games =await pool.promise().query('SELECT * FROM games');
        res.json(games[0]);
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const games = await pool.promise().query('SELECT * FROM games WHERE id=?',[id]);
        const result = (JSON.parse(JSON.stringify(games)));
        console.log(result);
        if(result[0].length > 0){
            console.log(games[0]);
            res.json(games[0]);
            
        }else{
            res.status(404).json({text: "The game doesn't exists"});
        }

    }

    public async update(req: Request, res: Response){
        const {id} = req.params;
        await pool.promise().query("UPDATE games set ? where id=?",[req.body, id]);
        res.json({message: 'The was updated'})
    }

    public async delete(req: Request, res: Response){
        const {id} = req.params;
        await pool.promise().query("DELETE FROM games where id=?",[id]);
        res.json({message: 'The game was deleted'})
    }

   
}

export const gamesController = new GamesController();