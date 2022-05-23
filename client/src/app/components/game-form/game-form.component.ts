import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  gamePivot: any = [];

  edit: boolean = false;

  constructor(private gamesServices: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.paramMap.get('id');
    if(gameId != null){
      this.gamesServices.getGame(gameId)
      .subscribe(
        res=>{
          console.log(gameId);
          console.log(res);
          this.gamePivot = res;
          this.game = this.gamePivot[0];
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;

    this.gamesServices.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games'])
      },
      err=>console.error(err)
    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gamesServices.updateGame(this.game.id, this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    )
  }

}
