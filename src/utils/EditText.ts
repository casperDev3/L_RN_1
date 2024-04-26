interface IStaticEditText {
    capitalize: (text: string) => string;
    cropText: (text: string, length: number, symbol?: string) => string;
}

export class EditText  {
    static capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    static cropText(text: string, length: number, symbol: string = "..."): string {
        return text.length > length ? text.slice(0, length) + symbol : text;
    }
}
