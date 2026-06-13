export interface IDriver {
    navigate(url: string): Promise<void>;
    click(selector: string): Promise<void>;
    fill(selector: string, text: string): Promise<void>;
    getText(selector: string): Promise<string | null>;
    getAttribute(selector: string, attribute: string): Promise<string | null>;
    waitForSelector(selector: string): Promise<void>;
    isVisible(selector: string): Promise<boolean>;
    
    // Role-based actions
    clickByRole(role: string, name?: string | RegExp): Promise<void>;
    fillByRole(role: string, name: string | RegExp, text: string): Promise<void>;
    pressSequentiallyByRole(role: string, name: string | RegExp, text: string): Promise<void>;
    isVisibleByRole(role: string, name?: string | RegExp): Promise<boolean>;
}
