export declare class LoginDto {
    email: string;
    senha: string;
}
export declare class LoginSuccessDto {
    statusCode: number;
    message: string;
    error: string | null;
    user: LoginDto;
}
export declare class LoginFailureDto {
    statusCode: number;
    message: string;
    error: string;
}
export declare const loginDto: LoginDto;
export declare const loginFailureDto: {
    status: number;
    description: string;
    type: typeof LoginFailureDto;
};
export declare const loginSuccessResponse: {
    status: number;
    description: string;
    access_token: string;
    type: typeof LoginSuccessDto;
};
