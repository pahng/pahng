import { Component, HostBinding, OnChanges, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoggerService } from '../../core/logger.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'png-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [ fadeInAnimation ],
})
export class RegisterComponent implements OnInit, OnChanges {

    private user: User = {
        display_name: '',
        first_name: '',
        last_name: '',
        password: '',
    };

    @HostBinding('@fadeInAnimation') get fadeInAnimation() {
        return true;
    }

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private logger: LoggerService,
        private userService: UserService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.form = this.formBuilder.group({
            display_name: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.form.reset({
            display_name: this.user.display_name,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            password: this.user.password,
        });
    }

    submit() {
        if (this.form.valid) {
            this.user.display_name = this.form.value.display_name;
            this.user.first_name = this.form.value.first_name;
            this.user.last_name = this.form.value.last_name;
            this.user.password = this.form.value.password;
            this.userService.save(this.user).pipe(
                switchMap(user => this.authService.handleAuthentication(user))
            ).subscribe(() => this.router.navigate(['/']));
        } else {
            this._validateAllFormFields(this.form);
        }
    }

    private _validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this._validateAllFormFields(control);
            }
        });
    }

}
