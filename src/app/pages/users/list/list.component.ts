import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user.models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //On récupère la promesse du Userservice
  users$?: Promise<User[]>
  selectedUserDeleteConfirmation?: User
  showDeleteSuccessToast: boolean = false
  selectedUserForEdition?: User
  userForm?: FormGroup

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll()
  }

  onClickAddUser(modalUserForm: any): void {
    const modal = this.modalService.open(modalUserForm)

    modal.result
      .then(() => {

      })
      .catch(() => {
      })
  }

  onClickEditUser(modalUserForm: any, userToEdit: User): void {
    this.selectedUserForEdition = userToEdit

    const modal = this.modalService.open(modalUserForm)

    modal.result
      .then(() => {

      })
      .catch(() => {
      })
  }

  onSubmitUserForm(modal: any) {
    // On checke si le form est valide

    // Si oui, on ne fait rien

    // Sinon, on soumet le form
    if(this.userForm?.valid){
      modal.close
    }
  }

  onClickDeleteUser(modalDeleteUser: any, user: User) {
    this.selectedUserDeleteConfirmation = user

    const modal = this.modalService.open(modalDeleteUser)

    modal.result
      .then(() => {
        this.userService
          .deleteById(user.id)
          .then(() => {
            this.users$ = this.userService.getAll()
          })
        this.showDeleteSuccessToast = true
      })
      .catch(() => {
      })

  }



}
