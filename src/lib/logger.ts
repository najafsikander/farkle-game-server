import chalk from "chalk";

export const log = (message:string, ...args:any[]) => console.log(chalk.bgGreen(message, ...args));
export const info = (message:string, ...args:any[]) => console.info(chalk.bgBlue(message, ...args));
export const warn = (message:string, ...args:any[]) => console.warn(chalk.bgYellow(message, ...args));
export const error = (message:string, ...args:any[]) => console.error(chalk.bgRed(message, ...args));