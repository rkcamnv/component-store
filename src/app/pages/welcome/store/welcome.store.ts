import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { ModelUser } from "../../models/model.user";

interface AppState {
    status: 'loading' | 'idle';
    user: ModelUser;
    name: string;
}

@Injectable({ providedIn: 'root' })
export class AppStore extends ComponentStore<AppState>{

    constructor(
    ) {
        super({ status: 'loading', name: 'demo', user: null as any });
    }

    vm$ = this.select(
        this.state$,
        ({ name, user }) => ({
            name: name,
            user: user
        }),
        { debounce: true }
    );

    updateName = this.updater<string>((s, name) => ({
        ...s,
        name: name
    }));

    updateUser = this.updater<ModelUser>((s, user) => ({
        ...s,
        user: user
    }));
}