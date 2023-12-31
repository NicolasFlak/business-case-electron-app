import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user.models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$?: Promise<User>

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { // ActivatedRoute donne la route actuelle
  }

  ngOnInit() {
    // Correspond au :id qu'on a mis dans le app-routing.module.ts
    const id = this.route.snapshot.paramMap.get('id')

    if(id) {
      this.user$ = this.userService.getById(parseInt(id))
    }
    else {
      this.router.navigateByUrl('/not-found')
    }

  }
}
