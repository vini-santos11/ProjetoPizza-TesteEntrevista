import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    }

    private async getData(): Promise<User[]> {
        let users: User[] = [];
        const data: any = await firstValueFrom(this.http.get("assets/data/db.json"));
        users = Object.entries(data.usuarios).map((element) => element[1] as User)

        return users;
    }

    async signIn(username: string, password: string) {
        const users = await this.getData();

        const user = users.find(user => user.nome == username && password == user.senha)

        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigate(['/home']);
        }
        else {
          this.openSnackBar();
        }
    }

    openSnackBar() {
      this._snackBar.open("Usuário ou senha inválido!");
      setTimeout(() => {
        this._snackBar.dismiss()
      }, 2000)
    }
}
