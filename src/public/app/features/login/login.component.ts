import { Component, HostBinding, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from '../../shared/animations';
import { LoggerService } from '../../core/logger.service';
import { AuthService } from '../../auth/auth.service';

interface User {
    display_name: string;
    password: string;
}

@Component({
    selector: 'png-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [ fadeInAnimation ],
})
export class LoginComponent implements OnInit, OnChanges {

    private user: User = { display_name: '', password: '' };

    @HostBinding('@fadeInAnimation') get fadeInAnimation() {
        return true;
    }

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private logger: LoggerService,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.form = this.formBuilder.group({
            username: '',
            password: '',
        });
        this.route.data.subscribe(value => {
            if (value.logout) {
                this.logout();
            }
        });
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.form.reset({
            username: this.user.display_name,
            password: this.user.password,
        });
    }

    submit() {
        const returnUrl = localStorage.getItem('returnUrl') || '/';
        this.logger.log(this.form);
        this.user.display_name = this.form.value.username;
        this.user.password = this.form.value.password;
        this.authService.handleAuthentication(this.user).subscribe(loggedIn => {
            this.router.navigate([returnUrl]);
        });
    }

    private logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

}
