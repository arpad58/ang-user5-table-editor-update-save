import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  /* editor */
  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new User());
      }

      return this.userService.get(Number(params.id));
    })
  );


  constructor(
    private userService: UserService,           /* editor */
    private activatedRoute: ActivatedRoute,     /* editor */
    private router: Router                      /* update  create */
  ) { }

  ngOnInit(): void {
  }

  /* update  create */
  onSubmit(form: NgForm, user: User): void {
    try {
      if (user.id == 0) {
        this.userService.createUser(user).subscribe(
          () => this.router.navigate(['/'])
        );
      }
      else {
        this.userService.updateUser(user).subscribe(
          () => this.router.navigate(['/'])
        );
      }
    } catch (error) {
      // Error message
    }
  }

}
