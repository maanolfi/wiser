export enum RepositoriesTypes {
    REQUEST = '@auth/AUTH_REQUEST',
    SUCCESS = '@auth/AUTH_SUCCESS',
    FAILURE = '@auth/AUTH_FAILURE',
}

export interface Repository {
    token: string,
    email: string,
    msg: {
        error: string,
    },
}

export interface RepositoriesState {
    data: Repository
}

