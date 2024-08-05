import { v4 } from "uuid";

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

//stubs
export function calculateComplexity(stringInfo: stringInfo){
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}

type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCaseWithCb(arg: string, callBack:LoggerServiceCallBack){
    if(!arg) {
        callBack('Invalid argument!');
        return;
    }
    callBack(`called function with ${arg}`)
    return arg.toUpperCase();
}
//spies
export class OtherStringUtils {

    //fingir que é algo da internet, externo
    public callExternalService(){
        console.log('Calling external service!!!');
    }

    public toUpperCase(arg: string){
        return arg.toUpperCase()
    }

    public logString(arg: string) {
        console.log(arg);
    }

}

//mocking modules
export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
    return arg.toLowerCase() + v4();
}